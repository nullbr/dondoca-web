import { Link } from "react-router-dom";

function Schedule({ schedule }) {
  const { startAtTime, endAtTime, client, worker } = schedule;

  return (
    <>
      {/* Schedule */}
      <div className="flex flex-col gap-3 p-5 mt-10 bg-[#f2f2f2] justify-between w-full min800:flex-col min800:text-center">
        {/* class name */}
        <div className="px-[55px] w-full">
          <p className="text-[14px] font-medium text-[#a0a0a0]">Serviço</p>
          <p className="text-[18px] text-black font-bold mt-3">Add Service</p>
        </div>
        {/* time */}
        <div className="w-full text-center">
          <p className="text-[14px] font-medium text-[#a0a0a0]">Horário</p>
          <p className="text-[18px] text-black font-bold mt-3">
            {startAtTime} - {endAtTime}
          </p>
        </div>
        {/* professional */}
        <div className="w-full text-center">
          <p className="text-[14px] font-medium text-[#a0a0a0]">Profissional</p>
          <p className="text-[18px] text-black font-bold mt-3">
            {worker.firstName} {worker.lastName}
          </p>
        </div>
        {/* Client */}
        <div className="w-full text-center">
          <p className="text-[14px] font-medium text-[#a0a0a0]">Cliente</p>
          <p className="text-[18px] text-black font-bold mt-3">
            {client.firstName} {client.lastName}
          </p>
        </div>
        <div className="px-[55px] w-full  min800:justify-center items-center flex justify-end">
          <Link
            to="/admin"
            className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-signature-gold ease-in duration-200  "
          >
            Alterar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Schedule;
