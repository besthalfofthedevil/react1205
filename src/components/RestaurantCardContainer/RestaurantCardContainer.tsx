import { NavLink } from "react-router";
import styles from "./RestaurantCardContainer.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import type { Restaurant } from "../../redux/entities/types";

export const RestaurantCardContainer = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  if (!restaurant) {
    return null; // Skip rendering if name is not provided
  }

  return (
    <NavLink to={"/restaurants/" + restaurant.id} key={restaurant.id}>
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
