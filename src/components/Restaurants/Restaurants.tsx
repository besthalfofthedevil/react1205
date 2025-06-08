import { useState } from "react";
import styles from "./restaurants.module.css";
import { selectRestaurantIds } from "../../slices/restaurantsSlice";
import { useSelector } from "react-redux";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import { TabRestaurantContainer } from "../TabRestaurantContainer/TabRestaurantContainer";

export const Restaurants = () => {
  const restrauntIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restrauntIds[0] || null
  );

  return (
    <>
      <section className={styles.tabs}>
        {restrauntIds.map((id) => {
          const isActive = id === activeRestaurantId;

          return (
            <TabRestaurantContainer
              key={id}
              id={id}
              isActive={isActive}
              setActive={() => !isActive && setActiveRestaurantId(id)}
            />
          );
        })}
      </section>
      {activeRestaurantId ? (
        <RestaurantComponent key={activeRestaurantId} id={activeRestaurantId} />
      ) : (
        <p>Please select a restaurant to view details.</p>
      )}
    </>
  );
};
