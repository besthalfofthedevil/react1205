import type { JSX } from "react";
import styles from "./restaurant.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import classNames from "classnames";
import { Outlet } from "react-router";
import type { Restaurant } from "../../redux/entities/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RESTAURANT_SUB_ROUTES = ["Menu", "Reviews"];

export const RestaurantComponent = (props: {
  restaurant: Restaurant;
  children: JSX.Element;
}): JSX.Element => {
  const { name, id } = props.restaurant;
  const pathname = usePathname();
  console.log(pathname);
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
          <Link
            key={route}
            className={classNames(styles.navTab)}
            // className={({ isActive }) =>
            //   classNames(styles.navTab, { [styles.active]: isActive })
            // }
            href={`${id}/${route.toLowerCase()}`}
          >
            {route}
          </Link>
        ))}
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  );
};
