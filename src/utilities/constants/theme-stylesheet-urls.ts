const baseUrl = process.env.REACT_APP_STYLESHEET_CDN_URL;

export const ThemeStylesheetUrls = {
  lightTheme: `${baseUrl}/${process.env.REACT_APP_LIGHT_MODE_STYLESHEE_NAME}`,
  darkTheme: `${baseUrl}/${process.env.REACT_APP_DARK_MODE_STYLESHEET_NAME}`,
};
