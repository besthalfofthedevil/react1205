import styles from "./CuisineNavigation.module.css";

export const CuisineNavigation = () => {
  return (
    <nav className={styles.cuisineNav}>
        <span className={styles.cuisineLabel}>Cuisines:</span>
        <ul className={styles.cuisineList}>
            <li className={styles.cuisineItem}>all</li>
            <li className={styles.cuisineItem}>pizza</li>
            <li className={styles.cuisineItem}>sushi</li>
            <li className={styles.cuisineItem}>vegan</li>
            <li className={styles.cuisineItem}>steak</li>
            <li className={styles.cuisineItem}>asian</li>
            <li className={styles.cuisineItem}>seafood</li>
            <li className={styles.cuisineItem}>pasta</li>
        </ul>
    </nav>
  );
}