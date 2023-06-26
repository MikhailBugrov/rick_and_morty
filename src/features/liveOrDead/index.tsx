import { useGetCharacterByIdQuery } from "../../api/ApiRickAndMorty";
import { useState } from "react";
import { Loading } from "../loading";
import AnswerDisplay from './AnswerDisplay';
import { MAX_CHARACTERS } from "../../constants/constants";

import {
  Stack,
  Card,
  Box,
  CardMedia,
  Typography,
} from '@mui/material';

function LiveOrDead() {
  const [characterId, setCharacterId] = useState(Math.floor(Math.random() * MAX_CHARACTERS) + 1);
  const { data, isLoading } = useGetCharacterByIdQuery(characterId);
  const [answer, setAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  function handleAnswer(answer: string) {
    if (data?.character.status === answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setAnswer(answer);
    setTimeout(() => {
      handleNext();
    }, 1000);
  }

  function handleNext() {
    setAnswer(null);
    setCharacterId(Math.floor(Math.random() * 826) + 1);
  }

  return (
    <Loading isFetching={isLoading}>
      <Stack>
        <Typography variant="h4" mt={'30px'}>Live or Dead</Typography>
        <div>
          <Card sx={{ marginBottom: '50px' }}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" style={{ color: 'green' }}>
                Correct answers: {correctAnswers}
              </Typography>
              <Typography variant="h6" style={{ color: 'red', marginLeft: '10px' }}>
                Incorrect answers: {incorrectAnswers}
              </Typography>
            </Box>
            <Typography m={0} variant="h6">
              {data?.character.name}
            </Typography>
            <Typography mt={0}>
              Location: {data?.character.location.name}
            </Typography>
            <CardMedia component="img" image={data?.character.image} alt={data?.character.name} />
            {!data?.character && <Typography>No results</Typography>}
            <Box height={'70px'} mt={'20px'}>
              <AnswerDisplay
                status={answer ? (data?.character.status === answer ? 'correct' : 'incorrect') : null}
                onNextQuestion={handleAnswer}
              />
            </Box>
          </Card>
        </div>
      </Stack>
    </Loading>
  );
}

export default LiveOrDead;