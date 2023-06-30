import {
  Stack,
  Card,
  Button,
  Typography,
  ButtonGroup,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';

interface Steps {
  label: string;
  question: string;
  options: string[];
}

interface QuestionnaireProps {
  steps: Steps[];
  currentQuestion: number;
  onQuestionAnswered: () => void;
}

function Questions({ steps, currentQuestion, onQuestionAnswered }: QuestionnaireProps) {
  return (
    <Stack>
      <div>
        <Card>
          <Typography mb={0} variant="h6">
            Which character from Rick and Morty are you?
          </Typography>
          <Typography mt={0} variant="subtitle2">
            Answer five questions to find out
          </Typography>
          <Stepper activeStep={currentQuestion - 1} alternativeLabel>
            {steps.map(({ label }) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>

          {steps.map(({ question, options }, index) => (
            <div key={index} style={currentQuestion === index + 1 ? { display: 'block' } : { display: 'none' }}>
              <Typography pt={2}>
                {question}
              </Typography>

              <ButtonGroup onClick={onQuestionAnswered}>
                {options.map(option => (
                  <Button key={option}>{option}</Button>
                ))}
              </ButtonGroup>
            </div>
          ))}
        </Card>
      </div>
    </Stack>
  );
}

export default Questions;