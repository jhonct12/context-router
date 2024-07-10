import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";

const Home = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      name: "jon",
      email: "jon.com",
      login: true,
    });
    navigate("/dashboard");
  };

  return (
    <>
      <h1>home</h1>
      <button onClick={handleLogin}>login</button>
    </>
  );
};

export default Home;
