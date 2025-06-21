import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import type { Restaurant } from "../../redux/entities/types";
import styles from "./RestaurantsList.module.css";

export const RestaurantsList = (props: { restaurants: Restaurant[] }) => {

  const { restaurants = [] } = props;
  return (
    <div>
      {restaurants.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className={styles.card}>
            <RestaurantCardContainer key={restaurant.id} restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};
