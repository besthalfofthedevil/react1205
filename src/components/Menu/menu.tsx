import { NavLink } from "react-router";
import styles from "./menu.module.css";
import { MenuItem } from "../MenuItem/MenuItem";
import type { Dish } from "../../redux/entities/types";

export const Menu = ({ menu }: { menu: Dish[] }) => {
  return (
    <section className={styles.menu}>
      <ul>
        {menu.map((dish) => {
          return (
            <NavLink key={dish.id} to={"/dish/" + dish.id}>
              <li>
                <MenuItem key={dish.id} dish={dish} />
              </li>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
