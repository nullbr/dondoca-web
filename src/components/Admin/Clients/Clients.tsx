import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../Shared/Loader";
import PagesHeader from "../../Shared/PagesHeader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";
import Dashboard from "../Dashboard";
import Client from "./Client";
import { ClientParams } from "../../../types/client";
import { useGetClients } from "../../../hooks/Clients/queries";

const Clients = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, isFetching } = useGetClients();
  const clients = data?.clients;

  useEffect(() => {
    document.title = t("admin.nav.clients") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));
  }, [dispatch, t]);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.clients")} />

      <Dashboard>
        {isFetching === true ? (
          <Loader />
        ) : (
          <>
            {/* Form goes here */}
            {clients &&
              clients.length > 0 &&
              clients.map((client: ClientParams) => {
                return <Client key={client.id} client={client} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
};

export default Clients;
