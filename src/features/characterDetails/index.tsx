import { useNavigate, useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/ApiRickAndMorty';
import { Link } from "react-router-dom";
import { Loading } from '../loading';

import { Close as CloseIcon, ExpandMore } from '@mui/icons-material';
import {
  Stack,
  Box,
  Card,
  Button,
  IconButton,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

const CharacterDetalis = () => {
  const { data, isFetching } = useGetCharacterByIdQuery(Number(useParams().id));
  const navigate = useNavigate();

  return (
    <Loading isFetching={isFetching}>
      <Stack>
        {data?.character && (
          <div>
            <Card>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">
                  {data.character.name}
                </Typography>
                <IconButton onClick={() => navigate(-1)}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <CardMedia component="img" image={data.character.image} alt={data.character.name} />
              <Typography>
                Status: {data.character.status}
                <br />
                Origin: {data.character.origin.name}
              </Typography>
              <Button component={Link} to={`/locations/${data.character.location.id}`}>
                Location: {data.character.location.name}
              </Button>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />} >
                  Episodes
                </AccordionSummary>
                <AccordionDetails>
                  {data.character.episode?.map(episode => (
                    <Box key={episode.id}>
                      <Button component={Link} to={`/episodes/${episode.id}`}>
                        {episode.episode} <br /> {episode.name}
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

export default CharacterDetalis;