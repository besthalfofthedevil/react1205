import { createRoot } from "react-dom/client";
import "./styles.css";
import { StrictMode } from "react";
import { Layout } from "./components/Layout/Layout";
import { ThemeContextProvider } from "./providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "./providers/UserContext/UserContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { RestaurantMenuPage } from "./components/RestaurantMenuPage/RestaurantMenuPage";
import { RestaurantReviewsPage } from "./components/RestaurantReviewsPage/RestaurantReviewsPage";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { DishPage } from "./components/DishPage/DishPage";

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
                  <Route index element={<Navigate to="menu" />} />
                  <Route path="reviews" element={<RestaurantReviewsPage />} />
                  <Route path="menu" element={<RestaurantMenuPage />} />
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
              </Routes>
              <CartContainer />
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
