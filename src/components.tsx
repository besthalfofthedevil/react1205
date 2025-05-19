import type { JSX } from "react";
import type {
  Restaurant,
  RestaurantMenuItem,
  RestaurantReviewItem,
} from "./mocks/restaurants.mock";

export const MenuItemComponent = (
  menuItem: Omit<RestaurantMenuItem, "id">
): JSX.Element => {
  const { name, price, ingredients } = menuItem;
  return <li>{`${name} - $${price} (${ingredients.join(", ")})`}</li>;
};

export const ReviewItemComponent = (
  reviewItem: Omit<RestaurantReviewItem, "id">
) => {
  const { user, text, rating } = reviewItem;
  return (
    <li>
      <strong>{user}</strong>: {text} ({rating} stars)
    </li>
  );
};

export const RestaurantComponent = (props: {
  restaurantItem: Restaurant;
}): JSX.Element => {
  const { name, menu, reviews } = props.restaurantItem;
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <MenuItemComponent
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
            key={item.id}
          />
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <ReviewItemComponent
            user={item.user}
            text={item.text}
            rating={item.rating}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
