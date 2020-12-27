import GameStateRecord from "models/game-state";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type GameStateContextUpdater = Dispatch<SetStateAction<GameStateRecord>>;

const defaultState = new GameStateRecord();
const defaultUpdater: GameStateContextUpdater = () => {};
export const GameStateContext = createContext<[GameStateRecord, GameStateContextUpdater]>(
    [defaultState, defaultUpdater]
);

export default function useGameStateContext() {
    const [gameState, setGameState] = useContext(GameStateContext);

    return { gameState, setGameState };
}