import type { JSX } from "react";
import { useDishCounter } from "../../hooks/useDishCounter";
import type { RestaurantMenuItem } from "../../mocks/restaurants.mock";
import { Counter } from "../Counter/counter";
import styles from "./menu-list-item.module.css";
import { useUserContext } from "../../hooks/useUserContext";

export const MenuListItem = (
  menuItem: Omit<RestaurantMenuItem, "id">
): JSX.Element => {
  const [dishCount, addDish, removeDish] = useDishCounter(0);
  const [user] = useUserContext();
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
