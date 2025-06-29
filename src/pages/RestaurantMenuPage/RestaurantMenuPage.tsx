"use client";
import { useParams } from "next/navigation";
import { Menu } from "../../components/Menu/menu";
import { useGetMenuQuery } from "../../redux/api";

export const RestaurantMenuPage = () => {
  const { restaurantId = "" } = useParams();
  const { data: menu = [], isLoading } = useGetMenuQuery(restaurantId);

  if (isLoading) {
    return "Loading...";
  }

  return <Menu menu={menu} />;
};
