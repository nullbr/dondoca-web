import { useTranslation } from "react-i18next";
import { useState } from "react";
import EditButton from "../../Shared/EditButton";
import { ClientParams } from "../../../types/client";
import MissingImg from "../../../assets/images/missing.png";

const Client = ({ client }: { client: ClientParams }) => {
  const {
    first_name,
    last_name,
    created_at,
    image_url,
    phone_number,
    birth_date,
  } = client;
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="border-b-2 border-primary shadow-b-lg flex gap-2 items-center justify-center">
        <div className="sm:w-[20rem] w-1/2 p-2">
          <img
            src={image_url || MissingImg}
            alt="profile"
            className="self-center rounded-full"
          />
        </div>
        <div className="sm:w-1/2 flex flex-col gap-2">
          <h3 className="sm:text-[2.5rem] text-[2rem] font-semibold">
            {first_name} {last_name}
          </h3>
          <ul className="text-xl">
            <li>
              {t("defaults.cellphone")}: {phone_number}
            </li>
            <li>
              {t("admin.client.created_at")}: {created_at}
            </li>
            <li>
              {t("admin.client.birth_date")}: {birth_date}
            </li>
          </ul>
          {!showForm && <EditButton action={() => setShowForm(true)} />}
        </div>
      </div>
      {showForm}
    </div>
  );
};
export default Client;
