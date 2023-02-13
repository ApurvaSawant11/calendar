import { useState, useEffect } from "react";
import "./App.css";
import { CalendarHeader, EventModal, Month } from "./components";
import { getMonth } from "./util";
import { useCalendar } from "./context/calendar-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, showModal } = useCalendar();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose="1800"
        limit="2"
        style={{ right: "1em" }}
        icon={false}
      />
      <CalendarHeader />
      <Month month={currentMonth} />
      {showModal.status && <EventModal holiday={showModal.data} />}
    </div>
  );
}

export default App;
