import { List } from "immutable";
import { Constructor } from "utilities/constructor";
import { ObjectUtils } from "utilities/object-utils";

async function handleResponse<TResultModel>(
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

export { handleResponse, bindList };
