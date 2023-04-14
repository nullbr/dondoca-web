import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import "./Layout.css";
import AdminFooter from "../Footer/Footer";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
