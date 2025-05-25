import { useState, type PropsWithChildren } from "react";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Tab } from "../Tab/Tab";

export const Restaurants = ({
  restaurants,
}: PropsWithChildren<{ restaurants: Restaurant[] }>) => {
  const [activeId, setActiveId] = useState(0);
  return (
    <>
      <section className="tabs">
        {restaurants.map(({ name, id }, idx) => {
          return (
            <Tab
              key={id}
              label={name}
              isActive={idx === activeId}
              setActive={() => setActiveId(idx)}
            />
          );
        })}
      </section>

      <RestaurantComponent restaurantItem={restaurants[activeId]} />
    </>
  );
};
