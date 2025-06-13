
import { Banner } from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../slices/restaurantsSlice";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";

export const RestaurantsPage = () => {
  const restrauntIds = useSelector(selectRestaurantIds);
  return (
    <>
      <Banner title="Order Food" subtitle={`From ${restrauntIds.length} Restraunts`} />
      <RestaurantsList restrauntIds={restrauntIds} />
    </>
  );
};
