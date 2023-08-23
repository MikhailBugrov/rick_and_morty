import { Link, useNavigate, useParams } from "react-router-dom";
import { Close as CloseIcon, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useGetCharacterByIdQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";
import { CenteredBox, CardImg } from "../../../styles";

const CharacterDetalis = () => {
  const { data, isFetching } = useGetCharacterByIdQuery(Number(useParams().id));
  const navigate = useNavigate();

  return (
    <Loading isFetching={isFetching}>
      <CenteredBox>
        <CardImg>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">{data?.character.name}</Typography>
            <IconButton onClick={() => navigate(-1)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <CardMedia component="img" image={data?.character.image} alt={data?.character.name} />
          <Typography>
            Status: {data?.character.status}
            <br />
            Origin: {data?.character.origin.name}
          </Typography>
          <Button component={Link} to={`/locations/${data?.character.location.id}`}>
            Location: {data?.character.location.name}
          </Button>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>Episodes</AccordionSummary>
            <AccordionDetails>
              {data?.character.episode?.map((episode) => (
                <Box key={episode.id}>
                  <Button component={Link} to={`/episodes/${episode.id}`}>
                    {episode.episode} <br /> {episode.name}
                  </Button>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </CardImg>
      </CenteredBox>
    </Loading>
  );
};

export default CharacterDetalis;
