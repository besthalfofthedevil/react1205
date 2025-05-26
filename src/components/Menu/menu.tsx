import type { JSX } from "react";
import { useDishCounter } from "../../hooks/useDishCounter";
import type { RestaurantMenuItem } from "../../mocks/restaurants.mock";
import { Counter } from "../Counter/counter";

export const MenuListItem = (
  menuItem: Omit<RestaurantMenuItem, "id">
): JSX.Element => {
  const [dishCount, addDish, removeDish] = useDishCounter(0);
  const { name, price, ingredients } = menuItem;
  return (
    <li>
      <div>
        {`${name} - $${price} (${ingredients.join(", ")})`}
        <Counter count={dishCount} add={addDish} substract={removeDish} />
      </div>
    </li>
  );
};

export const Menu = ({ menu }: { menu: RestaurantMenuItem[] }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <MenuListItem
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
            key={item.id}
          />
        ))}
      </ul>
    </>
  );
};
