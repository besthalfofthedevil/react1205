import { useSelector } from "react-redux";
import { Banner } from "../../components/Banner/Banner";
import { CuisineNavigation } from "../../components/CuisineNavigation/CuisineNavigation";
import { RestaurantCardContainer } from "../../components/RestaurantCardContainer/RestaurantCardContainer";
import { selectRestaurantIds } from "../../slices/restaurantsSlice";
import styles from "./HomePage.module.css";

//Very basic HomePage component that displays a banner, cuisine navigation, and a list of restaurant cards.
export const HomePage = () => {
  //TODO: select restaurant ids from the store by cuisine
  const restrauntIds = useSelector(selectRestaurantIds);
  return (
    <div>
      <Banner />
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
