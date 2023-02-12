import "./calendar.css";
import dayjs from "dayjs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useCalendar } from "../../context";

const CalendarHeader = () => {
  const { monthIndex, dispatch } = useCalendar();

  return (
    <header className="flex-row-center">
      <button className="btn">Today</button>
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
    </header>
  );
};

export { CalendarHeader };
