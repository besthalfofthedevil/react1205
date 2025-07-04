import { useSelector } from "react-redux";
import { Counter } from "../Counter/counter";
import styles from "./CartItem.module.css";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/cartSlice";
import { useAppDispatch, type RootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";
export const CartItem = (props: { dishId: string }) => {
  const dishCount =
    useSelector((state: RootState) =>
      selectItemAmountById(state, props?.dishId)
    ) || 0;
  const dispatch = useAppDispatch();

  const { name, price } =
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
      <span className={styles.basketItemPrice}>${dishCount * price}</span>
    </div>
  );
};
