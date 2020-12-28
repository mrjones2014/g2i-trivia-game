import QuestionRecord from "models/question";
import React from "react";
import { Typography, Button, Card } from "antd";
import he from "he";
import "./question.scss";

const { Paragraph } = Typography;

export interface QuestionProps {
  question: QuestionRecord;
  onAnswer: (userAnswer: boolean) => void;
}

const baseClassName = "question";

/**
 * Render a question with a button for each answer (true or false)
 * @param props
 */
export const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const { question, onAnswer } = props;

  const getAnswerHandler = (userAnswer: boolean) => () => onAnswer(userAnswer);

  return (
    <div className={baseClassName}>
      <Card title={question.category} className={`${baseClassName}__card`}>
        <div className={`${baseClassName}__card__question-text`}>
          <Paragraph>{he.decode(question.question)}</Paragraph>
        </div>
      </Card>
      {question.userAnswer == null && (
        <div className={`${baseClassName}__answer-buttons`}>
          <Button size="large" type="primary" onClick={getAnswerHandler(true)}>
            True
          </Button>
          <Button
            size="large"
            type="primary"
            danger={true}
            onClick={getAnswerHandler(false)}
          >
            False
          </Button>
        </div>
      )}
    </div>
  );
};
