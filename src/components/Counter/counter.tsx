import type { JSX } from "react";
import styles from "./counter.module.css";

export const Counter = ({
  count,
  add,
  substract,
}: {
  count: number;
  add: (e: any) => void;
  substract: (e: any) => void;
}): JSX.Element => {
  return (
    <div className={styles.quantityControl}>
      <button className={styles.quantityBtn} onClick={substract}>
        -
      </button>
      <span className={styles.quantityDisplay}>{count}</span>
      <button className={styles.quantityBtn} onClick={add}>
        +
      </button>
    </div>
  );
};
