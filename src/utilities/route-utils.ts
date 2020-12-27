const _routeParamRegEx = /(:[a-z_-]*)/gi;

const getUrl = <TPathParams>(path: string, pathParams?: TPathParams) => {
  if (path == null) {
    return "#";
  }

  if (pathParams != null) {
    path = replacePathParams(path, pathParams);
  }

  return path;
};

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
