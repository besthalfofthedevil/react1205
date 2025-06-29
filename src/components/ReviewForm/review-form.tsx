import { useEffect } from "react";
import { useReviewForm } from "../../hooks/useReviewForm";
import type { Review } from "../../redux/entities/types";
import { Counter } from "../Counter/counter";
import styles from "./review-form.module.css";

export const ReviewForm = (props: {
  review?: Review;
  isSubmitDisabled: boolean;
  onSubmit?: (review: Review) => void;
}) => {
  const { review, onSubmit = () => {}, isSubmitDisabled = false } = props;

  const [
    formState,
    resetForm,
    setForm,
    onReviewChange,
    incrementRating,
    decrementRating,
  ] = useReviewForm(review);
  const { text, rating, id } = formState;

  useEffect(() => {
    if (review) {
      setForm(review);
    }
  }, [review]);
  
  return (
    <form
      className={styles.reviewForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formState);
        resetForm();
      }}
    >
      <h3 className={styles.formTitle}>{`${
        id ? "Update" : "Leave"
      } your review`}</h3>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Review Text:</label>
        <textarea
          name="text"
          placeholder="Write your review here..."
          value={text}
          className={styles.reviewText}
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
      <button
        className={styles.publishBtn}
        type="submit"
        disabled={isSubmitDisabled}
      >
        {`${id ? "UPDATE" : "PUBLISH"} REVIEW`}
      </button>
    </form>
  );
};
