import { useTranslation } from "react-i18next";
import Form from "../../Shared/Form";
import { useState } from "react";
import EditButton from "../../Shared/EditButton";

const Client = ({ client }) => {
  const { firstName, lastName, createdAt, imageUrl, phoneNumber, birthday } =
    client;
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="border-b-2 border-signature-gold shadow-b-lg flex gap-2 items-center justify-center">
        <div className="w-[20rem] min620:w-1/2 p-2">
          <img
            src={imageUrl}
            alt="profile"
            className="self-center rounded-full"
          />
        </div>
        <div className="min620:w-1/2 flex flex-col gap-2">
          <h3 className="text-[2.5rem] min620:text-[2rem] font-semibold">
            {firstName} {lastName}
          </h3>
          <ul className="text-xl">
            <li>
              {t("defaults.cellphone")}: {phoneNumber}
            </li>
            <li>
              {t("admin.client.createdAt")}: {createdAt}
            </li>
            <li>
              {t("admin.client.birthday")}: {birthday}
            </li>
          </ul>
          {!showForm && <EditButton action={() => setShowForm(true)} />}
        </div>
      </div>
      {showForm && <Form client />}
    </div>
  );
};
export default Client;
