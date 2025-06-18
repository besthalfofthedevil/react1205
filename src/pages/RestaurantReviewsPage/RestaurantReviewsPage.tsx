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
import { getUsers } from "../../redux/entities/users/getUsers";
import { RequestStatus } from "../../redux/entities/request/requestSlice";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
  const [user] = useUserContext();
  const rewviewsRequsestStatus = useRequest(getReviews, restaurantId);
  const usersRequsestStatus = useRequest(getUsers);

  const isLoading =
    rewviewsRequsestStatus !== RequestStatus.idle &&
    usersRequsestStatus !== RequestStatus.idle;
  const reviewIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.reviews
    ) || [];

  return (
    <>
      <div className={styles.contentColumn}>
        <Reviews reviews={reviewIds} isLoading={isLoading} />
      </div>
      <div className={styles.contentColumn}>
        {user.isAutenticated && <ReviewForm />}
      </div>
    </>
  );
};
