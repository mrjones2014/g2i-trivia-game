import { useEffect, useRef } from "react";
import { CancellablePromise, PromiseUtils } from "utilities/promise-utils";

/**
 * Returns a function to wrap promises using useEffect
 * such that promises are automatically cancelled
 * when the requesting component is unmounted.
 */
export default function useCancellablePromise<T>() {
  const promises = useRef<Array<CancellablePromise<T>>>([]);

  // cancel all promises on unmount
  useEffect(
    () => promises.current.forEach((p: CancellablePromise<T>) => p.cancel()),
    []
  );

  function cancellablePromise(p: Promise<T>): Promise<T> {
    const cancellable = PromiseUtils.makeCancellable(p);
    promises.current.push(cancellable);
    return cancellable.promise;
  }

  return { cancellablePromise };
}
