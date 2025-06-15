import type { JSX } from "react";
import { Counter } from "../Counter/counter";
import styles from "./MenuItem.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { useSelector, useDispatch } from "react-redux";
import { selectDishById } from "../../slices/dishesSlice";
import type { RootState } from "../../store";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../slices/cartSlice";

export const MenuItem = (props: { dishId: string }): JSX.Element => {
  const dishCount =
    useSelector((state: RootState) =>
      selectItemAmountById(state, props?.dishId)
    ) || 0;
  const dispatch = useDispatch();
  const [user] = useUserContext();

  const menuItem =
    useSelector((state: RootState) => selectDishById(state, props?.dishId)) ||
    {};

  if (!menuItem) {
    return <p>No menu item provided</p>;
  }
  const { name, price, ingredients } = menuItem;
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
          add={() => dispatch(addToCart(props.dishId))}
          substract={() => dispatch(removeFromCart(props.dishId))}
        />
      )}
    </div>
  );
};
