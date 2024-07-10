import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  return <>{!!user.login ? <Outlet></Outlet> : <Navigate to="/"></Navigate>}</>;
};

export default LayoutPrivate;
