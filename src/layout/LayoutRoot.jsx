import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </>
  );
};

export default LayoutRoot;
