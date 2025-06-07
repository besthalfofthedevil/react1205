import { useState, type PropsWithChildren } from "react";
import { RestaurantComponent } from "../Restaurant/restaurant";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Tab } from "../Tab/Tab";
import styles from "./restaurants.module.css";

export const Restaurants = ({
  restaurants,
}: PropsWithChildren<{ restaurants: Restaurant[] }>) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0]?.id || null
  );
  const selectedRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <>
      <section className={styles.tabs}>
        {restaurants.map(({ name, id }) => {
          const isActive = id === activeRestaurantId;
          if (!name) {
            return null; // Skip rendering if name is not provided
          }
          return (
            <Tab
              key={id}
              label={name}
              isActive={isActive}
              setActive={() => !isActive && setActiveRestaurantId(id)}
            />
          );
        })}
      </section>
      {selectedRestaurant ? (
        <RestaurantComponent
          key={selectedRestaurant.id}
          restaurantId={selectedRestaurant.id}
        />
      ) : (
        <p>Please select a restaurant to view details.</p>
      )}
    </>
  );
};
