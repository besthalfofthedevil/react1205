"use client";
import { useParams } from "next/navigation";
import { RestaurantComponent } from "../../components/Restaurant/Restaurant";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantPage = ({ children }) => {
  const { restaurantId = "" } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) {
    return "No data for the restaurant";
  }

  return (
    <RestaurantComponent restaurant={restaurant}>
      {children}
    </RestaurantComponent>
  );
};
