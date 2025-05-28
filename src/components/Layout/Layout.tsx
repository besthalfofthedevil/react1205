import type React from "react";
import style from "./Layout.module.css";
import { Header } from "../Header/header";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};
