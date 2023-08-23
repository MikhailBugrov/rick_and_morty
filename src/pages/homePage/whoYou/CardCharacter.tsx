import { Link } from "react-router-dom";
import { Button, CardMedia, Typography, ButtonGroup } from "@mui/material";
import { CenteredBox, CardImg } from "../../../styles";
import { Character } from "../../../api/types";

interface CardCharacterProps {
  data?: Character;
  onTryAgain: () => void;
}

const CardCharacter = ({ data, onTryAgain }: CardCharacterProps) => (
  <CenteredBox>
    <CardImg sx={{ marginBottom: "50px" }}>
      <Typography variant="h5">
        Congratulations!
        <br />
        Now you&apos;re {data?.character.name}
      </Typography>
      <Typography>
        Status: {data?.character.status}
        <br />
        Location: {data?.character.location.name}
      </Typography>
      <CardMedia component="img" image={data?.character.image} alt={data?.character.name} />
      <ButtonGroup variant="text">
        <Button component={Link} to={`/characters/${data?.character.id}`}>
          Details
        </Button>
        <Button onClick={onTryAgain}>Try again</Button>
      </ButtonGroup>
      {!data?.character && <Typography align="center">No results</Typography>}
    </CardImg>
  </CenteredBox>
);

export default CardCharacter;
