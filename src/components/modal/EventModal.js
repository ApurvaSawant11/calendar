import { useCalendar } from "../../context";
import "./modal.css";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

const EventModal = () => {
  const [holidayTitle, setHolidayTitle] = useState("");
  const [holidayDes, setHolidayDes] = useState("");
  const { selectedDate, dispatch } = useCalendar();

  const addHoliday = () => {
    if (holidayTitle) {
      dispatch({
        type: "ADD_HOLIDAY",
        payload: {
          _id: uuid(),
          title: holidayTitle,
          description: holidayDes,
          start: dayjs(selectedDate).format("YYYY-MM-DD"),
        },
      });
      dispatch({ type: "SHOW_MODAL", payload: false });
      setHolidayTitle("");
      setHolidayDes("");
    } else {
    }
  };
  return (
    <div className="event-modal flex-row-center">
      <div className="modal m-1p5 p-1">
        <form
          className="address-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="modal-header  mb-2p5">
            <h6 className="m-0p5">{selectedDate.format("DD MMMM YYYY")}</h6>
            <div className="chevron-btn flex-row-center">
              <IoMdClose
                onClick={() => dispatch({ type: "SHOW_MODAL", payload: false })}
              />
            </div>
          </div>

          <div className="input-field my-2 mx-auto">
            <input
              className="input"
              type="text"
              required
              value={holidayTitle}
              onChange={(e) => setHolidayTitle(e.target.value)}
            />
            <span className="bar"></span>
            <label className="placeholder">Title</label>
          </div>

          <div className="input-field my-2 mx-auto">
            <textarea
              className="input textarea"
              type="text"
              required
              value={holidayDes}
              onChange={(e) => setHolidayDes(e.target.value)}
            ></textarea>
            <span className="bar"></span>
            <label className="placeholder">Description</label>
          </div>

          <div className=" flex-row-center">
            <button
              type="submit"
              onClick={addHoliday}
              className="button primary"
            >
              Add Holiday
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { EventModal };
