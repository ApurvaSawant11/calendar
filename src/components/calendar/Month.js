import { Day } from "./Day";

const Month = ({ month }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="month-container">
      <div className="week-days-row">
        {days.map((d, index) => (
          <p className="day text-center m-0 py-0p5" key={index}>
            {d.toUpperCase()}
          </p>
        ))}
      </div>
      {month.map((row, idx) => (
        <div className="week-dates-row" key={idx}>
          {row.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </div>
      ))}
    </div>
  );
};

export { Month };
