import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../../components/Banner/Banner";
import { CuisineNavigation } from "../../components/CuisineNavigation/CuisineNavigation";
import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";

import styles from "./HomePage.module.css";
import {
  selectRestaurantsIds,
  selectRequestStatus,
} from "../../redux/entities/restaurants/restaurantsSlice";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurants/getRestraunts";
import type { AppDispatch } from "../../redux/store";

//Very basic HomePage component that displays a banner, cuisine navigation, and a list of restaurant cards.
export const HomePage = () => {
  //TODO: select restaurant ids from the store by cuisine
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restrauntIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === "idle" || restrauntIds.length === 0) {
    return <p>Loading restaurants...</p>;
  }

  if (requestStatus === "rejected") {
    return <p>Error loading restaurants. Please try again later.</p>;
  }

  return (
    <div>
      <Banner
        title="Order Food"
        subtitle={`From ${restrauntIds.length} Restraunts`}
      />
      <CuisineNavigation />
      {restrauntIds.length === 0 && <p>No restaurants available.</p>}
      <ul>
        {restrauntIds.map((id) => (
          <li key={id} className={styles.card}>
            <RestaurantCardContainer key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
