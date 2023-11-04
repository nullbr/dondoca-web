import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";
import Featured from "./Featured";

const Services = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.services") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <section>
      <PagesHeader pageTitle={t("nav.services")} />

      <Featured t={t} />
    </section>
  );
};

export default Services;
