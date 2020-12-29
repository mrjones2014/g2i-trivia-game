import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import React from "react";
import { useCookies } from "react-cookie";
import { CookieKeys } from "utilities/constants/cookies";
import { DarkModePref } from "utilities/types/enums/dark-mode-pref";
import "./dark-mode-preference-toggle.scss";

const baseClassName = "dark-mode-preference-toggle";

export const DarkModePreferenceToggle: React.FC = () => {
  const [cookies, setCookie] = useCookies([CookieKeys.DARK_MODE]);

  const handleThemeChange = (e: RadioChangeEvent) =>
    setCookie(CookieKeys.DARK_MODE, e.target.value ?? DarkModePref.OFF, {
      sameSite: "strict",
    });

  const darkMode = cookies[CookieKeys.DARK_MODE] ?? DarkModePref.OFF;

  return (
    <div className={baseClassName}>
      <label className={`${baseClassName}__label`}>Theme</label>
      <Radio.Group value={darkMode} onChange={handleThemeChange}>
        <Radio.Button value={DarkModePref.OFF}>Light</Radio.Button>
        <Radio.Button value={DarkModePref.ON}>Dark</Radio.Button>
        <Radio.Button value={DarkModePref.SYNC}>Sync with System</Radio.Button>
      </Radio.Group>
    </div>
  );
};
