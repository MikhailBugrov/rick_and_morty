import { useGetCharactersQuery } from '../../../api/ApiRickAndMorty';
import { Link } from "react-router-dom";

import { Loading } from '../../../components/loading';
import { useQueryStringParams } from '../../../hooks/useQueryStringParams';
import { useDebounce } from '../../../hooks/useDebounce';

import {
  Stack,
  Typography,
  Grid,
  Card,
  CardMedia,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Pagination,
  CardActionArea,
  useMediaQuery
} from '@mui/material';


const CharactersList = () => {
  const [listSearchParams, setListSearchParams] = useQueryStringParams<{ name: string, status: string, page: number }>();
  const debouncedName = useDebounce(listSearchParams.name);

  const { data, isFetching } = useGetCharactersQuery({
    page: listSearchParams.page,
    filter: { name: debouncedName, status: listSearchParams.status },
  });


  return (
    <Loading isFetching={isFetching}>
      <Stack>

        <div>
          <TextField
            label="Name"
            value={listSearchParams.name || ''}
            onChange={(e) => setListSearchParams({ name: e.target.value, page: 1 })}
          />
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select
              value={listSearchParams.status || ''}
              onChange={(e) => setListSearchParams({ status: e.target.value, page: 1 })}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="alive">Alive</MenuItem>
              <MenuItem value="dead">Dead</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </div>

        {!data?.characters?.results.length && <div>No results found for this filter</div>}

        <Grid container>
          {data?.characters.results.map((character) => (
            <Grid item key={character.id}>
              <CardActionArea component={Link} to={`/characters/${character.id}`}>
                <Card>
                  <Typography variant="h5">
                    {character.name}
                  </Typography>
                  <CardMedia component="img" image={character.image} alt={character.name} />
                  <Typography>
                    Status: {character.status}
                    <br />
                    Location: {character.location.name}
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Pagination
          size={useMediaQuery('(max-width:600px)') ? 'small' : 'large'}
          count={data?.characters.info.pages || 0}
          page={listSearchParams.page}
          onChange={(e, newPage: number) => setListSearchParams({ page: newPage })}
        />

      </Stack>
    </Loading>
  );
};

export default CharactersList;

