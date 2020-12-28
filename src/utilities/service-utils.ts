import { List } from "immutable";
import { Constructor } from "utilities/types/constructor";
import { ObjectUtils } from "utilities/object-utils";

/**
 * Take an HTTP Response object, check if for status code errors,
 * and if no errors, maps the data using modelConstructor. If status code
 * is not 2xx, the promise is rejected.
 * @param response the HTTP Response object
 * @param modelConstructor the model constructor to map the response data to
 */
async function handleListResponse<TResultModel>(
  response: Response,
  modelConstructor: Constructor<TResultModel>
) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const responseBody = await response.json();
  if (responseBody.response_code !== 0) {
    throw Error(responseBody.response_code);
  }

  if (!Array.isArray(responseBody.results)) {
    throw TypeError(
      `Expecting an array result, received: ${responseBody.results}`
    );
  }

  return bindList(responseBody.results, modelConstructor);
}

function bindList<TResultModel>(
  results: Array<object>,
  modelConstructor: Constructor<TResultModel>
): List<TResultModel> {
  return List(
    results.map(
      (item: object) =>
        new modelConstructor(ObjectUtils.mapObjectKeysToCamelCase(item))
    )
  );
}

export const ServiceUtils = {
  handleListResponse,
  bindList,
};
