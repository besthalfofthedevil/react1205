import { useThemeContext } from "../../hooks/useThemeContext";
export const ThemeSwitch = () => {
  const [theme, toggleTheme] = useThemeContext();

  return (
    <span>
      Theme: <button onClick={toggleTheme}>{theme}</button>
    </span>
  );
};
