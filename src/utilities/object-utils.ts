import { StringIndexedObject } from "utilities/string-indexed-object";

function toCamelCase(subject: string): string {
    return subject.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
          .replace('-', '')
          .replace('_', '');
      });
}

function isObject(subject: any): boolean {
    return subject === Object(subject) &&
            !Array.isArray(subject) &&
            typeof subject !== 'function';
}

function mapObjectKeysToCamelCase(subject: object): object {
    if (subject == null) {
        return subject;
    }

    if (!isObject(subject)) {
        return subject;
    }

    const indexableSubject = subject as StringIndexedObject;
    const result: StringIndexedObject = {};
    Object.keys(subject).forEach(
        (key: string) => result[toCamelCase(key)] = mapObjectKeysToCamelCase(indexableSubject[key])
    );

    return result;
}

export const ObjectUtils = {
    isObject,
    mapObjectKeysToCamelCase,
};
