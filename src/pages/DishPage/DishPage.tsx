"use client";
import { useParams } from "next/navigation";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { useGetDishQuery } from "../../redux/api";

export const DishPage = () => {
  const { dishId } = useParams();

  const { data: dish, isLoading } = useGetDishQuery(dishId);

  if (isLoading) {
    return "Loading...";
  }

  if (!dish) {
    return "No data";
  }
  return <MenuItem key={dish.id} dish={dish} />;
};
