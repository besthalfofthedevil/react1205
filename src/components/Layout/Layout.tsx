import type React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
