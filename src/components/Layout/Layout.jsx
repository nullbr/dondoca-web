import { Suspense, lazy } from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("../Nav/Navbar"));
const UtilityBtn = lazy(() => import("./UtilityBtn"));
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
        <UtilityBtn />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
