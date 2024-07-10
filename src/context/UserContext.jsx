import { useState } from "react";
import { UserContext } from "../utils/useUserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", email: "", login: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
