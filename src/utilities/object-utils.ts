import { StringIndexedObject } from "utilities/string-indexed-object";
import { StringUtils } from "utilities/string-utils";

/**
 * Check if a subject of unknown type is an object.
 * @param subject the subject to test
 */
const isObject = (subject: any): subject is object => {
  return (
    subject === Object(subject) &&
    !Array.isArray(subject) &&
    typeof subject !== "function"
  );
};

/**
 * Take an object and convert its property keys
 * to camelCase. Operates recursively on nested keys.
 * @param subject the subject to convert keys to camelCase
 */
const mapObjectKeysToCamelCase = (subject: object): object => {
  if (subject == null) {
    return subject;
  }

  if (!isObject(subject)) {
    return subject;
  }

  const indexableSubject = subject as StringIndexedObject;
  const result: StringIndexedObject = {};
  Object.keys(subject).forEach(
    (key: string) =>
      (result[StringUtils.snakeToCamelCase(key)] = mapObjectKeysToCamelCase(
        indexableSubject[key]
      ))
  );

  return result;
};

export const ObjectUtils = {
  isObject,
  mapObjectKeysToCamelCase,
};
