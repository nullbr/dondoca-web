import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Services from "./Pages/Services";
import Schedule from "./Pages/Schedule/Schedule";
import Monday from "./Pages/Schedule/Monday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import Thursday from "./Pages/Schedule/Thursday";
import Friday from "./Pages/Schedule/Friday";
import Saturday from "./Pages/Schedule/Saturday";
import Sunday from "./Pages/Schedule/Sunday";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./Pages/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store";
import AdminHome from "./Pages/Admin";
import AdminLayout from "./components/Admin/Layout/Layout";
import PersistLogin from "./components/Admin/Sessions/PersistLogin";
// import Price from "./Pages/Price";
// import Blog from "./Pages/Blog";

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
              {/* <Route path="pricing" element={<Price />} /> */}
              {/* <Route path="blog" element={<Blog />} /> */}

              <Route path="schedule" element={<Schedule />}>
                <Route path="monday" element={<Monday />} />
                <Route path="tuesday" element={<Tuesday />} />
                <Route path="wednesday" element={<Wednesday />} />
                <Route path="thursday" element={<Thursday />} />
                <Route path="friday" element={<Friday />} />
                <Route path="saturday" element={<Saturday />} />
                <Route path="sunday" element={<Sunday />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
