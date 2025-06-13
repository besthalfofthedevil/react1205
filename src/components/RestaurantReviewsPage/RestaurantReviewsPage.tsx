import { useParams } from "react-router";
import { Reviews } from "../Reviews/Reviews";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { selectRestaurantById } from "../../slices/restaurantsSlice";
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { ReviewForm } from "../ReviewForm/review-form";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
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
