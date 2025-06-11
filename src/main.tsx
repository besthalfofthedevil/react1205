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
import { RestaurantsListPage } from "./pages/RestaurantsListPage/RestaurantsListPage";

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
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />}>
                  <Route index element={<RestaurantsListPage />} />
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    {/*      <Route path="reviews" element={<RestaurantReviews />} />*/}
                  </Route>
                </Route>

                {/*    <Route path="/dish/:dishId" element={<DishPage />} /> */}

                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </Layout>
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
