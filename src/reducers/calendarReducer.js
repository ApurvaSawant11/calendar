import dayjs from "dayjs";

export const initialReducerData = {
  monthIndex: dayjs().month(),
  showModal: false,
  selectedDate: dayjs(),
  holidayList: [],
  userHolidayList: JSON.parse(localStorage.getItem("holidays")) ?? [],
  holidaysOfTheMonth: [],
  todaysDate: dayjs(),
};

export const calendarReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_HOLIDAYS":
      return { ...state, holidayList: action.payload };

    case "CHANGE_MONTH":
      return {
        ...state,
        monthIndex: action.payload,
      };

    case "UPDATE_SELECTED_DATE":
      return { ...state, selectedDate: action.payload };

    case "ADD_HOLIDAY":
      const updatedList = [...state.userHolidayList, action.payload];
      localStorage.setItem("holidays", JSON.stringify(updatedList));
      return { ...state, userHolidayList: updatedList };

    case "SHOW_MODAL":
      return { ...state, showModal: action.payload };

    default:
      throw new Error("Error in Calendar Reducer");
  }
};
