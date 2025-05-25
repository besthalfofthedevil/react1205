import { useState, type PropsWithChildren } from "react";
import { RestaurantComponent } from "../Restaurant/Restaurant";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Tab } from "../Tab/Tab";

export const Restaurants = ({
  restaurants,
}: PropsWithChildren<{ restaurants: Restaurant[] }>) => {
  const [activeId, setActiveId] = useState(0);
  console.log('Restaurants rendered')

  return (
    <>
      <section className="tabs">
        {restaurants.map(({ name, id }, idx) => {
            const isActive =  idx === activeId
          return (
            <Tab
              key={id}
              label={name}
              isActive={isActive}
              setActive={() => !isActive && setActiveId(idx)}
            />
          );
        })}
      </section>

      <RestaurantComponent restaurantItem={restaurants[activeId]} />
    </>
  );
};
