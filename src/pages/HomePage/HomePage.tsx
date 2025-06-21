import { useSelector } from "react-redux";
import { Banner } from "../../components/Banner/Banner";
import { CuisineNavigation } from "../../components/CuisineNavigation/CuisineNavigation";
import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import styles from "./HomePage.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurantsSlice";
import { getRestaurants } from "../../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../../redux/hooks/useRequest";
import { RequestStatus } from "../../redux/entities/request/requestSlice";

//Very basic HomePage component that displays a banner, cuisine navigation, and a list of restaurant cards.
export const HomePage = () => {
  //TODO: select restaurant ids from the store by cuisine

  const requestStatus = useRequest(getRestaurants);
  const restaurantIds = useSelector(selectRestaurantsIds);

  if (restaurantIds.length === 0) {
    return <p>Loading restaurants...</p>;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <p>Error loading restaurants. Please try again later.</p>;
  }

  return (
    <div>
      <Banner
        title="Order Food"
        subtitle={`From ${restaurantIds.length} Restaurants`}
      />
      <CuisineNavigation />
      {restaurantIds.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restaurantIds.map((id) => (
          <li key={id} className={styles.card}>
            <RestaurantCardContainer key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
