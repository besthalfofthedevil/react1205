import type { JSX } from "react";
import type { Restaurant } from "../../mocks/restaurants.mock";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Review/review";
import { ReviewForm } from "../ReviewForm/review-form";

export const RestaurantComponent = (props: {
  restaurantItem: Restaurant;
}): JSX.Element => {
  const { name, menu, reviews } = props.restaurantItem;
  if (!name) {
    return <p>No restaurant name provided</p>;
  }
  const hasMenu = Array.isArray(menu) && menu.length > 0;
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;
  return (
    <div>
      <h2>{name}</h2>
      {hasMenu && <Menu menu={menu} />}
      {hasReviews && <Reviews reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
