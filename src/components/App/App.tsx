"use client";
import { React, StrictMode } from "react";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "../../providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "../../providers/UserContext/UserContextProvider";
import { Layout } from "../Layout/Layout";
import { CartContainer } from "../CartContainer/CartContainer";
import { store } from "../../redux/store";

export const App = ({ children }: { children: React.ReactNode }) => (
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            {children}
            <CartContainer />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
