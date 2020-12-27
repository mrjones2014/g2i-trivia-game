import { HomePage } from "components/pages/home-page";
import { sitemap } from "sitemap";

export interface RouteDefinition {
    path: string;
    component: React.ComponentType;
}

export const routes: Array<RouteDefinition> = [
    {
        path: sitemap.home,
        component: HomePage,
    }
];
