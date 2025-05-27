import type { RestaurantReviewItem } from "../../mocks/restaurants.mock";

export const ReviewListItem = (
  reviewItem: Omit<RestaurantReviewItem, "id">
) => {
  const { user, text, rating } = reviewItem;
  return (
    <li>
      <strong>{user}</strong>: {text} ({rating} stars)
    </li>
  );
};


export const Reviews = ({ reviews }: { reviews: RestaurantReviewItem[] }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <ReviewListItem
            user={item.user}
            text={item.text}
            rating={item.rating}
            key={item.id}
          />
        ))}
      </ul>
    </>
  );
};