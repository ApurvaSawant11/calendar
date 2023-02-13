import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/en.indian%23holiday%40group.v.calendar.google.com/events?key=${process.env.REACT_APP_API_KEY}`
      );
      const indianHolidays = data.items.reduce(
        (acc, curr) => [
          ...acc,
          {
            _id: curr.id,
            title: curr.summary,
            start: curr.start.date,
            end: curr.end.date,
            description: curr.description,
          },
        ],
        []
      );

      dispatch({
        type: "INITIALIZE_HOLIDAYS",
        payload: indianHolidays,
      });
    })();
  }, []);

  const value = {
    monthIndex: state.monthIndex,
    showModal: state.showModal,
    selectedDate: state.selectedDate,
    holidayList: state.holidayList,
    userHolidayList: state.userHolidayList,
    holidaysOfTheMonth: state.holidaysOfTheMonth,
    todaysDate: state.todaysDate,
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
