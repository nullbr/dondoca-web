import About from "./About/About";
// import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
import { Global } from "../../context/GlobalContext";
import Reviews from "./Reviews";

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
      {/* <ChooseUs /> */}
      <Reviews t={t} />
    </>
  );
};

export default Home;
