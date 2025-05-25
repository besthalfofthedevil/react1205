import { createRoot } from "react-dom/client";
import { restaurants } from "./mocks/restaurants.mock";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./styles.css";
import { Tab } from "./components/Tab/Tab";
import { StrictMode, useState } from "react";
import { RestaurantComponent } from "./components/Restaurant/Restaurant";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(rootElement);

const App = () => {
  const [activeId, setActiveId] = useState(0);
  return (
    <div className="layout">
      <Header>
        <h1>Restaurants</h1>
      </Header>
      <div className="main">
        <section className="tabs">
          {restaurants.map(({ name, id }, idx) => {
            return (
              <Tab
                key={id}
                label={name}
                isActive={idx === activeId}
                setActive={() => setActiveId(idx)}
              />
            );
          })}
        </section>

        <RestaurantComponent
          restaurantItem={restaurants[activeId]}
        />
      </div>
      <Footer>Footer</Footer>
    </div>
  );
};

appRoot.render(<StrictMode><App /></StrictMode>);
