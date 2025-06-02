import type React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState({ isAutenticated: false });

  const toggleAuth = () => {
    setUser((user) =>
      user.isAutenticated
        ? { isAutenticated: false }
        : { name: "John Doe", isAutenticated: true }
    );
  };

  return <UserContext value={[user, toggleAuth]}>{children}</UserContext>;
};
