import { createContext } from "react";

export type UserContextType = [
  (
    | { name: string; id: string; isAutenticated: true }
    | { isAutenticated: false }
  ),
  () => void
];

export const UserContext = createContext<UserContextType>([
  { isAutenticated: false },
  () => {},
]);
