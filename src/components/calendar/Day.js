import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useCalendar } from "../../context";

const Day = ({ day }) => {
  const { dispatch, holidayList, userHolidayList } = useCalendar();
  return (
    <div
      className="cell"
      onClick={() => dispatch({ type: "UPDATE_SELECTED_DATE", payload: day })}
    >
      <p className={`text-center`}>{day.format("DD")}</p>

      {[...holidayList, ...userHolidayList]
        .filter((holiday) => holiday.start === day.format("YYYY-MM-DD"))
        .map((h) => (
          <p key={h._id}>{h.title}</p>
        ))}
    </div>
  );
};

export { Day };
