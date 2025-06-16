import { useParams } from "react-router";
import { MenuItem } from "../../components/MenuItem/MenuItem";

export const DishPage = () => {
  const { dishId = "" } = useParams();

  return <MenuItem key={dishId} dishId={dishId} />;
};
