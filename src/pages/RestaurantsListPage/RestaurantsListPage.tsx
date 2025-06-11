import { useSelector } from "react-redux";
import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import { selectRestaurantIds } from "../../slices/restaurantsSlice";
import styles from "./RestaurantsListPage.module.css";

export const RestaurantsListPage = () => {
  const restrauntIds = useSelector(selectRestaurantIds);

  return (
    <div>
      {restrauntIds.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restrauntIds.map((id) => (
          <li key={id} className={styles.card}>
            <RestaurantCardContainer key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
