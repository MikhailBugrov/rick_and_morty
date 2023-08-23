import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  CardMedia,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Pagination,
  CardActionArea,
  useMediaQuery,
} from "@mui/material";
import { useGetCharactersQuery } from "../../../api/ApiRickAndMorty";
import useQueryStringParams from "../../../hooks/useQueryStringParams";
import Loading from "../../../components/loading";
import useDebounce from "../../../hooks/useDebounce";
import { CenteredBox, CardImg } from "../../../styles";

const CharactersList = () => {
  const [listSearchParams, setListSearchParams] = useQueryStringParams<{
    name: string;
    status: string;
    page: number;
  }>();
  const debouncedName = useDebounce(listSearchParams.name);

  const { data, isFetching } = useGetCharactersQuery({
    page: listSearchParams.page,
    filter: { name: debouncedName, status: listSearchParams.status },
  });

  return (
    <>
      <CenteredBox>
        <TextField
          label="Name"
          value={listSearchParams.name || ""}
          onChange={(e) => setListSearchParams({ name: e.target.value, page: 1 })}
        />
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select
            value={listSearchParams.status || ""}
            onChange={(e) => setListSearchParams({ status: e.target.value, page: 1 })}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </CenteredBox>

      <Loading isFetching={isFetching}>
        {!data?.characters?.results.length && <Typography align="center">No results found for this filter</Typography>}

        <Grid container>
          {data?.characters.results.map((character) => (
            <Grid item key={character.id}>
              <CardActionArea component={Link} to={`/characters/${character.id}`}>
                <CardImg>
                  <Typography variant="h5">{character.name}</Typography>
                  <CardMedia component="img" image={character.image} alt={character.name} />
                  <Typography>
                    Status: {character.status}
                    <br />
                    Location: {character.location.name}
                  </Typography>
                </CardImg>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Pagination
          size={useMediaQuery("(max-width:600px)") ? "small" : "large"}
          count={data?.characters.info.pages || 0}
          page={listSearchParams.page}
          onChange={(e, newPage: number) => setListSearchParams({ page: newPage })}
        />
      </Loading>
    </>
  );
};

export default CharactersList;
