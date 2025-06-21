import styles from "./Reviews.module.css";
import { ReviewListItem } from "../ReviewListItem/ReviewListItem";
import type { Review } from "../../redux/entities/types";

export const Reviews = ({
  reviews,
  isLoading,
}: {
  reviews: Review[];
  isLoading: boolean;
}) => {
  if (isLoading) {
    return "Loading";
  }
  return (
    <div className={styles.reviewsContent}>
      <ul className={styles.existingReviews}>
        {reviews.map((review) => (
          <ReviewListItem key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};
