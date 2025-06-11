import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Order Food</h1>
      <p className={styles.subtitle}>From 175 Restaurants</p>
    </div>
  );
};
