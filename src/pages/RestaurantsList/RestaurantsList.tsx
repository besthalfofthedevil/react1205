import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import styles from "./RestaurantsList.module.css";

export const RestaurantsList = (props: { restaurantIds: string[] }) => {

  const { restaurantIds = [] } = props;
  return (
    <div>
      {restaurantIds.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restaurantIds.map((id) => (
          <li key={id} className={styles.card}>
            <RestaurantCardContainer key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
