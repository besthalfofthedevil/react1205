import { useState } from "react";
import { Tab } from "../Tab/Tab";
import styles from "./restaurants.module.css";
import { selectRestaurantById, selectRestaurantIds } from "../../slices/restaurantsSlice";
import { useSelector } from "react-redux";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import { TabContainer } from "../Tab/TabContainer";

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
            <TabContainer
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
