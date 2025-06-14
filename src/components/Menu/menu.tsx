import { NavLink } from "react-router";
import { MenuListItem } from "./menu-list-item";
import styles from "./menu.module.css";

export const Menu = ({ menu }: { menu: string[] }) => {
  return (
    <section className={styles.menu}>
      <ul>
        {menu.map((dishId) => {
          return (
            <NavLink key={dishId} to={"/dish/" + dishId}>
              <MenuListItem key={dishId} dishId={dishId} />
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
