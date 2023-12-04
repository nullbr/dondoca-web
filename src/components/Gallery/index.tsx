import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_HEADER_Y } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { setScrollY } from "../../features/navbar/navbarSlice";
import PagesHeader from "../Shared/PagesHeader";
const Images = lazy(() => import("./Images"));

const Gallery = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.gallery") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <section className="relative">
        <PagesHeader pageTitle={t("nav.gallery")} />

        <Suspense>
          <Images />
        </Suspense>
      </section>
    </>
  );
};

export default Gallery;
