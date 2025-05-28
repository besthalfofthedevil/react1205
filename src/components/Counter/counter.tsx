import type { JSX } from "react";
import styles from "./counter.module.css";
import classNames from "classnames";

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
    <div className={classNames({[styles.quantityControl]: true})}>
      <button className={styles.quantityBtn} onClick={substract}>
        -
      </button>
      <span className={styles.quantityDisplay}>{count}</span>
      <button className={styles.quantityBtn} onClick={add}>+</button>
    </div>
  );
};

// <div className="quantity-control">
//   <button className="quantity-btn minus active">-</button>
//   <span className="quantity-display">1</span>
//   <button className="quantity-btn plus">+</button>
// </div>
