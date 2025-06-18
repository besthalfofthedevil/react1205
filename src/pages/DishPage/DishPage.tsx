import { useParams } from "react-router";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { useRequest } from "../../redux/hooks/useRequest";
import { getDish } from "../../redux/entities/dishes/getDish";
import { RequestStatus } from "../../redux/entities/request/requestSlice";

export const DishPage = () => {
  const { dishId = "" } = useParams();
  const requsestStatus = useRequest(getDish, dishId);
  if (requsestStatus !== RequestStatus.fulfilled) {
    return 'Loading...'
  }
  return <MenuItem key={dishId} dishId={dishId} />;
};
