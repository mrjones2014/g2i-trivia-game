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
 * Takes a string and converts it to camelCase.
 * @param subject the string to convert to camelCase
 */
const toCamelCase = (subject: string): string =>
  subject.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );

export const StringUtils = {
  capitalize,
  toCamelCase,
};
