import { useContext, createContext, useReducer } from "react";
import {
  calendarReducer,
  initialReducerData,
} from "../reducers/calendarReducer";

const CalendarContext = createContext({
  state: initialReducerData,
  dispatch: () => {},
});

const CalendarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calendarReducer, initialReducerData);
  const value = {
    monthIndex: state.monthIndex,
    dispatch: dispatch,
  };
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendar = () => useContext(CalendarContext);

export { useCalendar, CalendarProvider };
