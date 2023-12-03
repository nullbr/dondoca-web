import { useTranslation } from "react-i18next";
// import Form from "../../Shared/Form";
import { useState } from "react";
import EditButton from "../../Shared/EditButton";
import { WorkerParams } from "../../../types/worker";

const Worker = ({ worker }: { worker: WorkerParams }) => {
  const {
    first_name,
    last_name,
    job,
    created_at,
    image_url,
    instagram,
    phone_number,
  } = worker;
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const entries = Object.fromEntries(formData);
  // };

  return (
    <div className="border-b-2 border-primary shadow-b-lg">
      <div className="flex gap-2 items-center">
        <div className="sm:w-[20rem] w-1/3 p-2">
          <img
            src={image_url}
            alt="profile"
            className="self-center rounded-full"
          />
        </div>
        <div
          className="w-1/2 sm:w-fit flex flex-col gap-2"
          onClick={() => setShowForm(!showForm)}
        >
          <h3 className="sm:text-[2.5rem] text-[2rem] font-semibold">
            {first_name} {last_name}
          </h3>
          <ul>
            <li>
              <p>
                {t("defaults.cellphone")}: {phone_number}
              </p>
            </li>
            <li>
              <p>
                {t("admin.worker.job")}: {job}
              </p>
            </li>
            <li>
              <p>
                {t("admin.worker.createAt")}: {created_at}
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
            <EditButton CN="hidden sm:block" action={() => setShowForm(true)} />
          )}
        </div>
      </div>
      {/* {showForm && <Form resource={worker} handleSubmit={handleSubmit} />} */}
    </div>
  );
};
export default Worker;
