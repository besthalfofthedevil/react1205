import { useContext } from "react";
import { UserContext, type UserContextType } from "../providers/UserContext/UserContext";

export const useUserContext = (): UserContextType => {
  const [user, toggleAuth] = useContext(UserContext);
  if (user === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return [user, toggleAuth];
};
