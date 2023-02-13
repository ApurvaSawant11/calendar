import "./calendar.css";
import dayjs from "dayjs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useCalendar } from "../../context";

const CalendarHeader = () => {
  const { monthIndex, dispatch } = useCalendar();

  const addHoliday = () => {
    dispatch({ type: "SHOW_MODAL", payload: true });
  };

  return (
    <header className="flex-row-center">
      <button className="button primary">Today</button>
      <h1 className="month-name">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h1>
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
      <button className="button primary" onClick={addHoliday}>
        Add Holiday
      </button>
    </header>
  );
};

export { CalendarHeader };
