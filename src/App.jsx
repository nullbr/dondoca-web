import { Route, Routes } from "react-router-dom";

import PersistLogin from "./components/Sessions/PersistLogin";
import Layout from "./components/Layout/Layout";
import AdminLayout from "./components/Admin/Layout";

// Pages
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { lazy } from "react";

// Sessions
const Login = lazy(() => import("./components/Sessions/Login"));
const Logout = lazy(() => import("./components/Sessions/Logout"));
const SignUp = lazy(() => import("./components/Sessions/SignUp"));
const EditProfile = lazy(() => import("./components/Sessions/EditProfile"));

// Admin
const AdminHome = lazy(() => import("./components/Admin"));
const RestrictedRoutes = lazy(() =>
  import("./components/Routes/RestrictedRoutes")
);
const Clients = lazy(() => import("./components/Admin/Clients/Clients"));
const Workers = lazy(() => import("./components/Admin/Workers/Workers"));
const Schedules = lazy(() => import("./components/Admin/Schedules/Schedules"));
// Not found
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="logout" element={<Logout />} />
            <Route
              path="edit-profile"
              element={
                <RestrictedRoutes>
                  <EditProfile />
                </RestrictedRoutes>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />}></Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="workers" element={<Workers />} />
            <Route path="clients" element={<Clients />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
