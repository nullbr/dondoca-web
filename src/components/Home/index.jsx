import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollY } from "../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";

import Hero from "./Hero/Hero";
const About = lazy(() => import("./About/About"));
const ChooseUs = lazy(() => import("./ChooseUs/ChooseUs"));
const Featured = lazy(() => import("../Services/Featured"));

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
      <Suspense>
        <About />
        <Featured t={t} />
        <ChooseUs />
      </Suspense>
    </>
  );
};

export default Home;
