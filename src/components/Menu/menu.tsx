import { NavLink } from "react-router";
import styles from "./menu.module.css";
import { MenuItem } from "../MenuItem/MenuItem";

export const Menu = ({ menu }: { menu: string[] }) => {
  return (
    <section className={styles.menu}>
      <ul>
        {menu.map((dishId) => {
          return (
            <NavLink key={dishId} to={"/dish/" + dishId}>
              <li>
                <MenuItem key={dishId} dishId={dishId} />
              </li>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
