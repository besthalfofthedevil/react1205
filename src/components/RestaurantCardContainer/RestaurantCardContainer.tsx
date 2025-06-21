import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { NavLink } from "react-router";
import styles from "./RestaurantCardContainer.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { getRestaurant } from "../../redux/entities/restaurants/getRestaurant";
import { useRequest } from "../../redux/hooks/useRequest";

export const RestaurantCardContainer = ({ id }: { id: string }) => {
  const requestStatus = useRequest(getRestaurant, id);
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  if (!restaurant) {
    return null; // Skip rendering if name is not provided
  }

  return (
    <NavLink to={"/restaurants/" + id} key={id}>
      <div className={styles.restaurantCard}>
        <img
          src="https://dummyimage.com//120x120/8B4513/FFFFFF?text=Steak"
          alt={`${restaurant.name} restaurant food`}
          className={styles.restaurantCardImage}
        />
        <div className={styles.restaurantCardImage}>
          <h3 className={styles.restaurantName}>{restaurant.name}</h3>
          <p className={styles.cuisineTypes}>steak</p>
          <StarsBar rating={4.5} totalStars={5} />
        </div>
      </div>
    </NavLink>
  );
};
