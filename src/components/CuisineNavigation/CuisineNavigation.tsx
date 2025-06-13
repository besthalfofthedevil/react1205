import classNames from "classnames";
import styles from "./CuisineNavigation.module.css";
import { useState } from "react";

export const CuisineNavigation = () => {
  const cuisines = [
    "pizza",
    "sushi",
    "vegan",
    "steak",
    "asian",
    "seafood",
    "pasta",
  ];

  const [selectedCuisines, setCursine] = useState<string[]>([]);
  const handleAllCuisinesChange = () => {
    setCursine((prevCuisines) =>
      prevCuisines.length === cuisines.length ? [] : [...cuisines]
    );
  };

  const isAllSelected = (selected: string[]) =>
    selected.length === cuisines.length;

  const handleCuisineChange = (cuisine: string) => {
    setCursine((prevCuisines) =>
      prevCuisines.includes(cuisine)
        ? prevCuisines.filter((c) => c !== cuisine)
        : [...prevCuisines, cuisine]
    );
  };

  const isCuisineSelected = (cuisine: string) => {
    return selectedCuisines.includes(cuisine);
  };

  return (
    <nav className={styles.cuisineNav}>
      <span className={styles.cuisineLabel}>Cuisines:</span>
      <ul className={styles.cuisineList}>
        <li
          className={classNames(styles.cuisineItem, {
            [styles.active]: isAllSelected(selectedCuisines),
          })}
          onClick={handleAllCuisinesChange}
        >
          all
        </li>
        {cuisines.map((cuisine) => (
          <li
            key={cuisine}
            className={classNames(styles.cuisineItem, {
              [styles.active]: isCuisineSelected(cuisine),
            })}
            onClick={() => handleCuisineChange(cuisine)}
          >
            {cuisine}
          </li>
        ))}
      </ul>
    </nav>
  );
};
