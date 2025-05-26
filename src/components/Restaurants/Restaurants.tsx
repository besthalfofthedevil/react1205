import { useState, type PropsWithChildren } from "react";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Tab } from "../Tab/Tab";

export const Restaurants = ({
  restaurants,
}: PropsWithChildren<{ restaurants: Restaurant[] }>) => {
  const [activeId, setActiveId] = useState(restaurants[0]?.id || null);
  const selectedRestauran = restaurants.find(({ id }) => id === activeId);

  return (
    <>
      <section className="tabs">
        {restaurants.map(({ name, id }) => {
          const isActive = id === activeId;
          return (
            <Tab
              key={id}
              label={name}
              isActive={isActive}
              setActive={() => !isActive && setActiveId(id)}
            />
          );
        })}
      </section>
      {selectedRestauran ? (
        <RestaurantComponent restaurantItem={selectedRestauran} />
      ) : (
        <p>Please select a restaurant to view details.</p>
      )}
    </>
  );
};
