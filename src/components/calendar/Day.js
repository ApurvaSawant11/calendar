import { useCalendar } from "../../context";

const Day = ({ day }) => {
  const { dispatch, todaysDate, selectedDate, holidayList, userHolidayList } =
    useCalendar();

  const compareDate = (date1, date2) =>
    date1.format("YYYY-MM-DD") === date2.format("YYYY-MM-DD");

  return (
    <div
      className={`cell text-center ${
        selectedDate && compareDate(selectedDate, day) ? "selected-date" : ""
      }`}
      onClick={() => dispatch({ type: "UPDATE_SELECTED_DATE", payload: day })}
    >
      <p className={`m-auto ${compareDate(todaysDate, day) ? "today" : ""}`}>
        {day.format("DD")}
      </p>

      {[...holidayList, ...userHolidayList]
        .filter((holiday) => holiday.start === day.format("YYYY-MM-DD"))
        .map((h) => (
          <p
            key={h._id}
            className="holiday text-left mx-auto"
            style={{ backgroundColor: h.color }}
          >
            {h.title}
          </p>
        ))}
    </div>
  );
};

export { Day };
