import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";

const DayPeriod = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        return (
          <div className="CourseListContainer">
            {entry !== null && (
              <div key={entry.complete_course_number}>
                <div>
                    <div
                      id = {entry.complete_course_number}
                      className="exam text-center"
                      onMouseOver={() =>
                        (document.getElementById(entry.complete_course_number + "x").style.display =
                          "block")
                      }
                      onMouseOut={() =>
                        (document.getElementById(entry.complete_course_number + "x").style.display =
                          "none")
                      }
                    >
                        <div>{entry.name}</div>
                        <div className="exam_hover" id={entry.complete_course_number + "x"}>
                          <div className="dir-left">{entry.complete_course_number}</div>
                          <div>{entry.teacher.name}</div>
                          <div>
                            {weekday[parseInt(entry.course_times[0].course_day)]}
                          </div>
                          <div>
                            {timeStringToFloat(entry.exam_times[0].exam_start_time) +
                              "-" +
                              timeStringToFloat(entry.exam_times[0].exam_end_time)}
                          </div>
                        </div>
                    </div>
                </div>
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