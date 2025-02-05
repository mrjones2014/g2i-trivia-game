import useGameStateContext from "hooks/context/use-game-state-context";
import { Button, Card, Typography } from "antd";
import React from "react";
import { QuestionResultList } from "components/03-molecules/results/question-result-list";
import { useHistory } from "react-router-dom";
import GameStateRecord from "models/game-state";
import { sitemap } from "sitemap";
import "./results-page.scss";
import { Helmet } from "react-helmet";
import { BasePageTitle } from "utilities/constants/base-page-title";

const { Title } = Typography;

const baseClassName = "results-page";

/**
 * The final screen of the game, showing the user's
 * results/score, with a button to start over.
 */
export const ResultsPage: React.FC = () => {
  const history = useHistory();
  const { gameState, setGameState } = useGameStateContext();

  const resetGame = () => {
    setGameState(new GameStateRecord());
    history.push(sitemap.home);
  };

  // if we haven't answered all questions, something is wrong
  // with the game state (likely a page refresh); restart
  if (
    gameState.numAnswered() !== gameState.questions.size ||
    gameState.questions.isEmpty()
  ) {
    resetGame();
    return null;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{BasePageTitle} - Results</title>
      </Helmet>
      <div className={baseClassName}>
        <Title>
          You Scored
          <p>{gameState.scoreString()}</p>
        </Title>
        <Card className={`${baseClassName}__results-summary`}>
          <QuestionResultList questions={gameState.questions} />
        </Card>
        <Button
          type="primary"
          onClick={resetGame}
          size="large"
          className={`${baseClassName}__restart-button`}
        >
          Play Again?
        </Button>
      </div>
    </React.Fragment>
  );
};
