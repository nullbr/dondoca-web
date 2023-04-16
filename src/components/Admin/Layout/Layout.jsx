import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import "./Layout.css";
import AdminFooter from "../Footer/Footer";
import PrivateRoutes from "../Routes/PrivateRoutes";

const AdminLayout = () => {
  return (
    <>
      <PrivateRoutes>
        <Navbar />
        <Outlet />
        <AdminFooter />
      </PrivateRoutes>
    </>
  );
};

export default AdminLayout;
