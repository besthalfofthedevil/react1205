import type React from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";
import style from "./Layout.module.css";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={style.layout}>
      <ProgressBar/>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
