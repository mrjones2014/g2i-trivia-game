import QuestionRecord from "models/question";
import React from "react";
import { Typography, Button, Card } from "antd";
import he from "he";
import Humanize from "humanize-plus";
import "./question.scss";

const { Paragraph } = Typography;

export interface QuestionProps {
  question: QuestionRecord;
  onAnswer: (userAnswer: boolean) => void;
  questionNum: number;
}

const baseClassName = "question";

export const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const { question, onAnswer, questionNum } = props;

  const getAnswerHandler = (userAnswer: boolean) => () => onAnswer(userAnswer);

  const getCardClassModifier = () => {
    if (question.userAnswer == null) {
      return "";
    }

    if (question.userAnswer === question.correctAnswer) {
      return "-correct";
    }

    return "-incorrect";
  };

  return (
    <div className={baseClassName}>
      <Card
        title={`Question ${questionNum}`}
        className={`${baseClassName}__card ${getCardClassModifier()}`}
      >
        <div className={`${baseClassName}__card__question-text`}>
          <Paragraph>{he.decode(question.question)}</Paragraph>
        </div>
        {question.userAnswer != null && (
          <div className={`${baseClassName}__card__results`}>
            <Paragraph>
              Correct Answer:{" "}
              {Humanize.capitalize(question.correctAnswer.toString())}
            </Paragraph>
            <Paragraph>
              Your Answer: {Humanize.capitalize(question.userAnswer.toString())}
            </Paragraph>
          </div>
        )}
      </Card>
      <div className={`${baseClassName}__answer-buttons`}>
        <Button
          disabled={question.userAnswer != null}
          size="large"
          type="primary"
          onClick={getAnswerHandler(true)}
        >
          True
        </Button>
        <Button
          disabled={question.userAnswer != null}
          size="large"
          type="primary"
          danger={true}
          onClick={getAnswerHandler(false)}
        >
          False
        </Button>
      </div>
    </div>
  );
};
