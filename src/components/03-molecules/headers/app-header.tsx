import { PageHeader } from "antd";
import { DarkModePreferenceToggle } from "components/03-molecules/preferences/dark-mode-preference-toggle";
import React from "react";
import "./app-header.scss";

const baseClassName = "app-header";

export const AppHeader: React.FC = () => {
  return (
    <PageHeader
      className={baseClassName}
      ghost={false}
      title="Trivia Challenge"
      extra={[<DarkModePreferenceToggle />]}
    />
  );
};
