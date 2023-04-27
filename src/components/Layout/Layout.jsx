import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import UtilityBtn from "./UtilityBtn";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Suspense } from "react";
import Loader from "../Shared/Loader";

const Layout = () => {
  const loadingContent = (
    <div className="loading-bg min-h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
  return (
    <>
      <Navbar />
      <Suspense fallback={loadingContent}>
        <Outlet />
      </Suspense>
      <UtilityBtn />
      <Footer />
    </>
  );
};

export default Layout;
