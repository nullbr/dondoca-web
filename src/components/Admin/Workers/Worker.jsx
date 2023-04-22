import { useTranslation } from "react-i18next";
import Form from "./Form";
import { useState } from "react";

const Worker = ({ worker }) => {
  const {
    id,
    firstName,
    lastName,
    job,
    createdAt,
    imageUrl,
    instagram,
    phoneNumber,
  } = worker;
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
              <p>Prática: {job}</p>
            </li>
            <li>
              <p>Início: {createdAt}</p>
            </li>
            {instagram && (
              <li>
                <p>Instagram: {instagram}</p>
              </li>
            )}
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
      {showForm && <Form worker />}
    </div>
  );
};
export default Worker;
