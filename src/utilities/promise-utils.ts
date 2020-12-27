export type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export type PromiseReject = (reason?: any) => void;
export interface CancellablePromise<T> {
  promise: Promise<T>;
  cancel(): void;
}

function makeCancellable<T>(promise: Promise<T>): CancellablePromise<T> {
  let isCancelled = false;
  const wrappedPromise = new Promise(
    (resolve: PromiseResolve<T>, reject: PromiseReject) => {
      promise
        .then((value: T) => {
          if (isCancelled) {
            reject({ isCancelled });
            return;
          }

          resolve(value);
        })
        .catch((reason: any) => {
          if (isCancelled) {
            reject({ isCancelled });
            return;
          }

          reject(reason);
        });
    }
  );

  return {
    promise: wrappedPromise,
    cancel: () => (isCancelled = true),
  };
}

export const PromiseUtils = {
  makeCancellable,
};
