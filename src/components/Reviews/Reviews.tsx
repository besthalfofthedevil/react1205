import styles from "./Reviews.module.css";
import { ReviewListItem } from "../ReviewListItem/ReviewListItem";


export const Reviews = ({ reviews }: { reviews: string[] }) => {
  return (
    <div className={styles.reviewsContent}>
      <h3 className={styles.title}>Reviews</h3>
      <ul className={styles.existingReviews}>
        {reviews.map((reviewId) => (
          <ReviewListItem key={reviewId} id={reviewId} />
        ))}
      </ul>
    </div>
  );
};
