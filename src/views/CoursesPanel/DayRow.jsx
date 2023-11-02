import DayPeriod from "./DayPeriod";
import * as style from  "./CoursesPanel.module.css";
const DayRow = ({ periods, dayName }) => {
    return (
    <>
      <tr className={style.TableROW}>
      <td className={`${style.CoursesPanel_column} text-center`}>{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
          return (
          <td className={style.CoursesPanel_column2} key={time}>
              {DayPeriod(entry)}
          </td>
          )
      })}
      </tr>
    </>
    );
};
export default DayRow;