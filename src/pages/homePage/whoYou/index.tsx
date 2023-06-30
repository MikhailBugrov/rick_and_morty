import { useGetCharacterByIdQuery } from '../../../api/ApiRickAndMorty';
import { useEffect, useState, useRef } from "react";
import { Loading } from '../../../components/loading';
import { steps } from './steps';
import Questions from './Questions';
import CardCharacter from './CardCharacter';
import { MAX_CHARACTERS } from "../../../constants/constants";

function WhoYou() {
  const idRef = useRef(localStorage.getItem('favoriteCharacterId') || Math.floor(Math.random() * MAX_CHARACTERS) + 1);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const { data, isFetching } = useGetCharacterByIdQuery(+idRef.current);

  useEffect(() => {
    if (answeredQuestions < steps.length && !localStorage.getItem('favoriteCharacterId')) {
      return;
    }
    setShowCharacter(true);
    if (!localStorage.getItem('favoriteCharacterId')) {
      window.localStorage.setItem('favoriteCharacterId', data!.character.id.toString());
    }
  }, [answeredQuestions, data]);

  const handleQuestionAnswered = () => {
    setAnsweredQuestions(prevCount => prevCount + 1);
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  const handleTryAgain = () => {
    window.localStorage.removeItem('favoriteCharacterId');
    idRef.current = Math.floor(Math.random() * MAX_CHARACTERS) + 1;
    setAnsweredQuestions(0);
    setCurrentQuestion(1);
    setShowCharacter(false);
  };

  if (showCharacter) {
    return (
      <Loading isFetching={isFetching}>
        <CardCharacter data={data} onTryAgain={handleTryAgain} />
      </Loading>
    );
  }

  return (
    <Loading isFetching={isFetching}>
      <Questions steps={steps} currentQuestion={currentQuestion} onQuestionAnswered={handleQuestionAnswered} />
    </Loading>
  );
}

export default WhoYou;