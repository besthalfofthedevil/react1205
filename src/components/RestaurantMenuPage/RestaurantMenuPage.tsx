import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../store";
import { selectRestaurantById } from "../../slices/restaurantsSlice";
import { Menu } from "../Menu/menu";

export const RestaurantMenuPage = () => {
  const { restaurantId = "" } = useParams();

  const menuIds =
    useSelector(
      (state: RootState) => selectRestaurantById(state, restaurantId)?.menu
    ) || [];

  return <Menu menu={menuIds} />;
};
