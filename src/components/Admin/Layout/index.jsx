import { Outlet } from "react-router-dom";
import Navbar from "../../Nav/Navbar";
import AdminFooter from "../Footer/Footer";
import AdminRoutes from "../../Routes/AdminRoutes";
import { Suspense } from "react";

const AdminLayout = () => {
  return (
    <>
      <Navbar admin={true} />
      <AdminRoutes>
        <Suspense>
          <Outlet />
        </Suspense>
      </AdminRoutes>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
