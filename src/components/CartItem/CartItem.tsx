import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../Counter/counter";
import styles from "./CartItem.module.css";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../slices/cartSlice";
import type { RootState } from "../../store";
import { selectDishById } from "../../slices/dishesSlice";
export const CartItem = (props: { dishId: string }) => {
  const dishCount =
    useSelector((state: RootState) =>
      selectItemAmountById(state, props?.dishId)
    ) || 0;
  const dispatch = useDispatch();

  const { name } =
    useSelector((state: RootState) => selectDishById(state, props?.dishId)) ||
    {};
  return (
    <div className={styles.basketItem}>
      <span className={styles.basketItemName}>{name}</span>
      <Counter
        count={dishCount}
        add={() => dispatch(addToCart(props.dishId))}
        substract={() => dispatch(removeFromCart(props.dishId))}
      />
      <span className={styles.basketItemPrice}>12.00 $</span>
    </div>
  );
};
