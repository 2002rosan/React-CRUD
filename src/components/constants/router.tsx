import { createBrowserRouter } from "react-router-dom";
import ShoppingAppLayout from "../../layout/ShoppingAppLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <ShoppingAppLayout />,
    children: [{}],
  },
]);
