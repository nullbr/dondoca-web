import "./Layout.css";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import UtilityBtn from "./UtilityBtn";
const Navbar = lazy(() => import("../Nav/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));

const Layout = () => {
  // const loadingContent = (
  //   <div className="loading-bg min-h-screen flex justify-center items-center">
  //     <Loader />
  //   </div>
  // );

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
