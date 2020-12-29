import { useEffect, useState } from "react";

const SETTING_KEY = "(prefers-color-scheme: dark)";

export default function useOsDarkMode() {
  const [osDarkMode, setOsDarkMode] = useState(getOsDarkMode());

  useEffect(() => {
    const handleDarkModeChange = (e: MediaQueryListEvent) =>
      setOsDarkMode(e.matches);
    window
      .matchMedia(SETTING_KEY)
      .addEventListener("change", handleDarkModeChange);
    return () =>
      window
        .matchMedia(SETTING_KEY)
        .removeEventListener("change", handleDarkModeChange);
  }, []);

  return osDarkMode;
}

const getOsDarkMode = () => window.matchMedia(SETTING_KEY).matches;
