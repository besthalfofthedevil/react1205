import styles from "./Reviews.module.css";

import type { ReviewDto } from "../../redux/entities/types";
import { ReviewCard } from "../ReviewCard/ReviewCard";

export const Reviews = ({
  reviews,
  isLoading,
  onReviewSelected = () => {},
}: {
  reviews: ReviewDto[];
  isLoading: boolean;
  onReviewSelected?: (id: string) => void;
}) => {
  if (isLoading) {
    return "Loading";
  }

  return (
    <div className={styles.reviewsContent}>
      <ul className={styles.existingReviews}>
        {reviews.map((review) => (
          <li key={review.id} onClick={() => onReviewSelected(review.id)}>
            <ReviewCard key={review.id} review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
