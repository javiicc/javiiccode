// import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const THEME_LOCAL_STORAGE_KEY = "theme";
export const DEFAULT_THEME = Theme.LIGHT;
export const THEME_VALUES: string[] = Object.values(Theme);

// const DEFAULT_VALUE: ThemeContextData = {
//   theme: DEFAULT_THEME,
//   toggleTheme: () => {},
// };

// export type ThemeContextData = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

const isValidTheme = (value: string): value is Theme =>
  THEME_VALUES.includes(value);

const getThemeFromLocalStorage = (): Theme => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (themeValue && isValidTheme(themeValue)) return themeValue;

  return DEFAULT_THEME;
};

export { getThemeFromLocalStorage };
