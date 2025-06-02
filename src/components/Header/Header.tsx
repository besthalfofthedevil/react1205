import { ProgressBar } from "../ProgressBar/progress-bar";
import styles from "./header.module.css";
import { useThemeContext } from "../../hooks/useThemeContext";
export const Header = () => {
  const [theme, toggleTheme] = useThemeContext();
  return (
    <header className={styles.header}>
      <ProgressBar />
      <div className={styles.headerLeft}>Restraunts</div>
      <div className={styles.logo}>
        ANY<span>FOOD</span>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.currencySelector}>
          <span>USD</span> | <span>EUR</span> | <span>RUB</span> |{" "}
          <span>UAH</span>
        </div>
        <span>Theme: <button onClick={toggleTheme}>{theme}</button></span>
      </div>
    </header>
  );
};
