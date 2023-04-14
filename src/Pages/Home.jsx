import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";
import { useEffect } from "react";
import { Global } from "../context/GlobalContext";

const Home = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("defaults.pageTitle");
    setScrollY(window.innerHeight - 90);
  });

  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Pricing />
      <Blog />
      <CtaBanner />
    </>
  );
};

export default Home;
