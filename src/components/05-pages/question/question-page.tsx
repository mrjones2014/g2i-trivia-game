import useGameStateContext from "hooks/context/use-game-state-context";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { sitemap } from "sitemap";
import { EnvUtils } from "utilities/env-utils";
import { NumberUtils } from "utilities/number-utils";
import React from "react";
import { Question } from "components/03-molecules/question/question";
import GameStateRecord from "models/game-state";
import { RouteUtils } from "utilities/route-utils";
import { Progress } from "antd";
import "./question-page.scss";
import { Helmet } from "react-helmet";
import { BasePageTitle } from "utilities/constants/base-page-title";

interface PathParams {
  questionNum: string;
}

const baseClassName = "question-page";

/**
 * The page presenting each question to the user.
 */
export const QuestionPage: React.FC = () => {
  const history = useHistory();
  const { gameState, setGameState } = useGameStateContext();
  // we want to use 1-based "question numbers", so we need to conver to 0-based index
  const { questionNum } = useParams<PathParams>();
  const questionIndex = (NumberUtils.parseInt(questionNum) ?? 0) - 1;
  const question = gameState.questions.get(questionIndex);

  // convert 0-based index to 1-based "question number" for next question in sequence
  const nextQuestionNum = questionIndex + 2;

  const handleAnswer = (userAnswer: boolean) => {
    setGameState((prevState: GameStateRecord) =>
      prevState.with({
        questions: prevState.questions.set(
          questionIndex,
          question!.with({ userAnswer })
        ),
      })
    );

    if (questionIndex === gameState.questions.size - 1) {
      history.push(sitemap.game.results);
      return;
    }

    history.push(
      RouteUtils.getUrl(sitemap.game.question, { questionNum: nextQuestionNum })
    );
  };

  if (question == null) {
    EnvUtils.logIfDevelopment(
      `Invalid question number, ${questionNum}`,
      "warn"
    );
    return <Redirect to={sitemap.home} />;
  }

  if (question.isAnswered()) {
    history.push(
      RouteUtils.getUrl(sitemap.game.question, { questionNum: nextQuestionNum })
    );
    return null;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {BasePageTitle} - Question {questionNum}
        </title>
      </Helmet>
      <div className={baseClassName}>
        <div className={`${baseClassName}__progress`}>
          <Progress
            percent={gameState.progressPercent(questionIndex)}
            format={() => gameState.formatProgressText(questionIndex)}
            status="normal"
          />
        </div>
        <div className={`${baseClassName}__content`}>
          <Question question={question} onAnswer={handleAnswer} />
        </div>
      </div>
    </React.Fragment>
  );
};
