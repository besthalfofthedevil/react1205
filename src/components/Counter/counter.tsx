import type { JSX, MouseEventHandler } from "react";
import styles from "./counter.module.css";

export const Counter = ({
  count,
  add,
  substract,
}: {
  count: number;
  add: () => void;
  substract: () => void;
}): JSX.Element => {
  return (
    <div className={styles.quantityControl}>
      <button
        className={styles.quantityBtn}
        onClick={(e) => {
          e.preventDefault();
          substract();
        }}
      >
        -
      </button>
      <span className={styles.quantityDisplay}>{count}</span>
      <button
        className={styles.quantityBtn}
        onClick={(e) => {
          e.preventDefault();
          add();
        }}
      >
        +
      </button>
    </div>
  );
};
