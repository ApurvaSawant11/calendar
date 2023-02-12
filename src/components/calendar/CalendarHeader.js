import "./calendar.css";
import dayjs from "dayjs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const CalendarHeader = () => {
  return (
    <header className="flex-row-center">
      <button className="btn">Today</button>
      <h1 className="month-name">January 2023</h1>
      <div className="chevron-btn flex-row-center">
        <FiChevronLeft size={28} />
      </div>
      <div className="chevron-btn flex-row-center">
        <FiChevronRight size={28} />
      </div>
    </header>
  );
};

export { CalendarHeader };
