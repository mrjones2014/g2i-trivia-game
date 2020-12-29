import useOsDarkMode from "hooks/utilities/use-os-dark-mode";
import React from "react";
import { useCookies } from "react-cookie";
import { Helmet } from "react-helmet";
import { CookieKeys } from "utilities/constants/cookies";
import { ThemeStylesheetUrls } from "utilities/constants/theme-stylesheet-urls";
import { DarkModePref } from "utilities/types/enums/dark-mode-pref";

export const ThemeProvider: React.FC = () => {
  const [cookies] = useCookies([CookieKeys.DARK_MODE]);
  const osDarkMode = useOsDarkMode();

  const styleSheetPath = shouldUseDarkMode(
    cookies[CookieKeys.DARK_MODE],
    osDarkMode
  )
    ? ThemeStylesheetUrls.darkTheme
    : ThemeStylesheetUrls.lightTheme;

  return (
    <Helmet>
      <link rel="stylesheet" href={styleSheetPath} />
    </Helmet>
  );
};

// pure functions

const shouldUseDarkMode = (
  cookie: DarkModePref,
  osDarkMode: boolean
): boolean =>
  cookie === DarkModePref.ON || (cookie === DarkModePref.SYNC && osDarkMode);
