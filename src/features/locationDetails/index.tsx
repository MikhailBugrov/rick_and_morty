import { useNavigate, useParams } from 'react-router-dom';
import { useGetLocationByIdQuery } from '../../api/ApiRickAndMorty';
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


function LocationDetalis() {
  const { data, isFetching } = useGetLocationByIdQuery(Number(useParams().id));
  const navigate = useNavigate();

  return (
    <Loading isFetching={isFetching}>
      <Stack>
        {data?.location && (
          <div>
            <Card>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ flexGrow: 1, pl: 6 }}>
                  {data.location.name}
                </Typography>
                <IconButton onClick={() => navigate(-1)}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Typography>
                Name: {data.location.type}
                <br />
                Air date: {data.location.dimension}
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Characters
                </AccordionSummary>
                <AccordionDetails>
                  {data.location.residents?.map(resident => (
                    <Box key={resident.id}>
                      <Button component={Link} to={`/characters/${resident.id}`}>
                        {resident.name}
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

export default LocationDetalis;