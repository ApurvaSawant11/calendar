import { useCalendar } from "context";
import "./modal.css";
import { IoMdClose } from "react-icons/io";
import { MdError, MdModeEdit, MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { ColorPalette } from "components";

const EventModal = ({ holiday }) => {
  const [holidayTitle, setHolidayTitle] = useState(holiday?.title);
  const [holidayDes, setHolidayDes] = useState(holiday?.description);
  const [holidayColor, setHolidayColor] = useState(
    holiday?.color ? holiday.color : "#deb8ff"
  );
  const [isEditMode, setIsEditMode] = useState(holiday ? false : true);
  const { selectedDate, dispatch } = useCalendar();

  const holidayHandler = (type, payload) => {
    if (holidayTitle) {
      dispatch({ type: type, payload: payload });
      dispatch({ type: "SHOW_MODAL", payload: { status: false, data: null } });
      setHolidayTitle("");
      setHolidayDes("");
    } else {
      toast.error("Please enter title", {
        icon: <MdError size="2rem" />,
      });
    }
  };

  const deleteHoliday = () => {
    dispatch({ type: "DELETE_HOLIDAY", payload: holiday });
    dispatch({ type: "SHOW_MODAL", payload: { status: false, data: null } });
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
            <div className="flex-row-center">
              {holiday !== null && (
                <div className="flex-row-center">
                  <div className="chevron-btn flex-row-center mr-1">
                    <MdDeleteOutline onClick={deleteHoliday} />
                  </div>

                  <div className="chevron-btn flex-row-center mr-1">
                    <MdModeEdit onClick={() => setIsEditMode(true)} />
                  </div>
                </div>
              )}
              <div className="chevron-btn flex-row-center">
                <IoMdClose
                  onClick={() =>
                    dispatch({ type: "SHOW_MODAL", payload: false })
                  }
                />
              </div>
            </div>
          </div>

          <div className="input-field my-2 mx-auto">
            <input
              className={`input ${isEditMode ? "" : "opacity-60"}`}
              type="text"
              required
              readOnly={!isEditMode}
              value={holidayTitle}
              onChange={(e) => setHolidayTitle(e.target.value)}
            />
            <span className="bar"></span>
            <label className="placeholder">Title</label>
          </div>

          <div className="input-field my-2 mx-auto">
            <textarea
              className={`input textarea ${isEditMode ? "" : "opacity-60"}`}
              type="text"
              required
              readOnly={!isEditMode}
              value={holidayDes}
              onChange={(e) => setHolidayDes(e.target.value)}
            ></textarea>
            <span className="bar"></span>
            <label className="placeholder">Description</label>
          </div>

          <ColorPalette
            isEditMode={isEditMode}
            holidayColor={holidayColor}
            setHolidayColor={setHolidayColor}
          />

          <div className=" flex-row-center">
            <button
              type="submit"
              onClick={() =>
                holiday
                  ? holidayHandler("UPDATE_HOLIDAY", {
                      ...holiday,
                      title: holidayTitle,
                      description: holidayDes,
                      color: holidayColor,
                    })
                  : holidayHandler("ADD_HOLIDAY", {
                      _id: uuid(),
                      title: holidayTitle,
                      description: holidayDes,
                      start: dayjs(selectedDate).format("YYYY-MM-DD"),
                      color: holidayColor,
                      type: "user",
                    })
              }
              className={`button primary ${isEditMode ? "" : "disabled"}`}
            >
              {holiday ? "Update Holiday" : "Add Holiday"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { EventModal };
