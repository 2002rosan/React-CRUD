import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const ShoppingAppLayout = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
};

export default ShoppingAppLayout;
