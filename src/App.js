import { useState, useEffect } from "react";
import "./App.css";
import { CalendarHeader, EventModal, Month } from "./components";
import { getMonth } from "./util";
import { useCalendar } from "./context/calendar-context";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, showModal } = useCalendar();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="App">
      <CalendarHeader />
      <Month month={currentMonth} />
      {showModal && <EventModal />}
    </div>
  );
}

export default App;
