import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import MessageBtn from "../MessageBtn/MessageBtn";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MessageBtn />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
