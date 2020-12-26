import { useEffect, useRef } from "react";
import { CancellablePromise, makeCancellable } from "utilities/promise-utils";

/**
 * React hook to convert a promise to a cancellable promise
 * which is automatically cancelled when the component is unmounted.
 */
export default function useCancellablePromise<T>() {
    const promises = useRef<Array<CancellablePromise<T>>>([]);

    // cancel all promises on unmount
    useEffect(
        () => promises.current.forEach((p: CancellablePromise<T>) => p.cancel()),
        []
    );

    function cancellablePromise(p: Promise<T>): Promise<T> {
        const cancellable = makeCancellable(p);
        promises.current.push(cancellable);
        return cancellable.promise;
    }

    return { cancellablePromise };
}