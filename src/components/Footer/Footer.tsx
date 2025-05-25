import type { JSX } from "react";
export const Footer = ({ children }: { children: JSX.Element | string }) => {
  return <div className="footer">{children}</div>;
};
