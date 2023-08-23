import { Link, useNavigate, useParams } from "react-router-dom";
import { Close as CloseIcon, ExpandMore } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useGetEpisodeByIdQuery } from "../../../api/ApiRickAndMorty";
import Loading from "../../../components/loading";
import { CenteredBox, BaseCard } from "../../../styles";

const EpisodeDetalis = () => {
  const { data, isFetching } = useGetEpisodeByIdQuery(Number(useParams().id));
  const navigate = useNavigate();

  return (
    <Loading isFetching={isFetching}>
      <CenteredBox>
        <BaseCard>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ flexGrow: 1, pl: 6 }}>
              {data?.episode.episode}
            </Typography>
            <IconButton onClick={() => navigate(-1)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography>
            Name: {data?.episode.name}
            <br />
            Air date: {data?.episode.air_date}
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>Characters</AccordionSummary>
            <AccordionDetails>
              {data?.episode.characters?.map((character) => (
                <Box key={character.id}>
                  <Button component={Link} to={`/characters/${character.id}`}>
                    {character.name}
                  </Button>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </BaseCard>
      </CenteredBox>
    </Loading>
  );
};

export default EpisodeDetalis;
