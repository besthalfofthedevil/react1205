import type { JSX } from "react";
import { useDishCounter } from "../../hooks/useDishCounter";
import { Counter } from "../Counter/counter";
import styles from "./menu-list-item.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../slices/dishesSlice";
import type { RootState } from "../../store";

export const MenuListItem = (props: { dishId: string }): JSX.Element => {
  const [dishCount, addDish, removeDish] = useDishCounter(0);
  const [user] = useUserContext();

  const menuItem =
    useSelector((state: RootState) => selectDishById(state, props?.dishId)) ||
    {};
    
  if (!menuItem) {
    return <p>No menu item provided</p>;
  }
  const { name, price, ingredients } = menuItem;
  return (
    <li>
      <div className={styles.menuItem}>
        <div className={styles.itemDetails}>
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.itemDescription}>{`${ingredients.join(
            ", "
          )}`}</p>
          <p className={styles.itemPrice}>{`$${price}`} </p>
        </div>
        {user.isAutenticated && (
          <Counter count={dishCount} add={addDish} substract={removeDish} />
        )}
      </div>
    </li>
  );
};
