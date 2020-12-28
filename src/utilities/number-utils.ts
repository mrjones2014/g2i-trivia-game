import { EnvUtils } from "utilities/env-utils";

/**
 * Take a value with an unknown type and convert it to a number,
 * if possible. Returns undefined instead of throwing an error on failure.
 * @param subject the value to convert to a number
 */
const parseInt = (subject?: string | number | Number): number | undefined => {
  if (subject == null) {
    return undefined;
  }

  // Number.isFinite() returns true only for values that are number
  // types and are not Infinity or -Infinity
  if (Number.isFinite(subject)) {
    return subject as number;
  }

  try {
    const converted = +subject;

    if (Number.isNaN(converted)) {
      return undefined;
    }

    return converted;
  } catch (e) {
    EnvUtils.logIfDevelopment(e, "error");
    return undefined;
  }
};

export const NumberUtils = {
  parseInt,
};
