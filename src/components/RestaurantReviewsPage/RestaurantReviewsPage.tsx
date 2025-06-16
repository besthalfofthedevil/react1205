import { useParams } from "react-router";
import { Reviews } from "../Reviews/Reviews";
import { useSelector } from "react-redux";
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { ReviewForm } from "../ReviewForm/review-form";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import type { RootState } from "../../redux/store";

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
