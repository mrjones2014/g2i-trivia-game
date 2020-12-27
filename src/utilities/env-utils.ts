const isDevelopment = (): boolean => process.env.NODE_ENV === "development";
const runIfDevelopment = (callback: () => any): void => {
  if (isDevelopment()) {
    callback();
  }
};
const logIfDevelopment = (message: string, logLevel: keyof Console = "log") =>
  runIfDevelopment(() => console[logLevel](message));

export const EnvUtils = {
  isDevelopment,
  runIfDevelopment,
  logIfDevelopment,
};
