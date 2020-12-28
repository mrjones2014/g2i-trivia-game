import { List } from "immutable";
import QuestionRecord from "models/question";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import React from "react";
import he from "he";
import "./question-result-list.scss";
import { StringUtils } from "utilities/string-utils";

const { Title, Paragraph } = Typography;

export interface QuestionResultListProps {
  questions: List<QuestionRecord>;
}

const baseClassName = "question-result-list";

/**
 * Render the game results, listing each question and
 * indicating whether the user answered correctly or incorrectly.
 * @param props
 */
export const QuestionResultList: React.FC<QuestionResultListProps> = (
  props: QuestionResultListProps
) => {
  const { questions } = props;
  return (
    <div className={baseClassName}>
      {questions.map((question: QuestionRecord) => (
        <Card className={`${baseClassName}__card`} key={question.question}>
          <div
            className={`${baseClassName}__card__question ${
              question.isCorrect() ? "-correct" : "-incorrect"
            }`}
          >
            {question.isCorrect() ? <CheckOutlined /> : <CloseOutlined />}
            <div className={`${baseClassName}__card__question__summary`}>
              <Title level={2}>{he.decode(question.question)}</Title>
              <Paragraph>
                Your Answer:{" "}
                {StringUtils.capitalize(question.userAnswer!.toString())}
              </Paragraph>
              <Paragraph>
                Correct Answer:{" "}
                {StringUtils.capitalize(question.correctAnswer!.toString())}
              </Paragraph>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
