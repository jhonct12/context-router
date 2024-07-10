import { createContext, useContext } from "react";

export const UserContext = createContext(false);

export const useUserContext = () => {
  return useContext(UserContext);
};
