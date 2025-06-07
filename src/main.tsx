import { createRoot } from "react-dom/client";

import "./styles.css";
import { StrictMode } from "react";
import { Layout } from "./components/Layout/Layout";
import { Restaurants } from "./components/Restaurants/restaurants";
import { ThemeContextProvider } from "./providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "./providers/UserContext/UserContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";

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
            <Restaurants/>
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
