import { ProgressBar } from "../ProgressBar/progress-bar";
import styles from "./header.module.css";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useUserContext } from "../../hooks/useUserContext";
export const Header = () => {
  const [theme, toggleTheme] = useThemeContext();
  const [user, toggleAuth] = useUserContext();
  return (
    <header className={styles.header}>
      <ProgressBar />
      <div className={styles.headerLeft}>
        <span>
          {user.name}
          <button onClick={toggleAuth}>
            {user.isAutenticated ? "Logout" : "Login"}
          </button>
        </span>
      </div>
      <div className={styles.logo}>
        ANY<span>FOOD</span>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.currencySelector}>
          <span>USD</span> | <span>EUR</span> | <span>RUB</span> |{" "}
          <span>UAH</span>
        </div>
        <span>
          Theme: <button onClick={toggleTheme}>{theme}</button>
        </span>
      </div>
    </header>
  );
};
