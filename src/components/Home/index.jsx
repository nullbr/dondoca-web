import About from "./About/About";
import ChooseUs from "./ChooseUs/ChooseUs";
import CtaBanner from "./CtaBanner/CtaBanner";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";

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
      <Featured t={t} />
      <ChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default Home;
