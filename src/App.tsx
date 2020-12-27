import { AppRouter } from 'components/routing/app-router';
import useMobileSafariVhShim from 'hooks/utilities/use-mobile-safari-vh-shim';
import React from 'react';
import "./app.scss";

function App() {
  useMobileSafariVhShim();

  return (
    <div className="app-container">
      <div className="app-container__content">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
