import { useState } from "react";
import { useTranslation } from "react-i18next";
// import Form from "../../Shared/Form";
import EditButton from "../../Shared/EditButton";
import { ScheduleParams } from "../../../types/schedule";

function Schedule({ schedule }: { schedule: ScheduleParams }) {
  const { start_at_time, end_at_time, client, worker } = schedule;

  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-[#f2f2f2] w-full text-center sm:text-left rounded-2xl">
      {/* time mobile */}
      <p className="sm:hidden block text-lg text-primary font-bold -mb-2">
        {start_at_time} - {end_at_time}
      </p>
      {/* Schedule */}
      <div
        onClick={() => setShowForm(!showForm)}
        className="flex p-5 justify-between"
      >
        {/* time web */}
        <div className="hidden sm:block">
          <p className="text-lg font-medium text-subtitle-gray">
            {t("admin.schedule.time")}
          </p>
          <p className="text-2xl text-primary font-bold mt-3">
            {start_at_time} - {end_at_time}
          </p>
        </div>
        {/* service name */}
        <div>
          <p className="text-lg font-medium text-subtitle-gray">
            {t("admin.schedule.service")}
          </p>
          <p className="text-2xl text-black font-bold mt-3">Add Service</p>
        </div>
        {/* professional */}
        <div>
          <p className="text-lg font-medium text-subtitle-gray">
            {t("admin.schedule.professional")}
          </p>
          <p className="text-2xl text-black font-bold mt-3">
            {worker.first_name} {worker.last_name}
          </p>
        </div>
        {/* Client */}
        <div>
          <p className="text-lg font-medium text-subtitle-gray">
            {t("admin.schedule.client")}
          </p>
          <p className="text-2xl text-black font-bold mt-3">
            {client.first_name} {client.last_name}
          </p>
        </div>

        <div className="hidden justify-center items-center sm:flex sm:justify-end">
          {!showForm && <EditButton action={() => setShowForm(true)} />}
        </div>
      </div>

      {/* {showForm && <Form />} */}
    </div>
  );
}

export default Schedule;
