import type { JSX } from "react";
import { Counter } from "../Counter/counter";
import styles from "./MenuItem.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../../redux/store";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/cartSlice";
import type { Dish } from "../../redux/entities/types";

export const MenuItem = (props: { dish: Dish }): JSX.Element => {
  const { dish } = props;
  const dishCount =
    useSelector((state: RootState) => selectItemAmountById(state, dish?.id)) ||
    0;
  const dispatch = useAppDispatch();
  const [user] = useUserContext();

  if (!dish) {
    return <p>No menu item provided</p>;
  }
  const { name, price, ingredients, id } = dish;
  return (
    <div className={styles.menuItem}>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{name}</h3>
        <p className={styles.itemDescription}>{`${ingredients.join(", ")}`}</p>
        <p className={styles.itemPrice}>{`$${price}`} </p>
      </div>
      {user.isAutenticated && (
        <Counter
          count={dishCount}
          add={() => dispatch(addToCart(id))}
          substract={() => dispatch(removeFromCart(id))}
        />
      )}
    </div>
  );
};
