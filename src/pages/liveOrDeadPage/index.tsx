import { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { useGetCharacterByIdQuery } from "../../api/ApiRickAndMorty";
import Loading from "../../components/loading";
import MAX_CHARACTERS from "../../constants/constants";
import { CenteredBox, CardImg } from "../../styles";
import AnswerDisplay from "./AnswerDisplay";

const LiveOrDead = () => {
  const [characterId, setCharacterId] = useState(Math.floor(Math.random() * MAX_CHARACTERS) + 1);
  const { data, isLoading } = useGetCharacterByIdQuery(characterId);
  const [answer, setAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  function handleNext() {
    setAnswer(null);
    setCharacterId(Math.floor(Math.random() * 826) + 1);
  }

  function handleAnswer(userAnswer: string) {
    if (data?.character.status === userAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setAnswer(userAnswer);
    setTimeout(() => {
      handleNext();
    }, 1000);
  }

  const status = data?.character.status === answer ? "correct" : "incorrect";

  return (
    <>
      <Typography variant="h4" align="center" mt="30px">
        Live or Dead
      </Typography>
      <Loading isFetching={isLoading}>
        <CenteredBox>
          <CardImg sx={{ marginBottom: "50px" }}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" style={{ color: "green" }}>
                Correct answers: {correctAnswers}
              </Typography>
              <Typography variant="h6" style={{ color: "red", marginLeft: "10px" }}>
                Incorrect answers: {incorrectAnswers}
              </Typography>
            </Box>
            <Typography m={0} variant="h6">
              {data?.character.name}
            </Typography>
            <Typography mt={0}>Location: {data?.character.location.name}</Typography>
            <CardMedia component="img" image={data?.character.image} alt={data?.character.name} />
            {!data?.character && <Typography align="center">No results</Typography>}
            <Box height="70px" mt="20px">
              <AnswerDisplay
                status={answer ? status : null}
                onNextQuestion={(userAnswer) => handleAnswer(userAnswer)}
              />
            </Box>
          </CardImg>
        </CenteredBox>
      </Loading>
    </>
  );
};

export default LiveOrDead;
