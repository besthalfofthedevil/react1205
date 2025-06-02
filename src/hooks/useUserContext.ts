import { useContext } from "react";
import { UserContext } from "../providers/UserContext/UserContext";

export const useUserContext = () => {
  const [user, toggleAuth] = useContext(UserContext);
  if (user === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return [user, toggleAuth];
};
