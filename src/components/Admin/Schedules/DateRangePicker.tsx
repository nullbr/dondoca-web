import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { useTranslation } from "react-i18next";

type RangeType = {
  startDate: Date;
  endDate: Date;
  key: string;
}[];

const DateRangeComp = () => {
  const { t } = useTranslation();

  // date state
  const [range, setRange] = useState<RangeType>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // hide dropdown on ESC press
    const hideOnEscape = (e: KeyboardEvent) => {
      // console.log(e.key)
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    // Hide on outside click
    const hideOnClickOutside = (e: MouseEvent) => {
      // console.log(refOne.current)
      // console.log(e.target)
      if (refOne.current && !refOne.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      // remove event listeners
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  // fetch Schedules
  function getSchedules() {
    if (open) return;

    // const dateRange = {
    //   startDate: range[0].startDate,
    //   endDate: range[0].endDate,
    // };

    // dispatch(fetchSchedulesAsync(dateRange));
  }

  return (
    <div className="inline-block relative w-full">
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium text-subtitle-gray w-fit mb-2">
          {t("defaults.period")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <input
            value={`${format(range[0].startDate, "dd/MM/yyyy")} ${t(
              "admin.schedule.to"
            )} ${format(range[0].endDate, "dd/MM/yyyy")}`}
            readOnly
            className="w-[20rem] text-center text-gray text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl bg-transparent border-b-2 border-gray"
            onClick={() => setOpen((open) => !open)}
          />
          <button
            type="button"
            onClick={() => getSchedules()}
            className="text-center text-white sm:text-2xl text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl bg-primary hover:bg-gray"
          >
            {t("defaults.apply")}
          </button>
        </div>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            locale={ptBR}
            onChange={(item) => {
              if (item.selection.startDate && item.selection.endDate) {
                const newRange = [
                  {
                    startDate: item.selection.startDate,
                    endDate: item.selection.endDate,
                    key: "selection",
                  },
                ];
                setRange(newRange);
              }
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            rangeColors={["#CBA135", "#3ecf8e", "#fed14c"]}
            className="absolute left-[50%] top-[58px] -translate-x-[50%] z-10"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
