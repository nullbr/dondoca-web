import "./Layout.css";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import UtilityBtn from "./UtilityBtn";
const Navbar = lazy(() => import("../Nav/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));

const Layout = () => {
  return (
    <>
      <Suspense>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
      <UtilityBtn />
    </>
  );
};

export default Layout;
