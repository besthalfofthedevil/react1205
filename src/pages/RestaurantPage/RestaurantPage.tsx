import { useParams } from "react-router";
import { RestaurantComponent } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = () => {
  const { restaurantId = "" } = useParams();

  return <RestaurantComponent key={restaurantId} id={restaurantId} />;
};
