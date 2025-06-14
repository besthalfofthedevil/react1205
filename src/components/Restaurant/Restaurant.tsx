import type { JSX } from "react";
import styles from "./restaurant.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import { selectRestaurantById } from "../../slices/restaurantsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router";

const RESTRAUNT_SUB_ROUTES = ["Menu", "Reviews"];

export const RestaurantComponent = (props: { id: string }): JSX.Element => {
  const { id: restaurantId } = props;
  const { name } =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId)
    ) || {};
  if (!name) {
    return <p>No restaurant name provided</p>;
  }

  return (
    <div>
      <section className={styles.restaurantBanner}>
        <h1 className={styles.restaurantTitle}>{name}</h1>
        <p className={styles.restaurantCuisine}>pizza, sushi, vegan</p>
        <StarsBar rating={4.5} totalStars={5} />
      </section>
      <nav className={styles.navTabs}>
        {RESTRAUNT_SUB_ROUTES.map((route) => (
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
