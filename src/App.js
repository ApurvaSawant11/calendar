import { useState } from "react";
import "./App.css";
import { CalendarHeader, Month } from "./components";
import { getMonth } from "./util";

function App() {
  const [month, setMonth] = useState(getMonth());
  return (
    <div className="App">
      <CalendarHeader />
      <Month month={month} />
    </div>
  );
}

export default App;
