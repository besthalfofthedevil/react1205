import type { JSX } from "react";
export const Header = ({ children }: { children: JSX.Element | string }) => {
  return <div className="header">{children}</div>;
};
