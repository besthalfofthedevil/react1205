import { ProgressBar } from "../ProgressBar/progress-bar";
import styles from "./header.module.css";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Auth } from "../Auth/Auth";
export const Header = () => {
  return (
    <header className={styles.header}>
      <ProgressBar />
      <div className={styles.headerLeft}>
        <Auth />
      </div>
      <div className={styles.logo}>
        ANY<span>FOOD</span>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.currencySelector}>
          <span>USD</span> | <span>EUR</span> | <span>RUB</span> |{" "}
          <span>UAH</span>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};
