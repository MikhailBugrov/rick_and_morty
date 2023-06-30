import { Link } from "react-router-dom";
import {
  Stack,
  Card,
  Button,
  CardMedia,
  Typography,
  ButtonGroup,
} from '@mui/material';

import { Character } from "../../../api/types";

interface CardCharacterProps {
  data?: Character;
  onTryAgain: () => void;
}

  function CardCharacter({ data, onTryAgain }: CardCharacterProps) {
    return (
      <Stack>
        <div>
          <Card sx={{ marginBottom: '50px' }}>
            <Typography variant="h5">
              Congratulations! 
              <br /> 
              Now you're {data?.character.name}
            </Typography>
            <Typography>
              Status: {data?.character.status}
              <br />
              Location: {data?.character.location.name}
            </Typography>
            <CardMedia component="img" image={data?.character.image} alt={data?.character.name} />
            <ButtonGroup variant="text">
              <Button component={Link} to={`/characters/${data?.character.id}`}>Details</Button>
              <Button onClick={onTryAgain}>Try again</Button>
            </ButtonGroup>
            {!data?.character && <div>No results</div>}
          </Card>
        </div>
      </Stack>
    );
  }
  
  export default CardCharacter;