import { Button, Typography, ButtonGroup, Stepper, Step, StepLabel } from "@mui/material";
import { CenteredBox, BaseCard } from "../../../styles";

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

const Questions = ({ steps, currentQuestion, onQuestionAnswered }: QuestionnaireProps) => (
  <CenteredBox>
    <BaseCard>
      <Typography mb={0} variant="h6">
        Which character from Rick and Morty are you?
      </Typography>
      <Typography mt={0} variant="subtitle2">
        Answer five questions to find out
      </Typography>
      <Stepper activeStep={currentQuestion - 1} alternativeLabel>
        {steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      {steps.map(({ label, question, options }, index) => (
        <div key={label} style={currentQuestion === index + 1 ? { display: "block" } : { display: "none" }}>
          <Typography pt={2}>{question}</Typography>

          <ButtonGroup onClick={onQuestionAnswered}>
            {options.map((option) => (
              <Button key={option}>{option}</Button>
            ))}
          </ButtonGroup>
        </div>
      ))}
    </BaseCard>
  </CenteredBox>
);

export default Questions;
