import type { RestaurantReviewItem } from "../../mocks/restaurants.mock";
import styles from "./review.module.css";

export const ReviewListItem = (
  reviewItem: Omit<RestaurantReviewItem, "id">
) => {
  const { user, text, rating } = reviewItem;
  return (
    <li>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <h3 className={styles.reviewerName}>{user}</h3>
          <div className={styles.reviewRating}>
            {rating} stars
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </li>
  );
};

export const Reviews = ({ reviews }: { reviews: RestaurantReviewItem[] }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <ReviewListItem
            user={item.user}
            text={item.text}
            rating={item.rating}
            key={item.id}
          />
        ))}
      </ul>
    </>
  );
};
/*

<main class="reviews-content">
        <section class="existing-reviews">
            <div class="review-card">
                <div class="review-header">
                    <h3 class="reviewer-name">Antony</h3>
                    <div class="review-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                </div>
                <p class="review-text">Not bad</p>
            </div>

            <div class="review-card">
                <div class="review-header">
                    <h3 class="reviewer-name">Sam</h3>
                    <div class="review-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star empty">☆</span>
                        <span class="star empty">☆</span>
                    </div>
                </div>
                <p class="review-text">No burgers</p>
            </div>
        </section>

        <section class="leave-review-form">
            <h3 class="form-title">Leave your review</h3>
            <textarea placeholder="Write your review here..."></textarea>
            <span class="form-rating-label">Rating:</span>
            <div class="form-stars">
                <span class="form-star">☆</span>
                <span class="form-star">☆</span>
                <span class="form-star">☆</span>
                <span class="form-star">☆</span>
                <span class="form-star">☆</span>
            </div>
            <button class="publish-btn">PUBLISH REVIEW</button>
        </section>
    </main>
*/
