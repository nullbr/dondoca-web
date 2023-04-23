import { useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "../../Shared/Form";
import EditButton from "../../Shared/EditButton";

function Schedule({ schedule }) {
  const { startAtTime, endAtTime, client, worker } = schedule;

  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Schedule */}
      <div className="grid grid-cols-5 min620:grid-cols-2 gap-2 p-5 mt-5 bg-[#f2f2f2] justify-between w-full min800:text-center rounded-2xl">
        {/* time */}
        <div className="">
          <p className="text-[14px] font-medium text-[#a0a0a0]">
            {t("admin.schedule.time")}
          </p>
          <p className="text-[18px] text-black font-bold mt-3">
            {startAtTime} - {endAtTime}
          </p>
        </div>
        {/* service name */}
        <div className="">
          <p className="text-[14px] font-medium text-[#a0a0a0]">
            {t("admin.schedule.service")}
          </p>
          <p className="text-[18px] text-black font-bold mt-3">Add Service</p>
        </div>
        {/* professional */}
        <div className="">
          <p className="text-[14px] font-medium text-[#a0a0a0]">
            {t("admin.schedule.professional")}
          </p>
          <p className="text-[18px] text-black font-bold mt-3">
            {worker.firstName} {worker.lastName}
          </p>
        </div>
        {/* Client */}
        <div className="">
          <p className="text-[14px] font-medium text-[#a0a0a0]">
            {t("admin.schedule.client")}
          </p>
          <p className="text-[18px] text-black font-bold mt-3">
            {client.firstName} {client.lastName}
          </p>
        </div>

        <div className="min620:col-span-2 min620:justify-center items-center flex justify-end">
          {!showForm && <EditButton action={() => setShowForm(true)} />}
        </div>
      </div>

      {showForm && <Form />}
    </>
  );
}

export default Schedule;
