import type React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState({ isAutenticated: false });

  const toggleAuth = () => {
    setUser((user) =>
      user.isAutenticated
        ? { isAutenticated: false }
        : {
            name: "Sam",
            isAutenticated: true,
            id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
          }
    );
  };

  return <UserContext value={[user, toggleAuth]}>{children}</UserContext>;
};
