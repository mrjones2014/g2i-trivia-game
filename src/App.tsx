import { ThemeProvider } from "components/03-molecules/themes/theme-provider";
import { AppRouter } from "components/03-molecules/router/app-router";
import { GameStateContext } from "hooks/context/use-game-state-context";
import useMobileSafariVhShim from "hooks/utilities/use-mobile-safari-vh-shim";
import GameStateRecord from "models/game-state";
import React, { useState } from "react";
import "./app.scss";
import { CookiesProvider } from "react-cookie";
import { DarkModePreferencesButton } from "components/03-molecules/preferences/dark-mode-preferences-button";

const baseClassName = "app-container";

function App() {
  useMobileSafariVhShim();

  const [gameState, setGameState] = useState(new GameStateRecord());

  return (
    <CookiesProvider>
      <ThemeProvider />
      <div className={baseClassName}>
        <div className={`${baseClassName}__content`}>
          <GameStateContext.Provider value={[gameState, setGameState]}>
            <AppRouter />
          </GameStateContext.Provider>
          <DarkModePreferencesButton
            className={`${baseClassName}__content__prefs-button`}
          />
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
