import styles from "./menu.module.css";
import { MenuItem } from "../MenuItem/MenuItem";
import type { Dish } from "../../redux/entities/types";
import Link from "next/link";

export const Menu = ({ menu }: { menu: Dish[] }) => {
  return (
    <section className={styles.menu}>
      <ul>
        {menu.map((dish) => {
          return (
            <Link key={dish.id} href={"/dish/" + dish.id}>
              <li>
                <MenuItem key={dish.id} dish={dish} />
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};
