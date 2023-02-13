const paletteColors = [
  "#ffffff",
  "#fc9ae2",
  "#ffbebb",
  "#deb8ff",
  "#91f758",
  "#a7c1f4",
  "#749ef1",
];

const ColorPalette = ({ isEditMode, holidayColor, setHolidayColor }) => {
  return (
    <div className="flex-row-center flex-wrap mb-1 cursor-pointer">
      {paletteColors.map((color, index) => (
        <div
          key={index}
          className={`palette-color-circle ${isEditMode ? "" : "pointer-none"}`}
          style={{
            backgroundColor: color,
            transform: `${holidayColor === color ? "scale(1.2)" : "scale(1)"}`,
            border: `${holidayColor === color ? "2px solid gray" : ""}`,
          }}
          onClick={() => setHolidayColor(color)}
        ></div>
      ))}
    </div>
  );
};

export { ColorPalette };
