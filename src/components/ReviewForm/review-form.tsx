import { useReviewForm } from "../../hooks/useReviewForm";
import { Counter } from "../Counter/counter";

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
      className="review-form"
      onSubmit={(e) => {
        e.preventDefault();
        resetForm();
      }}
    >
      <h3>Leave a Review</h3>
      <label>
        Your Name:
        <input
          type="text"
          name="user"
          value={userName}
          onChange={(e) => onUserNameChange(e?.target.value)}
        />
      </label>
      <label>
        Review Text:
        <textarea
          name="text"
          value={review}
          onChange={(e) => onReviewChange(e?.target.value)}
        />
      </label>
      <label>
        Rating:
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
      </label>
      <button type="submit">Clear</button>
    </form>
  );
};
