import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsAsync } from "../../../features/clients/clientSlice";
import Statuses from "../../../features/Statuses";
import Loader from "../../Shared/Loader";
import PagesHeader from "../../Shared/PagesHeader";
import { PAGE_HEADER_Y } from "../../../lib/constants";
import { setScrollY } from "../../../features/navbar/navbarSlice";
import { useTranslation } from "react-i18next";
import Dashboard from "../Dashboard";
import Client from "./Client";

const Clients = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { clients, status } = useSelector((store) => store.clients);

  useEffect(() => {
    document.title = t("admin.nav.clients") + " - " + t("defaults.pageTitle");
    dispatch(setScrollY(PAGE_HEADER_Y));

    if (status === Statuses.Initial) {
      dispatch(fetchClientsAsync());
    }
  }, []);

  return (
    <>
      <PagesHeader pageTitle={t("admin.nav.clients")} />

      <Dashboard>
        {status !== Statuses.UpToDate ? (
          <Loader />
        ) : (
          <>
            {/* Form goes here */}
            {clients &&
              clients.length > 0 &&
              clients.map((client) => {
                return <Client key={client.id} client={client} />;
              })}
          </>
        )}
      </Dashboard>
    </>
  );
};

export default Clients;
