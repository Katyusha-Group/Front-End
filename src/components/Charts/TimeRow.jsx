import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";

const DayPeriod = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        return (
          <div className="CourseListContainer">
            {entry !== null && (
              // <div className="CourseContainer">
              //   <div className="Course"
              //     style={{ backgroundColor: entry.backgColor }}
              //   >
              //     <div style={{ margin: '5px' }}>
              //       {entry.name}
              //     </div>
              //   </div>
              // </div>
              <div className="exam text-center"
                  onMouseOver={() =>
                (document.getElementById(lessonBoxId + "x").style.display =
                  "block")
                }
                onMouseOut={() =>
                  (document.getElementById(lessonBoxId + "x").style.display =
                    "none")
                }
              >
                {entry.name}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

const TimeRow = ({ periods, ExamT }) => {
    return (
    <>
        <tr className="TableROW">
        <td className="CoursesPanel_column text-center" style = {{fontSize : "x-small"}}>{ExamT}</td>
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
export default TimeRow;