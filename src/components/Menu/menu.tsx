import type { JSX } from "react";
import { useDishCounter } from "../../hooks/useDishCounter";
import type { RestaurantMenuItem } from "../../mocks/restaurants.mock";

export const MenuListItem = (
  menuItem: Omit<RestaurantMenuItem, "id">
): JSX.Element => {
  const [count, add, remove] = useDishCounter(0); 
  const { name, price, ingredients } = menuItem;
  return (
    <li>
      <div>
        {`${name} - $${price} (${ingredients.join(", ")})`}
        <button onClick={remove}>-</button>
        {count}
        <button onClick={add}>+</button>
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
