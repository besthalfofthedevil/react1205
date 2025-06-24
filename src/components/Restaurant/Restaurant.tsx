import { type JSX } from "react";
import styles from "./restaurant.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import classNames from "classnames";
import type { Restaurant } from "../../redux/entities/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RESTAURANT_SUB_ROUTES = ["Menu", "Reviews"];

export const RestaurantComponent = (props: {
  restaurant: Restaurant;
  children: JSX.Element;
}): JSX.Element => {
  const { name } = props.restaurant;
  const pathname = usePathname();

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
            className={classNames(styles.navTab, {
              [styles.active]: pathname.endsWith(route.toLowerCase()),
            })}
            href={`${route.toLowerCase()}`}
          >
            {route}
          </Link>
        ))}
      </nav>
      <section className={styles.content}>{props.children}</section>
    </div>
  );
};
