import { useParams } from "react-router";
import { RestaurantComponent } from "../../components/Restaurant/Restaurant";
import { useRequest } from "../../redux/hooks/useRequest";
import { getRestaurant } from "../../redux/entities/restaurants/getRestaurant";

export const RestaurantPage = () => {
  const { restaurantId = "" } = useParams();
  const requestStatus = useRequest(getRestaurant, restaurantId);

  return <RestaurantComponent key={restaurantId} id={restaurantId} />;
};
