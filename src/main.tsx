import { createRoot } from "react-dom/client";
import { restaurants } from "./mocks/restaurants.mock";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./styles.css";
import { Tab } from "./components/Tab/Tab";
import { StrictMode, useState } from "react";
import { RestaurantComponent } from "./components/Restaurant/Restaurant";
import { Layout } from "./components/Layout/Layout";
import { Restaurants } from "./components/Restaurants/Restaurants";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(rootElement);

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
