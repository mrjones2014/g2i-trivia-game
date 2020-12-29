import { Spin } from "antd";
import useGameStateContext from "hooks/context/use-game-state-context";
import useQuestions from "hooks/domain/questions/use-questions";
import GameStateRecord from "models/game-state";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { sitemap } from "sitemap";
import { BasePageTitle } from "utilities/constants/base-page-title";
import { RouteUtils } from "utilities/route-utils";
import "./start-page.scss";

const baseClassName = "start-page";

/**
 * Shim page to load the questions and show a loading
 * indicator before redirecting to the first question page.
 */
export const StartPage: React.FC = () => {
  const { questions, loading } = useQuestions();
  const { gameState, setGameState } = useGameStateContext();

  useEffect(() => {
    setGameState((prevState: GameStateRecord) => prevState.with({ questions }));
  }, [setGameState, questions]);

  if (loading || gameState.questions.size === 0) {
    return (
      <React.Fragment>
        <Helmet>
          <title>{BasePageTitle} - Loading Questions...</title>
        </Helmet>
        <div className={baseClassName}>
          <Spin tip="Loading questions..." />
        </div>
      </React.Fragment>
    );
  }

  return (
    <Redirect
      to={RouteUtils.getUrl(sitemap.game.question, { questionNum: 1 })}
    />
  );
};
