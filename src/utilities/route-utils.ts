const _routeParamRegEx = /(:[a-z_-]*)/gi;

/**
 * Takes a route with variables (e.g. /question/:questionNum)
 * and interpolates the variables with values from pathParams
 * @param path the sitemap value for the route
 * @param pathParams the path params to interpolate into the sitemap string, if any
 */
const getUrl = <TPathParams>(path: string, pathParams?: TPathParams) => {
  if (path == null) {
    return "#";
  }

  if (pathParams != null) {
    path = replacePathParams(path, pathParams);
  }

  return path;
};

/**
 * Takes a path and interpolates variables, where applicable.
 * @param path the sitemap route with variables
 * @param pathParams the parameters to interpolate into the route
 */
const replacePathParams = (path: string, pathParams: any) => {
  if (pathParams == null || path == null) {
    return path;
  }

  return path.replace(_routeParamRegEx, (a, b) => {
    const value = pathParams[b.substring(1)];

    if (value != null) {
      return value;
    }

    console.error(
      `routeUtils::getUrl cannot find value for path parameter ${a}`
    );

    return a;
  });
};

export const RouteUtils = {
  getUrl,
  replacePathParams,
};
