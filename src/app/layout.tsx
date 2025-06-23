"use client";
import { React, StrictMode } from "react";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "../providers/ThemeProvider/ThemeProvider";
import { UserContextProvider } from "../providers/UserContext/UserContextProvider";
import { Layout } from "../components/Layout/Layout";
import { CartContainer } from "../components/CartContainer/CartContainer";
import { store } from "../redux/store";
import "../styles/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
      </body>
    </html>
  );
};

export default RootLayout;
