import { EnvUtils } from "utilities/env-utils";
import { StringIndexedObject } from "utilities/types/string-indexed-object";

const _routeParamRegEx = /(:[a-z_-]*)/gi;

/**
 * Takes a route with variables (e.g. /question/:questionNum)
 * and interpolates the variables with values from pathParams
 * @param path the sitemap value for the route
 * @param pathParams the path params to interpolate into the sitemap string, if any
 */
const getUrl = <TPathParams>(
  path: string,
  pathParams?: TPathParams
): string => {
  if (pathParams == null) {
    return path;
  }

  return path.replace(_routeParamRegEx, (a, b) => {
    const value = (pathParams as StringIndexedObject)[b.substring(1)];

    if (value != null) {
      return value;
    }

    EnvUtils.logIfDevelopment(
      `routeUtils::getUrl cannot find value for path parameter ${a}`,
      "warn"
    );

    return a;
  });
};

export const RouteUtils = {
  getUrl,
};
