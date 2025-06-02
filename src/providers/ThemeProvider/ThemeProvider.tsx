import type React from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext value={[theme, toggleTheme]}>{children}</ThemeContext>;
};
