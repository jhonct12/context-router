import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import LayoutPrivate from "../layout/LayoutPrivate";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot></LayoutRoot>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate></LayoutPrivate>,
        children: [
          {
            index: true,
            element: <Dashboard></Dashboard>,
          },
        ],
      },
    ],
  },
]);
