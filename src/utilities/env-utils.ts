/**
 * Determine if we are currently operating in the development environment.
 */
const isDevelopment = (): boolean => process.env.NODE_ENV === "development";

/**
 * Execute a callback only if we are in the development environment.
 * @param callback the callback function to execute in the dev environment
 */
const runIfDevelopment = (callback: () => any): void => {
  if (isDevelopment()) {
    callback();
  }
};

/**
 * Log a message only if we are currently in the development environment.
 * @param message the message to log in dev environment
 * @param logLevel the Console method to log with
 */
const logIfDevelopment = (message: string, logLevel: keyof Console = "log") =>
  runIfDevelopment(() => console[logLevel](message));

export const EnvUtils = {
  isDevelopment,
  runIfDevelopment,
  logIfDevelopment,
};
