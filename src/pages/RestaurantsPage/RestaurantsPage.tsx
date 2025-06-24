import { Banner } from "../../components/Banner/Banner";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantsPage = () => {
  const {
    data: restaurants,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <p>Loading restaurants...</p>;
  }

  if (isError) {
    return <p>Error loading restaurants. Please try again later.</p>;
  }

  if (!restaurants) {
    return <>No restaurants.</>;
  }
  return (
    <>
      <Banner
        title="Order Food"
        subtitle={`From ${restaurants.length} Restaurants`}
      />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
};
