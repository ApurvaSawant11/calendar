import dayjs from "dayjs";

export const initialReducerData = {
  monthIndex: dayjs().month(),
};

export const calendarReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MONTH":
      return { ...state, monthIndex: action.payload };

    default:
      throw new Error("Error in Calendar Reducer");
  }
};
