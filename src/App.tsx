import { AppRouter } from "components/06-routing/app-router";
import { GameStateContext } from "hooks/context/use-game-state-context";
import useMobileSafariVhShim from "hooks/utilities/use-mobile-safari-vh-shim";
import GameStateRecord from "models/game-state";
import React, { useState } from "react";
import "./app.scss";

function App() {
  useMobileSafariVhShim();

  const [gameState, setGameState] = useState(new GameStateRecord());

  return (
    <div className="app-container">
      <div className="app-container__content">
        <GameStateContext.Provider value={[gameState, setGameState]}>
          <AppRouter />
        </GameStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
