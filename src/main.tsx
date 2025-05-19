import { createRoot } from "react-dom/client";
import {
  restaurants,
} from "./mocks/restaurants.mock";
import { RestaurantComponent } from "./components";



const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(rootElement);



const reactElement = (
  <div>
    <h1>Restaurants</h1>
    {restaurants.map((restaurant) => {
      return (
        <RestaurantComponent key={restaurant.id} restaurant={restaurant} />
      );
    })}
  </div>
);

appRoot.render(reactElement);
