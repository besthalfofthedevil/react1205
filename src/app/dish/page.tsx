"use client"
import { useParams } from "react-router";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { useGetDishQuery } from "../../redux/api";

const DishPage = () => {
  const { dishId = "" } = useParams();

  const { data: dish, isLoading } = useGetDishQuery(dishId);

  if (isLoading) {
    return "Loading...";
  }

  if (!dish) {
    return "No data";
  }
  return <MenuItem key={dish.id} dish={dish} />;
};

export default DishPage;
