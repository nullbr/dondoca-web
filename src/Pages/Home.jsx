import About from "../components/Home/About/About";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
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
      <CtaBanner />
    </>
  );
};

export default Home;
