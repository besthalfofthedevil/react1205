import type { JSX } from "react";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Review/review";
import { ReviewForm } from "../ReviewForm/review-form";
import styles from "./restaurant.module.css";
import { StarsBar } from "../StarsBar/stars-bar";
import { useUserContext } from "../../hooks/useUserContext";

export const RestaurantComponent = (props: {
  restaurantItem: Restaurant;
}): JSX.Element => {
  const [user] = useUserContext();
  const { name, menu, reviews } = props.restaurantItem;
  if (!name) {
    return <p>No restaurant name provided</p>;
  }
  const hasMenu = Array.isArray(menu) && menu.length > 0;
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;
  return (
    <div>
      <section className={styles.restaurantBanner}>
        <h1 className={styles.restaurantTitle}>{name}</h1>
        <p className={styles.restaurantCuisine}>pizza, sushi, vegan</p>
        <StarsBar rating={4.5} totalStars={5} />
      </section>
      <section className={styles.content}>
        {hasMenu && <Menu menu={menu} />}
      </section>
      <section className={styles.content}>
        <div className={styles.contentColumn}>
          {hasReviews && <Reviews reviews={reviews} />}
        </div>
        <div className={styles.contentColumn}>
          {user.isAutenticated && <ReviewForm />}
        </div>
      </section>
    </div>
  );
};
