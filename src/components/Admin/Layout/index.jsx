import { Outlet } from "react-router-dom";
import Navbar from "../../Nav/Navbar";
import "./index.css";
import AdminFooter from "../Footer/Footer";
import AdminRoutes from "../../Routes/AdminRoutes";

const AdminLayout = () => {
  return (
    <>
      <Navbar admin={true} />
      <AdminRoutes>
        <Outlet />
        <AdminFooter />
      </AdminRoutes>
    </>
  );
};

export default AdminLayout;
