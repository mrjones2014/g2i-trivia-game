import useGameStateContext from "hooks/context/use-game-state-context";
import { Link, Redirect, useParams } from "react-router-dom";
import { sitemap } from "sitemap";
import { EnvUtils } from "utilities/env-utils";
import { NumberUtils } from "utilities/number-utils";
import React from "react";
import { Question } from "components/03-molecules/question/question";
import GameStateRecord from "models/game-state";
import { RouteUtils } from "utilities/route-utils";
import "./question-page.scss";
import { Progress } from "antd";

interface PathParams {
  questionNum: string;
}

const baseClassName = "question-page";

export const QuestionPage: React.FC = () => {
  const { gameState, setGameState } = useGameStateContext();
  // we want to use 1-based "question numbers", so we need to conver to 0-based index
  const { questionNum } = useParams<PathParams>();
  const questionIndex = (NumberUtils.parseInt(questionNum) ?? 0) - 1;
  const question = gameState.questions.get(questionIndex);

  const handleAnswer = (userAnswer: boolean) =>
    setGameState((prevState: GameStateRecord) =>
      prevState.with({
        questions: prevState.questions.set(
          questionIndex,
          question!.with({ userAnswer })
        ),
      })
    );

  if (question == null) {
    EnvUtils.logIfDevelopment(
      `Invalid question number, ${questionNum}`,
      "warn"
    );
    return <Redirect to={sitemap.home} />;
  }

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__content`}>
        <Progress
          percent={((questionIndex + 1) / gameState.questions.size) * 100}
          format={() => `${questionIndex + 1} / ${gameState.questions.size}`}
        />
        <Question
          question={question}
          onAnswer={handleAnswer}
          questionNum={questionIndex + 1}
        />
        {question.userAnswer != null && (
          <React.Fragment>
            {questionIndex < gameState.questions.size - 1 && (
              <Link
                to={RouteUtils.getUrl(sitemap.game.question, {
                  questionNum: questionIndex + 2,
                })}
                className={`${baseClassName}__content__next-question-button ant-btn ant-btn-primary ant-btn-lg`}
              >
                Next Question
              </Link>
            )}
            {questionIndex >= gameState.questions.size - 1 && (
              <Link
                to={sitemap.game.results}
                className={`${baseClassName}__content__next-question-button ant-btn ant-btn-primary ant-btn-lg`}
              >
                Results
              </Link>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
