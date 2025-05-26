import { Counter } from "../Counter/counter";

export const ReviewForm = () => {
  return (
    <form
      className="review-form"
      onSubmit={(e) => {
        console.log(e)
        e.preventDefault();
      }}
    >
      <h3>Leave a Review</h3>
      <label>
        Your Name:
        <input type="text" name="user" required />
      </label>
      <label>
        Review Text:
        <textarea name="text" required />
      </label>
      <label>
        Rating:
        <Counter count={10} add={() => {}} substract={() => {}}></Counter>
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};
