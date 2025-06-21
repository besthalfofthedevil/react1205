import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { Menu } from "../../components/Menu/menu";
import { useRequest } from "../../redux/hooks/useRequest";
import { getRestaurantMenu } from "../../redux/entities/dishes/getMenu";
import { RequestStatus } from "../../redux/entities/request/requestSlice";
import { getRestaurant } from "../../redux/entities/restaurants/getRestaurant";

export const RestaurantMenuPage = () => {
  const { restaurantId = "" } = useParams();
  const requestRestaurantStatus = useRequest(getRestaurant, restaurantId);
  const requestRestaurantMenuStatus = useRequest(
    getRestaurantMenu,
    restaurantId
  );

  const menuIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.menu
    ) || [];

  if (
    requestRestaurantStatus !== RequestStatus.fulfilled &&
    requestRestaurantMenuStatus !== RequestStatus.fulfilled
  ) {
    return "Loading...";
  }
  return <Menu menu={menuIds} />;
};
