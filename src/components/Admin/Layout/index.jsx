import { Outlet } from "react-router-dom";
import Navbar from "../../Nav/Navbar";
import "./index.css";
import AdminFooter from "../Footer/Footer";
import PrivateRoutes from "../Routes/PrivateRoutes";

const AdminLayout = () => {
  return (
    <>
      <Navbar admin={true} />
      <PrivateRoutes>
        <Outlet />
        <AdminFooter />
      </PrivateRoutes>
    </>
  );
};

export default AdminLayout;
