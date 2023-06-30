import { Typography, Button, ButtonGroup } from '@mui/material';

interface AnswerDisplayProps {
  status: 'correct' | 'incorrect' | null;
  onNextQuestion: (answer: string) => void;
}

function AnswerDisplay({ status, onNextQuestion }: AnswerDisplayProps) {
  if (status === 'correct') {
    return (
      <Typography variant="h5" color="green" pt={'8px'}>
        Correct!
      </Typography>
    );
  }

  if (status === 'incorrect') {
    return (
      <Typography variant="h5" color="red" pt={'8px'}>
        Incorrect!
      </Typography>
    );
  }

  return (
    <ButtonGroup>
      <Button color="warning" onClick={() => onNextQuestion("Dead")}>Dead</Button>
      <Button color="success" onClick={() => onNextQuestion("Alive")}>Alive</Button>
      <Button onClick={() => onNextQuestion("unknown")}>Unknown</Button>
    </ButtonGroup>
  );
}

export default AnswerDisplay;