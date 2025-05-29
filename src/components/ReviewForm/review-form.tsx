import { useReviewForm } from "../../hooks/useReviewForm";
import { Counter } from "../Counter/counter";
import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const [
    formState,
    resetForm,
    onUserNameChange,
    onReviewChange,
    incrementRating,
    decrementRating,
  ] = useReviewForm();
  const { userName, review, rating } = formState;
  return (
    <form
      className={styles.reviewForm}
      onSubmit={(e) => {
        e.preventDefault();
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
          value={review}
          onChange={(e) => onReviewChange(e?.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Rating:</label>
        <Counter
          count={rating}
          add={(e) => {
            e.preventDefault();
            incrementRating();
          }}
          substract={(e) => {
            e.preventDefault();
            decrementRating();
          }}
        />
      </div>
      <button className={styles.publishBtn} type="submit">
        PUBLISH REVIEW
      </button>
    </form>
  );
};
