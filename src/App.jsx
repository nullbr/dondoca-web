import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Sessions/Login";
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
import AdminLayout from "./components/Admin/Layout/Layout";
import PersistLogin from "./components/Sessions/PersistLogin";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
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
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
