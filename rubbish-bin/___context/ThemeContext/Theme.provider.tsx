// "use client";

// import { FC, useContext, useEffect, useState } from "react";

// import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./Theme.context";
// import { getThemeFromLocalStorage } from "./utils";

// export type ThemeProviderProps = {
//   children: React.ReactNode;
// };

// const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage);
//   const [mounted, setMounted] = useState(false);

//   const toggleTheme = () => {
//     setTheme((oldTheme) =>
//       oldTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
//     );

//     console.log(`THEME ::: ${theme}`);
//     console.log(`locSt t ::: ${getThemeFromLocalStorage()}`);
//   };

//   useEffect(() => {
//     // useEffect hook to automatically update the local storage whenever the theme state changes
//     localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);

//     console.log(`locSt ::: ${getThemeFromLocalStorage()}`);
//     console.log(`THEME ::: ${theme}`);
//   }, [theme]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {mounted && <div className={theme}>{children}</div>}
//     </ThemeContext.Provider>
//   );
// };

// const useThemeContext = () => {
//   const context = useContext(ThemeContext);

//   if (context === undefined) {
//     throw new Error(
//       "useThemeContext must be used within a ThemeContextProvider"
//     );
//   }

//   return context;
// };

// export { ThemeContextProvider, useThemeContext };
