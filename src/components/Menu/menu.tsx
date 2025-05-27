import type { RestaurantMenuItem } from "../../mocks/restaurants.mock";
import { MenuListItem } from "./menu-list-item";


export const Menu = ({ menu }: { menu: RestaurantMenuItem[] }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => {
          if (!item.name) return null;
          return <MenuListItem
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
            key={item.id}
          />
        })}
      </ul>
    </>
  );
};
