import { Link } from "react-router-dom";
import { useMediaQuery, Grid, TextField, Pagination, Typography, CardActionArea } from "@mui/material";
import { useGetLocationsQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";
import useQueryStringParams from "../../../hooks/useQueryStringParams";
import useDebounce from "../../../hooks/useDebounce";
import { CenteredBox, BaseCard } from "../../../styles";

const LocationsList = () => {
  const [listSearchParams, setListSearchParams] = useQueryStringParams<{ name: string; page: number }>();
  const debouncedName = useDebounce(listSearchParams.name);

  const { data, isFetching } = useGetLocationsQuery({
    page: listSearchParams.page,
    filter: { name: debouncedName },
  });

  return (
    <>
      <CenteredBox>
        <TextField
          label="Name"
          value={listSearchParams.name || ""}
          onChange={(e) => setListSearchParams({ name: e.target.value, page: 1 })}
        />
      </CenteredBox>

      <Loading isFetching={isFetching}>
        {!data?.locations?.results.length && <Typography align="center">No results found for this filter</Typography>}

        <Grid container>
          {data?.locations.results.map((location) => (
            <Grid item key={location.id}>
              <CardActionArea component={Link} to={`/locations/${location.id}`}>
                <BaseCard>
                  <Typography variant="h5">{location.name}</Typography>
                  <Typography>
                    Type: {location.type}
                    <br />
                    Dimension: {location.dimension}
                  </Typography>
                </BaseCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Pagination
          size={useMediaQuery("(max-width:600px)") ? "small" : "large"}
          variant="outlined"
          color="primary"
          count={data?.locations.info.pages || 0}
          page={listSearchParams.page}
          onChange={(e, newPage: number) => setListSearchParams({ page: newPage })}
        />
      </Loading>
    </>
  );
};

export default LocationsList;
