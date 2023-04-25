import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { dateLocales } from "./dateLocales";

const DatePicker = () => {
  // set current date for default calendar value
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return { year, month, day };
  };

  const currentDate = getCurrentDate();

  const defaultRange = {
    from: currentDate,
    to: currentDate,
  };

  // set state values
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  const [openCalendar, setOpenCalendar] = useState(false);

  // format selected date as string
  function getDateRangeString() {
    const from = {
      day: selectedDayRange.from.day.toString().padStart(2, "0"),
      month: selectedDayRange.from.month.toString().padStart(2, "0"),
      year: selectedDayRange.from.year,
    };

    if (!selectedDayRange.to || selectedDayRange.from === selectedDayRange.to) {
      return `${from.day}/${from.month}/${from.year}`;
    }

    const to = {
      day: selectedDayRange.to.day.toString().padStart(2, "0"),
      month: selectedDayRange.to.month.toString().padStart(2, "0"),
      year: selectedDayRange.to.year,
    };
    return `${from.day}/${from.month}/${from.year} - ${to.day}/${to.month}/${to.year}`;
  }

  const [stringDate, setStringDate] = useState(getDateRangeString());

  // handle date filter
  function handleDate() {
    setStringDate(getDateRangeString());
    setOpenCalendar(false);
  }

  // Apply date button
  const applyBtn = (
    <div className="w-full h-[5rem]">
      <button
        type="button"
        onClick={() => handleDate()}
        className="text-2xl min800:text-xl font-bold ease-in duration-200 hover:shadow-2xl text-white w-[80%] h-[3.5rem] rounded-full bg-gray"
      >
        Aplicar
      </button>
    </div>
  );

  // handle outside click to close calendar
  const handleOutsideClick = (event) => {
    const calendar = document.querySelector(".Calendar");

    if (!calendar.contains(event.target)) {
      setOpenCalendar(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenCalendar(!openCalendar)}
        onMouseEnter={() => setOpenCalendar(!openCalendar)}
        className={`text-2xl min800:text-xl font-bold px-8 py-3 rounded-full ease-in duration-200 hover:shadow-2xl text-white ${
          openCalendar ? "bg-signature-gold" : "bg-gray"
        }`}
      >
        {stringDate}
      </button>

      <div
        hidden={!openCalendar}
        className="absolute left-0 mt-2 w-48 rounded-md shadow-2xl z-10 bg-white text-center text-xl"
      >
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
          locale={dateLocales}
          colorPrimary="#CBA135"
          renderFooter={() => applyBtn}
        />
      </div>
    </div>
  );
};

export default DatePicker;
