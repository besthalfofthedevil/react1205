import { Outlet } from "react-router";
import { Banner } from "../../components/Banner/Banner";

export const RestaurantsPage = () => {
  return (
    <>
      <Banner
        title="Order Food"
        subtitle={`From ${10} Restraunts`}
      />
      <Outlet />
    </>
  );
};
