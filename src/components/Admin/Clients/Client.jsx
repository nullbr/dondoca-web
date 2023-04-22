import { useTranslation } from "react-i18next";
import Form from "./Form";
import { useState } from "react";

const Client = ({ client }) => {
  const {
    id,
    firstName,
    lastName,
    createdAt,
    imageUrl,
    phoneNumber,
    birthday,
  } = client;
  // const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div
        key={id}
        className="border-b-2 border-signature-gold shadow-b-lg flex gap-2 items-center justify-center"
      >
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
          <ul>
            <li>
              <p>Celular: {phoneNumber}</p>
            </li>
            <li>
              <p>Início: {createdAt}</p>
            </li>
            <li>
              <p>Aniversário: {birthday}</p>
            </li>
          </ul>
          {!showForm && (
            <button
              type="button"
              className="bg-gray hover:bg-signature-gold text-white font-bold py-2 px-4 rounded w-[5rem]"
              onClick={() => setShowForm(true)}
            >
              Editar
            </button>
          )}
        </div>
      </div>
      {showForm && <Form client />}
    </div>
  );
};
export default Client;
