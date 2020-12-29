import { Typography } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { sitemap } from "sitemap";
import { BasePageTitle } from "utilities/constants/base-page-title";
import "./home-page.scss";

const { Title } = Typography;

const baseClassName = "home-page";

/**
 * The main landing page for the application.
 */
export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{BasePageTitle}</title>
      </Helmet>
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
      </div>
    </React.Fragment>
  );
};
