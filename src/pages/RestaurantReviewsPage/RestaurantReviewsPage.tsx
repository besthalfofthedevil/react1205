'use client'
import styles from "./RestaurantReviewsPage.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { Reviews } from "../../components/Reviews/Reviews";
import { ReviewForm } from "../../components/ReviewForm/review-form";
import { useRequest } from "../../redux/hooks/useRequest";
import { getUsers } from "../../redux/entities/users/getUsers";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
} from "../../redux/api";
import { RequestStatus } from "../../redux/entities/request/requestSlice";
import type { Review } from "../../redux/entities/types";
import { useState } from "react";
import { useParams } from "next/navigation";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();
  const [reviewToUpdate, setReviewToUpdate] = useState<Review>(null);
  const [user] = useUserContext();
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsQuery(restaurantId);

  const [addReviewMutation] = useAddReviewMutation();
  const [updateReviewMutation] = useUpdateReviewMutation();

  const handleReviewSubmit = (review: Review) => {
    if (!user.isAutenticated) {
      console.error("No authenticated user");
      return;
    }

    if (!review.id) {
      // add review
      addReviewMutation({
        restaurantId,
        review: { ...review, userId: user.id },
      });
    } else {
      // Update review
      updateReviewMutation({
        restaurantId,
        review: { ...review, userId: user.id },
      });
    }
    setReviewToUpdate(null);
  };

  const handleReviewSelect = (id: string) => {
    if (!user.isAutenticated) {
      console.error("No authenticated user");
      return;
    }
    const selectedReview = reviews?.find((review) => review.id === id);
    if (selectedReview && selectedReview?.userId === user.id) {
      const { userId, ...review } = selectedReview;

      setReviewToUpdate({ ...review });
    }
  };

  const usersRequestStatus = useRequest(getUsers);

  if (isError) {
    return "Reviews loading error";
  }

  if (!reviews) {
    return "No Data";
  }
  return (
    <>
      <div className={styles.contentColumn}>
        <Reviews
          reviews={reviews}
          isLoading={
            isLoading && usersRequestStatus !== RequestStatus.fulfilled
          }
          onReviewSelected={handleReviewSelect}
        />
      </div>
      <div className={styles.contentColumn}>
        {user.isAutenticated && (
          <ReviewForm
            onSubmit={handleReviewSubmit}
            isSubmitDisabled={isLoading}
            review={reviewToUpdate}
          />
        )}
      </div>
    </>
  );
};
