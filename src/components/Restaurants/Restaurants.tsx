import { useState, type PropsWithChildren } from "react";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Tab } from "../Tab/Tab";

export const Restaurants = ({
  restaurants,
}: PropsWithChildren<{ restaurants: Restaurant[] }>) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0]?.id || null);
  const selectedRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  return (
    <>
      <section className="tabs">
        {restaurants.map(({ name, id }) => {
          const isActive = id === activeRestaurantId;
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
        <RestaurantComponent restaurantItem={selectedRestaurant} />
      ) : (
        <p>Please select a restaurant to view details.</p>
      )}
    </>
  );
};
