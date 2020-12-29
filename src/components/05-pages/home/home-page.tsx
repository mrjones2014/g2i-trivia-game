import { Typography } from "antd";
import { DarkModePreferencesButton } from "components/03-molecules/preferences/dark-mode-preferences-button";
import React from "react";
import { Link } from "react-router-dom";
import { sitemap } from "sitemap";
import "./home-page.scss";

const { Title } = Typography;

const baseClassName = "home-page";

/**
 * The main landing page for the application.
 */
export const HomePage: React.FC = () => {
  return (
    <div className={baseClassName}>
      <Title>Welcome to the Trivia Challenege</Title>
      <Title level={2}>
        You will be presented with 10 True or False questions.
      </Title>
      <Title level={2}>Can you score 100%?</Title>
      <Link
        className="ant-btn ant-btn-lg ant-btn-primary"
        to={sitemap.game.start}
      >
        Begin
      </Link>
      <DarkModePreferencesButton />
    </div>
  );
};
