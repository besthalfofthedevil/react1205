
import { Banner } from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { selectRestaurantIds } from "../../redux/entities/restaurants/restaurantsSlice";

export const RestaurantsPage = () => {
  const restrauntIds = useSelector(selectRestaurantIds);
  return (
    <>
      <Banner title="Order Food" subtitle={`From ${restrauntIds.length} Restraunts`} />
      <RestaurantsList restrauntIds={restrauntIds} />
    </>
  );
};
