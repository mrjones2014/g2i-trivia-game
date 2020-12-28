/**
 * Capitalize only the first letter of a string.
 * @param subject the string to capitalize
 */
const capitalize = (subject?: string): string => {
  if (subject == null) {
    return "";
  }

  if (subject.length === 1) {
    return subject.toUpperCase();
  }

  return `${subject.charAt(0).toUpperCase()}${subject.slice(1).toLowerCase()}`;
};

/**
 * Takes a string in snake_case and converts it to camelCase.
 * @param subject the string to convert to camelCase
 */
const snakeToCamelCase = (subject: string): string =>
  subject.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );

export const StringUtils = {
  capitalize,
  snakeToCamelCase,
};
