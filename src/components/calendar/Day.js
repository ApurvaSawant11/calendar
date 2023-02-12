const Day = ({ day }) => {
  return (
    <div className="cell">
      <p className={`text-center`}>{day.format("DD")}</p>
    </div>
  );
};

export { Day };
