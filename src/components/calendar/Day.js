import { useCalendar } from "../../context";

// Component represents a single day of the month

const Day = ({ day }) => {
  const { dispatch, todaysDate, selectedDate, holidayList, userHolidayList } =
    useCalendar();

  // update selected date when user clicks on a date
  const updateSelectedDate = () => {
    dispatch({ type: "UPDATE_SELECTED_DATE", payload: day });
  };

  const compareDate = (date1, date2) =>
    date1.format("YYYY-MM-DD") === date2.format("YYYY-MM-DD");

  const openModal = (e, holiday) => {
    e.stopPropagation();
    dispatch({ type: "SHOW_MODAL", payload: { status: true, data: holiday } });
    updateSelectedDate(); // update selected date if user clicks on an existing holiday
  };

  return (
    <div
      className={`cell text-center ${
        selectedDate && compareDate(selectedDate, day) ? "selected-date" : ""
      }`}
      onClick={updateSelectedDate}
    >
      <p className={`m-auto ${compareDate(todaysDate, day) ? "today" : ""}`}>
        {day.format("DD")}
      </p>

      {[...holidayList, ...userHolidayList]
        .filter((holiday) => holiday.start === day.format("YYYY-MM-DD"))
        .map((h) => (
          <p
            key={h._id}
            className="holiday text-left mx-auto  cursor-pointer"
            style={{ backgroundColor: h.color }}
            onClick={(e) => openModal(e, h)}
          >
            {h.title}
          </p>
        ))}
    </div>
  );
};

export { Day };
