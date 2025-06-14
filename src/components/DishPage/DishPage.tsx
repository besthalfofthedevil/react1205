import { useParams } from "react-router";
import { MenuListItem } from "../Menu/menu-list-item";

export const DishPage = () => {
  const { dishId = "" } = useParams();

  return <MenuListItem key={dishId} dishId={dishId} />;
};
