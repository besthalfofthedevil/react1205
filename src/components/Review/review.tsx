import type { RestaurantReviewItem } from "../../mocks/restaurants.mock";
import { StarsBar } from "../StarsBar/stars-bar";
import styles from "./review.module.css";

export const ReviewListItem = (
  reviewItem: Omit<RestaurantReviewItem, "id">
) => {
  const { user, text, rating } = reviewItem;
  return (
    <li>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <h3 className={styles.reviewerName}>{user}</h3>
          <StarsBar rating={rating} totalStars={5} />
        </div>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </li>
  );
};

export const Reviews = ({ reviews }: { reviews: RestaurantReviewItem[] }) => {
  return (
    <div className={styles.reviewsContent}>
      <h3 className={styles.title}>Reviews</h3>
      <ul className={styles.existingReviews}>
        {reviews.map((item) => (
          <ReviewListItem
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
