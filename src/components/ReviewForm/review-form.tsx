
export const ReviewForm = () => {
    return (
        <form className="review-form">
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
            <select name="rating" required>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
            </select>
        </label>
        <button type="submit">Submit Review</button>
        </form>
    );
}