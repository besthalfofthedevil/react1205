import { useParams } from "react-router";
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { Reviews } from "../../components/Reviews/Reviews";
import { ReviewForm } from "../../components/ReviewForm/review-form";
import { useRequest } from "../../redux/hooks/useRequest";
import { getUsers } from "../../redux/entities/users/getUsers";
import { useGetReviewsQuery } from "../../redux/api";
import { RequestStatus } from "../../redux/entities/request/requestSlice";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
  const [user] = useUserContext();
  const { data, isLoading, isError } = useGetReviewsQuery(restaurantId);

  const usersRequestStatus = useRequest(getUsers);

  if (isError) {
    return "Reviews loading error";
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
        {user.isAutenticated && <ReviewForm />}
      </div>
    </>
  );
};
