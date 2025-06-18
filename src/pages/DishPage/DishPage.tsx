import { useParams } from "react-router";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { useRequest } from "../../redux/hooks/useRequest";
import { getDish } from "../../redux/entities/dishes/getDish";
import { RequestStatus } from "../../redux/entities/request/requestSlice";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";
import type { RootState } from "../../redux/store";

export const DishPage = () => {
  const { dishId = "" } = useParams();
  const dish =
    useSelector((state: RootState) => selectDishById(state, dishId)) || {};
  const requsestStatus = useRequest(getDish, dishId);

  if (!Object.keys(dish).length && requsestStatus !== RequestStatus.fulfilled) {
    return "Loading...";
  }
  return <MenuItem key={dishId} dishId={dishId} />;
};
