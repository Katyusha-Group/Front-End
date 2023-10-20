import DayPeriod from "./DayPeriod";

const DayRow = ({ periods, dayName }) => {
    return (
    <>
      <tr className="TableROW">
      <td className="CoursesPanel_column text-center">{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
          return (
          <td className="CoursesPanel_column2" key={time}>
              {DayPeriod(entry)}
          </td>
          )
      })}
      </tr>
    </>
    );
};
export default DayRow;