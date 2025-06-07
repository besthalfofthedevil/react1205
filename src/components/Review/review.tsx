import { useSelector } from "react-redux";
import { StarsBar } from "../StarsBar/stars-bar";
import styles from "./review.module.css";
import type { RootState } from "../../store";
import { selectReviewById } from "../../slices/reviewsSlice";
import { selectUserById } from "../../slices/usersSlice";

export const ReviewListItem = (props: { id: string }) => {
  const reviewItem =
    useSelector((state: RootState) => selectReviewById(state, props?.id)) || {};
  const { userId, text, rating } = reviewItem;
  const user =
    useSelector((state: RootState) => selectUserById(state, userId)) || {};
  return (
    <li>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <h3 className={styles.reviewerName}>{user.name}</h3>
          <StarsBar rating={rating} totalStars={5} />
        </div>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </li>
  );
};

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
