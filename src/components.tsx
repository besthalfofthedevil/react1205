import type { JSX } from "react";
import type { Restaurant, RestaurantMenuItem, RestaurantReviewItem } from "./mocks/restaurants.mock";

export const MenuItem = (props: {
  menuItem: RestaurantMenuItem;
}): JSX.Element => {
  const { name, price, ingredients } = props.menuItem;
  return <li>{`${name} - $${price} (${ingredients.join(", ")})`}</li>;
};

export const ReviewItem = (props: { reviewItem: RestaurantReviewItem }) => {
  const { user, text, rating } = props.reviewItem;
  return (
    <li>
      <strong>{user}</strong>: {text} ({rating} stars)
    </li>
  );
};

export const RestaurantComponent = (props: {
  restaurant: Restaurant;
}): JSX.Element => {
  const { name, menu, reviews } = props.restaurant;
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => {
          return <MenuItem menuItem={item} key={item.id} />;
        })}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => {
          return <ReviewItem reviewItem={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
