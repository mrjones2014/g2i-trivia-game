/**
 * Represents a generic constructor function.
 */
export type Constructor<T> = new (...rest: Array<any>) => T;
