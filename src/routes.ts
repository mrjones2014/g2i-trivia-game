import { HomePage } from "components/05-pages/home/home-page";
import { QuestionPage } from "components/05-pages/question/question-page";
import { StartPage } from "components/05-pages/start/start-page";
import { sitemap } from "sitemap";

export interface RouteDefinition {
    path: string;
    component: React.ComponentType;
}

export const routes: Array<RouteDefinition> = [
    {
        path: sitemap.game.start,
        component: StartPage,
    },
    {
        path: sitemap.game.question,
        component: QuestionPage,
    },
    {
        // home comes last, otherwise everything will match the base "/" route
        path: sitemap.home,
        component: HomePage,
    },
];
