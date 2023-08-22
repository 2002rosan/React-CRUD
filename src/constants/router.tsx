import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import View from "../pages/view/View";
import Edit from "../pages/view/Edit";

export const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/view/:id",
    element: <View />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);
