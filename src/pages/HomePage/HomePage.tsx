import { Banner } from "../../components/Banner/Banner";
import { CuisineNavigation } from "../../components/CuisineNavigation/CuisineNavigation";
import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import styles from "./HomePage.module.css";

import { useGetRestaurantsQuery } from "../../redux/api";

//Very basic HomePage component that displays a banner, cuisine navigation, and a list of restaurant cards.
export const HomePage = () => {
  //TODO: select restaurant ids from the store by cuisine
  const {
    data: restaurants,
    isLoading,
    isFetching,
    isError,
  } = useGetRestaurantsQuery(undefined);

  if (isLoading || isFetching) {
    return <p>Loading restaurants...</p>;
  }

  if (isError) {
    return <p>Error loading restaurants. Please try again later.</p>;
  }

  return (
    <div>
      <Banner
        title="Order Food"
        subtitle={`From ${restaurants?.length} Restaurants`}
      />
      <CuisineNavigation />
      {restaurants?.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restaurants?.map((restaurant) => (
          <li key={restaurant.id} className={styles.card}>
            <RestaurantCardContainer
              key={restaurant.id}
              restaurant={restaurant}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
