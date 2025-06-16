import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../slices/restaurantsSlice";
import type { RootState } from "../../redux/store";
import { NavLink } from "react-router";
import styles from "./TabRestaurantContainer.module.css";
import classNames from "classnames";

export const TabRestaurantContainer = ({ id }: { id: string }) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  if (!restaurant) {
    return null; // Skip rendering if name is not provided
  }

  return (
    <NavLink
      to={id}
      key={id}
      className={({ isActive }) =>
        classNames(styles.tab, { [styles.active]: isActive })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
