import useOsDarkMode from "hooks/utilities/use-os-dark-mode";
import React, { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import { CookieKeys } from "utilities/constants/cookies";
import { DarkModePref } from "utilities/types/enums/dark-mode-pref";

const LightTheme = React.lazy(() => import("./light-theme"));
const DarkTheme = React.lazy(() => import("./dark-theme"));

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = (
  props: PropsWithChildren<{}>
) => {
  const { children } = props;
  const [cookies] = useCookies([CookieKeys.DARK_MODE]);
  const osDarkMode = useOsDarkMode();

  return (
    <React.Fragment>
      <React.Suspense fallback={<React.Fragment />}>
        {shouldUseDarkMode(cookies[CookieKeys.DARK_MODE], osDarkMode) ? (
          <DarkTheme />
        ) : (
          <LightTheme />
        )}
      </React.Suspense>
      {children}
    </React.Fragment>
  );
};

// pure functions

const shouldUseDarkMode = (
  cookie: DarkModePref,
  osDarkMode: boolean
): boolean =>
  cookie === DarkModePref.ON || (cookie === DarkModePref.SYNC && osDarkMode);
