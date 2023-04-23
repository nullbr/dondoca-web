import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Sessions/Login";
import Logout from "./components/Sessions/Logout";
import SignUp from "./components/Sessions/SignUp";
import Services from "./components/Services";
// import Schedule from "./components/Schedule";
// import Monday from "./components/Schedule/Monday";
// import Tuesday from "./components/Schedule/Tuesday";
// import Wednesday from "./components/Schedule/Wednesday";
// import Thursday from "./components/Schedule/Thursday";
// import Friday from "./components/Schedule/Friday";
// import Saturday from "./components/Schedule/Saturday";
// import Sunday from "./components/Schedule/Sunday";
// import Price from "./Pages/Price";
// import Blog from "./Pages/Blog";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./components/PageNotFound";
import AdminHome from "./components/Admin";
import AdminLayout from "./components/Admin/Layout";
import PersistLogin from "./components/Sessions/PersistLogin";
import EditProfile from "./components/Sessions/EditProfile";
import RestrictedRoutes from "./components/Routes/RestrictedRoutes";
import Clients from "./components/Admin/Clients/Clients";
import Workers from "./components/Admin/Workers/Workers";

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

            {/* <Route path="schedule" element={<Schedule />}>
                <Route path="monday" element={<Monday />} />
                <Route path="tuesday" element={<Tuesday />} />
                <Route path="wednesday" element={<Wednesday />} />
                <Route path="thursday" element={<Thursday />} />
                <Route path="friday" element={<Friday />} />
                <Route path="saturday" element={<Saturday />} />
                <Route path="sunday" element={<Sunday />} />
              </Route> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="workers" element={<Workers />} />
            <Route path="clients" element={<Clients />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
