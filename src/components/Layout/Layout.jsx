import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import UtilityBtn from "./UtilityBtn";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <UtilityBtn />
      <Footer />
    </>
  );
};

export default Layout;
