import { useGetLocationsQuery } from '../../../api/ApiRickAndMorty';
import { Link } from "react-router-dom";
import { Loading } from '../../../components/loading';
import { useQueryStringParams } from '../../../hooks/useQueryStringParams';
import { useDebounce } from '../../../hooks/useDebounce';

import {
  useMediaQuery,
  Grid,
  Card,
  TextField,
  Pagination,
  Stack,
  Typography,
  CardActionArea,
} from '@mui/material';

const LocationsList = () => {
  const [listSearchParams, setListSearchParams] = useQueryStringParams<{ name: string, page: number }>();
  const debouncedName = useDebounce(listSearchParams.name);

  const { data, isFetching } = useGetLocationsQuery({
    page: listSearchParams.page,
    filter: { name: debouncedName },
  });

  return (
    <Loading isFetching={isFetching}>
      <Stack>
        <div>
          <TextField
            label="Name"
            value={listSearchParams.name || ''}
            onChange={(e) =>
              setListSearchParams({ name: e.target.value, page: 1 })
            }
          />
        </div>

        {!data?.locations?.results.length && (
          <div>No results found for this filter</div>
        )}

        <Grid container>
          {data?.locations.results.map((location) => (
            <Grid item key={location.id}>
              <CardActionArea component={Link} to={`/locations/${location.id}`}>
                <Card>
                  <Typography variant="h5">{location.name}</Typography>
                  <Typography>
                    Type: {location.type}
                    <br />
                    Dimension: {location.dimension}
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Pagination
          size={useMediaQuery('(max-width:600px)') ? 'small' : 'large'}
          variant="outlined"
          color="primary"
          count={data?.locations.info.pages || 0}
          page={listSearchParams.page}
          onChange={(e, newPage: number) =>
            setListSearchParams({ page: newPage })
          }
        />
      </Stack>
    </Loading>
  );
};

export default LocationsList;