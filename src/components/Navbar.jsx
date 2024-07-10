import { NavLink } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!!user.login && (
        <>
          <NavLink to="/dashboard">dashboard</NavLink>
          <button
            onClick={() => setUser({ name: "", email: "", login: false })}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
