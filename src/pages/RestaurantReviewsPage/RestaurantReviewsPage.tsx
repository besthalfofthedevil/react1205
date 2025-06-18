import { useParams } from "react-router";
import { useSelector } from "react-redux";
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import type { RootState } from "../../redux/store";
import { Reviews } from "../../components/Reviews/Reviews";
import { ReviewForm } from "../../components/ReviewForm/review-form";
import { useRequest } from "../../redux/hooks/useRequest";
import { getReviews } from "../../redux/entities/reviews/getReviews";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
  const requsestStatus = useRequest(getReviews, restaurantId);
  const [user] = useUserContext();
  const reviewIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.reviews
    ) || [];

  return (
    <>
      <div className={styles.contentColumn}>
        <Reviews reviews={reviewIds} />
      </div>
      <div className={styles.contentColumn}>
        {user.isAutenticated && <ReviewForm />}
      </div>
    </>
  );
};
