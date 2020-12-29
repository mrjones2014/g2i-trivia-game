import { ThemeProvider } from "components/03-molecules/themes/theme-provider";
import { AppRouter } from "components/03-molecules/router/app-router";
import { GameStateContext } from "hooks/context/use-game-state-context";
import useMobileSafariVhShim from "hooks/utilities/use-mobile-safari-vh-shim";
import GameStateRecord from "models/game-state";
import React, { useState } from "react";
import "./app.scss";
import { CookiesProvider } from "react-cookie";
import { AppHeader } from "components/03-molecules/headers/app-header";

const baseClassName = "app-container";

function App() {
  useMobileSafariVhShim();

  const [gameState, setGameState] = useState(new GameStateRecord());

  return (
    <CookiesProvider>
      <ThemeProvider />
      <div className={baseClassName}>
        <AppHeader />
        <div className={`${baseClassName}__content`}>
          <GameStateContext.Provider value={[gameState, setGameState]}>
            <AppRouter />
          </GameStateContext.Provider>
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
