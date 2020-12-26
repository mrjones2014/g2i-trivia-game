import useCancellablePromise from "hooks/utilities/use-cancellable-promise";
import { List } from "immutable";
import { useCallback } from "react";
import { ListService } from "services/service-factory";

export default function useCancellableListService<TModel, TQueryParams>(listService: ListService<TModel, TQueryParams>): ListService<TModel, TQueryParams> {
    const { cancellablePromise } = useCancellablePromise<List<TModel>>();
    return useCallback(
        (queryParams?: TQueryParams) => cancellablePromise(listService(queryParams)),
        [cancellablePromise, listService]
    );
}