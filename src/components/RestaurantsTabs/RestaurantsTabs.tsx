import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../slices/restaurantsSlice";
import styles from "./RestaurantsTabs.module.css";
import { TabRestaurantContainer } from "../TabRestaurantContainer/TabRestaurantContainer";

export const RestaurantsTabs = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <>
      <section className={styles.tabs}>
        {restaurantIds.map((id) => {
          return <TabRestaurantContainer key={id} id={id} />;
        })}
      </section>
    </>
  );
};
