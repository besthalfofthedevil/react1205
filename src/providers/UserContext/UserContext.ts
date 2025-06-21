import { createContext } from "react";

export type UserContextType = [
  { name?: string; id?:string, isAutenticated: boolean },
  () => void
];

export const UserContext = createContext<UserContextType>([
  { isAutenticated: false, },
  () => {},
]);
