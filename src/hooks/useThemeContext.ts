import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider/ThemeContext";

export type ThemeContextType = [string, () => void];
export const useThemeContext = (): ThemeContextType => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return [theme, toggleTheme];
};
