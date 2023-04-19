import About from "./About/About";
// import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";

const Home = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("defaults.pageTitle");
    setScrollY(window.innerHeight - 80);
  });

  return (
    <>
      <Hero />
      <About />
      <Featured t={t} />
      {/* <ChooseUs /> */}
    </>
  );
};

export default Home;
