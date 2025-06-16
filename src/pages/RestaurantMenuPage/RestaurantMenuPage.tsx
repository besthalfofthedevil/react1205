import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { Menu } from "../../components/Menu/menu";

export const RestaurantMenuPage = () => {
  const { restaurantId = "" } = useParams();

  const menuIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.menu
    ) || [];

  return <Menu menu={menuIds} />;
};
