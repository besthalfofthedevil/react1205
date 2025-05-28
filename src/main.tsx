import { createRoot } from "react-dom/client";
import { restaurants as  restaurantsData } from "./mocks/restaurants.mock";

import "./styles.css";
import { StrictMode } from "react";
import { Layout } from "./components/Layout/Layout";
import { Restaurants } from "./components/Restaurants/restaurants";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(rootElement);

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurantsData} />
    </Layout>
  );
};

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
