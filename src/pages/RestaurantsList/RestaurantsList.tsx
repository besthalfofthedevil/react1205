import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import styles from "./RestaurantsList.module.css";

export const RestaurantsList = (props: { restrauntIds: string[] }) => {
  // const restrauntIds = useSelector(selectRestaurantIds);
  const { restrauntIds = [] } = props;
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
