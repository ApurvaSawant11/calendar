import "./calendar.css";
import dayjs from "dayjs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useCalendar } from "../../context";
import { toast } from "react-toastify";
import { MdError } from "react-icons/md";

const CalendarHeader = () => {
  const { monthIndex, dispatch, selectedDate } = useCalendar();

  const addHoliday = () => {
    selectedDate
      ? dispatch({ type: "SHOW_MODAL", payload: true })
      : toast.error("Please select a date", {
          icon: <MdError size="2rem" />,
        });
  };

  const moveToCurrentDate = () => {
    dispatch({ type: "CHANGE_MONTH", payload: dayjs().month() });
  };

  return (
    <header className="flex-row-center">
      <button
        className="button inverted-primary mr-1"
        onClick={moveToCurrentDate}
      >
        Today
      </button>
      <h3 className="month-name text-center">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h3>
      <div className="chevron-btn flex-row-center">
        <FiChevronLeft
          size={28}
          onClick={() =>
            dispatch({ type: "CHANGE_MONTH", payload: monthIndex - 1 })
          }
        />
      </div>
      <div className="chevron-btn flex-row-center">
        <FiChevronRight
          size={28}
          onClick={() =>
            dispatch({ type: "CHANGE_MONTH", payload: monthIndex + 1 })
          }
        />
      </div>
      <button className="button primary ml-1" onClick={addHoliday}>
        Add Holiday
      </button>
    </header>
  );
};

export { CalendarHeader };
