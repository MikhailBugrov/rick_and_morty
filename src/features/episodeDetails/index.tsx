import { useNavigate, useParams } from 'react-router-dom';
import { useGetEpisodeByIdQuery } from '../../api/ApiRickAndMorty';
import { Link } from "react-router-dom";
import { Loading } from '../loading';

import { Close as CloseIcon, ExpandMore } from '@mui/icons-material';
import {
  Stack,
  Box,
  Card,
  Button,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

function EpisodeDetalis() {
  const { data, isFetching } = useGetEpisodeByIdQuery(Number(useParams().id));
  const navigate = useNavigate();

  return (
    <Loading isFetching={isFetching}>
      <Stack>
        {data?.episode && (
          <div>
            <Card>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ flexGrow: 1, pl: 6 }}>
                  {data.episode.episode}
                </Typography>
                <IconButton onClick={() => navigate(-1)}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Typography>
                Name: {data.episode.name}
                <br />
                Air date: {data.episode.air_date}
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />} >
                  Characters
                </AccordionSummary>
                <AccordionDetails>
                  {data.episode.characters?.map(character => (
                    <Box key={character.id}>
                      <Button component={Link} to={`/characters/${character.id}`}>
                        {character.name}
                      </Button>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>

            </Card>
          </div>
        )}
      </Stack>
    </Loading>
  );
}

export default EpisodeDetalis;