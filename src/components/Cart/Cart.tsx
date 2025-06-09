import classNames from "classnames";
import styles from "./Cart.module.css";
import { CartItem } from "../CartItem/CartItem";
export const Cart = () => {
  return (
    <div className={styles.basket}>
      <h2 className={styles.basketTitle}>Basket</h2>
      <div className={styles.basketItems}>
        <CartItem />
      </div>

      <div className={styles.basketSummary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Sub-total</span>
          <span className={styles.summaryValue}>15.00 $</span>
        </div>

        <div className={classNames(styles.summaryRow, styles.summaryRowTotal)}>
          <span className={styles.summaryLabel}>Total</span>
          <span className={styles.summaryValue}>15.00 $</span>
        </div>
      </div>

      <button className={styles.checkoutBtn}>CHECKOUT</button>
    </div>
  );
};
