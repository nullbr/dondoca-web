import { useTranslation } from "react-i18next";
import Form from "../../Shared/Form";
import { useState } from "react";
import EditButton from "../../Shared/EditButton";

const Worker = ({ worker }) => {
  const {
    firstName,
    lastName,
    job,
    createdAt,
    imageUrl,
    instagram,
    phoneNumber,
  } = worker;
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData);
  };

  return (
    <div className="border-b-2 border-signature-gold shadow-b-lg">
      <div className="flex gap-2 items-center">
        <div className="w-[20rem] min800:w-1/3 p-2">
          <img
            src={imageUrl}
            alt="profile"
            className="self-center rounded-full"
          />
        </div>
        <div
          className="min620:w-1/2 flex flex-col gap-2"
          onClick={() => setShowForm(!showForm)}
        >
          <h3 className="text-[2.5rem] min620:text-[2rem] font-semibold">
            {firstName} {lastName}
          </h3>
          <ul>
            <li>
              <p>
                {t("defaults.cellphone")}: {phoneNumber}
              </p>
            </li>
            <li>
              <p>
                {t("admin.worker.job")}: {job}
              </p>
            </li>
            <li>
              <p>
                {t("admin.worker.createAt")}: {createdAt}
              </p>
            </li>
            {instagram && (
              <li>
                <p>
                  {t("defaults.social")}: {instagram}
                </p>
              </li>
            )}
          </ul>
          {!showForm && (
            <EditButton CN="min800:hidden" action={() => setShowForm(true)} />
          )}
        </div>
      </div>
      {showForm && <Form resource={worker} handleSubmit={handleSubmit} />}
    </div>
  );
};
export default Worker;
