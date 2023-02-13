import dayjs from "dayjs";

export const initialReducerData = {
  monthIndex: dayjs().month(),
  showModal: { status: false, data: null },
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
        selectedDate: null,
      };

    case "UPDATE_SELECTED_DATE":
      return { ...state, selectedDate: action.payload };

    case "ADD_HOLIDAY":
      const updatedList = [...state.userHolidayList, action.payload];
      localStorage.setItem("holidays", JSON.stringify(updatedList));
      return { ...state, userHolidayList: updatedList };

    case "UPDATE_HOLIDAY":
      let updatedList2;
      if (action.payload.type === "public") {
        updatedList2 = state.holidayList.map((holiday) => {
          if (holiday._id === action.payload._id) {
            return action.payload;
          } else {
            return holiday;
          }
        });
        return { ...state, holidayList: updatedList2 };
      } else {
        updatedList2 = state.userHolidayList.map((holiday) => {
          if (holiday._id === action.payload._id) {
            return action.payload;
          } else {
            return holiday;
          }
        });
        return { ...state, userHolidayList: updatedList2 };
      }

    case "DELETE_HOLIDAY":
      let updatedList3;
      if (action.payload.type === "public") {
        updatedList3 = state.holidayList.filter(
          (holiday) => holiday._id !== action.payload._id
        );
        return { ...state, holidayList: updatedList3 };
      } else {
        updatedList3 = state.userHolidayList.filter(
          (holiday) => holiday._id !== action.payload._id
        );
        return { ...state, userHolidayList: updatedList3 };
      }

    case "SHOW_MODAL":
      return { ...state, showModal: action.payload };

    default:
      throw new Error("Error in Calendar Reducer");
  }
};
