import type { RestaurantMenuItem } from "../../mocks/restaurants.mock";
import { MenuListItem } from "./menu-list-item";
import styles from "./menu.module.css";

export const Menu = ({ menu }: { menu: RestaurantMenuItem[] }) => {
  return (
    <section className={styles.menu}>
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
    </section>
  );
};
