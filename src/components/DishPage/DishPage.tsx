import { useParams } from "react-router";
import { MenuItem } from "../MenuItem/MenuItem";


export const DishPage = () => {
  const { dishId = "" } = useParams();

  return <MenuItem key={dishId} dishId={dishId} />;
};
