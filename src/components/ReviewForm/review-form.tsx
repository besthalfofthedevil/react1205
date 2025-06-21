import { useReviewForm } from "../../hooks/useReviewForm";
import type { Review } from "../../redux/entities/types";
import { Counter } from "../Counter/counter";
import styles from "./review-form.module.css";

export const ReviewForm = (props: {
  review?: Review;
  isSubmitDisabled: false;
  onSubmit?: (review: Omit<Review, "userId">) => void;
}) => {
  const { review, onSubmit = () => {} , isSubmitDisabled} = props;
  const [
    formState,
    resetForm,
    onUserNameChange,
    onReviewChange,
    incrementRating,
    decrementRating,
  ] = useReviewForm();

  const { userName, text, rating } = formState;
  return (
    <form
      className={styles.reviewForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formState);
        resetForm();
      }}
    >
      <h3 className={styles.formTitle}>Leave your review</h3>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Your Name:</label>
        <input
          type="text"
          name="user"
          value={userName}
          onChange={(e) => onUserNameChange(e?.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Review Text:</label>
        <textarea
          name="text"
          placeholder="Write your review here..."
          value={text}
          onChange={(e) => onReviewChange(e?.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Rating:</label>
        <Counter
          count={rating}
          add={() => {
            incrementRating();
          }}
          substract={() => {
            decrementRating();
          }}
        />
      </div>
      <button className={styles.publishBtn} type="submit" disabled={isSubmitDisabled}>
        PUBLISH REVIEW
      </button>
    </form>
  );
};
