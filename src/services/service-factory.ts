import { List } from "immutable";
import qs from "qs";
import { handleResponse } from "services/service-utils";
import { Constructor } from "utilities/constructor";

export type ListService<TResultModel, TQueryParams> = (queryParams?: TQueryParams) => Promise<List<TResultModel>>;


export default class ServiceFactory {
    /**
     * Generically create a service to HTTP GET the API endpoint at
     * specified URL, optionally adding query parameters.
     * @param resultModelConstructor a constructor for a record model that the results will be mapped to
     * @param url the API endpoint baseURL
     * @param defaultQueryParams query params are merged with these defaults, if preset
     */
    public static list<TResultModel, TQueryParams>(
        resultModelConstructor: Constructor<TResultModel>,
        url: string,
        defaultQueryParams?: TQueryParams,
    ): ListService<TResultModel, TQueryParams> {
        return async (queryParams?: TQueryParams) => {
            if (defaultQueryParams != null) {
                queryParams = Object.assign({}, defaultQueryParams, queryParams ?? {});
            }

            if (queryParams != null) {
                url = `${url}?${qs.stringify(queryParams)}`;
            }

            const response = await fetch(url);
            return handleResponse(response, resultModelConstructor);
        }
    }
}
