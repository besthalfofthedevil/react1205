import classNames from "classnames";
import styles from "./CuisineNavigation.module.css";
import { useState } from "react";

const CUISINES_LIST = [
  "pizza",
  "sushi",
  "vegan",
  "steak",
  "asian",
  "seafood",
  "pasta",
];

export const CuisineNavigation = () => {
  const [selectedCuisines, setCursine] = useState<string[]>([]);
  const handleAllCuisinesChange = () => {
    setCursine((prevCuisines) =>
      prevCuisines.length === CUISINES_LIST.length ? [] : [...CUISINES_LIST]
    );
  };

  const isAllSelected = (selected: string[]) =>
    selected.length === CUISINES_LIST.length;

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
        {CUISINES_LIST.map((cuisine) => (
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
