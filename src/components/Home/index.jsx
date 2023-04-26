import About from "./About/About";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollY } from "../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = t("defaults.pageTitle");
    setScrollY(window.innerHeight - 80);
    dispatch(setScrollY(window.innerHeight - 80));
  }, [dispatch, t]);

  return (
    <>
      <Hero />
      <About />
      <Featured t={t} />
      <ChooseUs />
    </>
  );
};

export default Home;
