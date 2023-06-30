import { useGetEpisodesQuery } from '../../../api/ApiRickAndMorty';
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


const EpisodesList = () => {
  const [listSearchParams, setListSearchParams] = useQueryStringParams<{ name: string, episode: string, page: number }>();

  const debouncedName = useDebounce(listSearchParams.name);
  const debouncedEpisode = useDebounce(listSearchParams.episode);

  const { data, isFetching } = useGetEpisodesQuery({
    page: listSearchParams.page,
    filter: { name: debouncedName, episode: debouncedEpisode },
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
          <TextField
            label="Episode"
            value={listSearchParams.episode || ''}
            onChange={(e) => setListSearchParams({ episode: e.target.value, page: 1 })}
          />
        </div>

        {!data?.episodes?.results.length && <div>No results found for this filter</div>}

        <Grid container>
          {data?.episodes.results.map((episode) => (
            <Grid item key={episode.id}>
              <CardActionArea component={Link} to={`/episodes/${episode.id}`}>
                <Card>
                  <Typography variant="h5">
                    {episode.episode}
                  </Typography>
                  <Typography>
                    Name: {episode.name}
                    <br />
                    Air date: {episode.air_date}
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Pagination
          size={useMediaQuery('(max-width:600px)') ? 'small' : 'large'}
          count={data?.episodes.info.pages || 0}
          page={listSearchParams.page}
          onChange={(e, newPage: number) => 
            setListSearchParams({ page: newPage })}
        />

      </Stack>
    </Loading>
  );
};

export default EpisodesList;