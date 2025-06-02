import { useContext } from "react";
import { UserContext } from "../providers/UserContext/UserContext";

export type UserContextType = [
  { name?: string; isAutenticated: boolean },
  () => void
];

export const useUserContext = () => {
  const [user, toggleAuth] = useContext(UserContext);
  if (user === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return [user, toggleAuth] as unknown as UserContextType;
};
