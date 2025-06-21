import { useParams } from "react-router";
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { Reviews } from "../../components/Reviews/Reviews";
import { ReviewForm } from "../../components/ReviewForm/review-form";
import { useRequest } from "../../redux/hooks/useRequest";
import { getUsers } from "../../redux/entities/users/getUsers";
import { useAddReviewMutation, useGetReviewsQuery } from "../../redux/api";
import { RequestStatus } from "../../redux/entities/request/requestSlice";
import type { Review } from "../../redux/entities/types";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
  const [user] = useUserContext();
  const { data, isLoading, isError } = useGetReviewsQuery(restaurantId);

  const [addReviewMutation] = useAddReviewMutation();

  const handleAddReview = (review: Review) => {
    addReviewMutation({ restaurantId, review: { ...review, userId: user.id } });
  };

  const usersRequestStatus = useRequest(getUsers);

  if (isError) {
    return "Reviews loading error";
  }

  if (!data) {
    return "No Data";
  }
  return (
    <>
      <div className={styles.contentColumn}>
        <Reviews
          reviews={data}
          isLoading={
            isLoading && usersRequestStatus !== RequestStatus.fulfilled
          }
        />
      </div>
      <div className={styles.contentColumn}>
        {user.isAutenticated && (
          <ReviewForm onSubmit={handleAddReview} isSubmitDisabled={isLoading} />
        )}
      </div>
    </>
  );
};
