import styles from "./Reviews.module.css";
import { ReviewListItem } from "../ReviewListItem/ReviewListItem";


export const Reviews = ({ reviews, isLoading }: { reviews: string[]; isLoading:boolean }) => {
  // TODO: Add sceleton style 
  return (
    <div className={styles.reviewsContent}>
      <ul className={styles.existingReviews}>
        {reviews.map((reviewId) => (
          <ReviewListItem key={reviewId} id={reviewId} />
        ))}
      </ul>
    </div>
  );
};
