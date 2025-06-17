import { Banner } from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurantsSlice";
import { useRequest } from "../../redux/hooks/useRequest";
import { RequestStatus } from "../../redux/entities/request/requestSlice";
import { getRestaurants } from "../../redux/entities/restaurants/getRestraunts";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restrauntIds = useSelector(selectRestaurantsIds);

  if (restrauntIds.length === 0) {
    return <p>Loading restaurants...</p>;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <p>Error loading restaurants. Please try again later.</p>;
  }

  return (
    <>
      <Banner
        title="Order Food"
        subtitle={`From ${restrauntIds.length} Restraunts`}
      />
      <RestaurantsList restrauntIds={restrauntIds} />
    </>
  );
};
