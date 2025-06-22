import "./styles.css";
import { StrictMode } from "react";
import { Layout } from "../Layout/Layout";
import { ThemeContextProvider } from "../../providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "../../providers/UserContext/UserContextProvider";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/HomePage/HomePage";
import { RestaurantsPage } from "../../pages/RestaurantsPage/RestaurantsPage";
import { RestaurantPage } from "../../pages/RestaurantPage/RestaurantPage";
import { RestaurantReviewsPage } from "../../pages/RestaurantReviewsPage/RestaurantReviewsPage";
import { CartContainer } from "../CartContainer/CartContainer";
import { DishPage } from "../../pages/DishPage/DishPage";
import { RestaurantMenuPage } from "../../pages/RestaurantMenuPage/RestaurantMenuPage";

const App = () => {
  return (
    <StrictMode>
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
    </StrictMode>
  );
};

export default App;