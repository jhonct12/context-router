import { useUserContext } from "../utils/useUserContext";

const Dashboard = () => {
  const { user, setUser } = useUserContext();

  return <h1>hola, {user.name}</h1>;
};

export default Dashboard;
