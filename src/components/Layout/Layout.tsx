import type React from "react";
import style from "./Layout.module.css";


export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
