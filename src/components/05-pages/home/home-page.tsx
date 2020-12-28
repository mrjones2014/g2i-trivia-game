import { Typography, Button } from "antd";
import React from "react";
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
      <Button type="primary" size="large" href={sitemap.game.start}>
        Begin
      </Button>
    </div>
  );
};
