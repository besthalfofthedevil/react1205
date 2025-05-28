import type React from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";


export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout">
      <ProgressBar/>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
