import { Outlet } from "react-router";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/RestaurantsTabs";
import { Banner } from "../../components/Banner/Banner";

export const RestaurantsPage = () => {
  return (
    <>
      <Banner />
      <RestaurantsTabs />
      <Outlet />
    </>
  );
};
