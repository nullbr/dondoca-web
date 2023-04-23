import { useState } from "react";
import { useTranslation } from "react-i18next";

const Filters = ({ workers, workerFilter, handleWorkerFilter }) => {
  const { t } = useTranslation();
  const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentWorker, setCurrentWorker] = useState(null);

  return (
    <>
      <div className="flex items-center">
        <label className="mr-2">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-400 rounded p-1"
        />
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl min800:text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
            isOpen ? "bg-signature-gold" : "bg-gray"
          }`}
        >
          {currentWorker ? currentWorker.firstName : "All"}
        </button>
        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-2xl z-10 bg-white text-center text-xl"
          >
            <div className="p-2">
              {workers.map((worker) => {
                return (
                  <button
                    key={worker.id}
                    onClick={() => {
                      handleWorkerFilter(worker.id);
                      setCurrentWorker(worker);
                    }}
                  >
                    <p className="block px-4 py-2 w-full text-gray hover:text-signature-gold border-b border-signature-gold">
                      {worker.firstName}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
