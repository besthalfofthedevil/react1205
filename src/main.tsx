import { createRoot } from "react-dom/client";
import "./styles.css";
import { StrictMode } from "react";
import { Layout } from "./components/Layout/Layout";
import { ThemeContextProvider } from "./providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "./providers/UserContext/UserContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { Cart } from "./components/Cart/Cart";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { RestaurantMenuPage } from "./components/RestaurantMenuPage/RestaurantMenuPage";
import { RestaurantReviewsPage } from "./components/RestaurantReviewsPage/RestaurantReviewsPage";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const appRoot = createRoot(rootElement);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />} />
                <Route
                  path="/restaurants/:restaurantId"
                  element={<RestaurantPage />}
                >
                  <Route index element={<RestaurantMenuPage />} />
                  <Route path="reviews" element={<RestaurantReviewsPage />} />
                  <Route path="menu" element={<RestaurantMenuPage />} />
                </Route>

                <Route path="/dish/:dishId" element={<HomePage />} />

                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
