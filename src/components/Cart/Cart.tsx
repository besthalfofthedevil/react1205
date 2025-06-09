import classNames from "classnames";
import styles from "./Cart.module.css";
import { CartItem } from "../CartItem/CartItem";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../slices/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const isBasketEmpty = !cartItems || cartItems.length === 0;
  return (
    <div className={styles.basket}>
      <h2 className={styles.basketTitle}>Basket</h2>
      {isBasketEmpty ? (
        <>
          <span>Empty</span>
        </>
      ) : (
        <>
          {" "}
          <div className={styles.basketItems}>
            {cartItems.map(({ id }) => {
              return <CartItem key={id} dishId={id} />;
            })}
          </div>
          <div className={styles.basketSummary}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Sub-total</span>
              <span className={styles.summaryValue}>15.00 $</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Delivery costs:</span>
              <span className={styles.summaryValue}>FREE</span>
            </div>

            <div
              className={classNames(styles.summaryRow, styles.summaryRowTotal)}
            >
              <span className={styles.summaryLabel}>Total</span>
              <span className={styles.summaryValue}>15.00 $</span>
            </div>
          </div>
          <button className={styles.checkoutBtn}>CHECKOUT</button>
        </>
      )}
    </div>
  );
};
