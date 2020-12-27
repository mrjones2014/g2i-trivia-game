import { Spin } from "antd";
import useGameStateContext from "hooks/context/use-game-state-context";
import useQuestions from "hooks/domain/use-questions";
import GameStateRecord from "models/game-state";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { sitemap } from "sitemap";
import { RouteUtils } from "utilities/route-utils";
import "./start-page.scss";

const baseClassName = "start-page";

export const StartPage: React.FC = () => {
    const { questions, loading } = useQuestions();
    const { gameState, setGameState } = useGameStateContext();

    useEffect(() => {
        setGameState((prevState: GameStateRecord) => prevState.with({ questions }));
    }, [setGameState, questions]);

    if (loading || gameState.questions.size === 0) {
        return (
            <div className={baseClassName}>
                <Spin tip="Loading questions..."/>
            </div>
        );
    }

    return <Redirect to={RouteUtils.getUrl(sitemap.game.question, { questionNum: 1 })}/>;
};