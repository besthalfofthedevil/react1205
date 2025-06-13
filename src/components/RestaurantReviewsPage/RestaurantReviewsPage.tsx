import { useParams } from "react-router";
import { Reviews } from "../Reviews/Reviews";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { selectRestaurantById } from "../../slices/restaurantsSlice";

export const RestaurantReviewsPage = () => {
  const { restaurantId = "" } = useParams();

  const reviewIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.reviews
    ) || [];

  return <Reviews reviews={reviewIds} />;
};
