import type { JSX } from "react";
import styles from "./restaurant.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router";
import type { Restaurant } from "../../redux/entities/types";

const RESTAURANT_SUB_ROUTES = ["Menu", "Reviews"];

export const RestaurantComponent = (props: {
  restaurant: Restaurant;
}): JSX.Element => {
  const { name } = props.restaurant;

  if (!name) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className={styles.restaurantBanner}>
        <h1 className={styles.restaurantTitle}>{name}</h1>
        <p className={styles.restaurantCuisine}>pizza, sushi, vegan</p>
        <StarsBar rating={4.5} totalStars={5} />
      </section>
      <nav className={styles.navTabs}>
        {RESTAURANT_SUB_ROUTES.map((route) => (
          <NavLink
            key={route}
            className={({ isActive }) =>
              classNames(styles.navTab, { [styles.active]: isActive })
            }
            to={route.toLowerCase()}
          >
            {route}
          </NavLink>
        ))}
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  );
};
