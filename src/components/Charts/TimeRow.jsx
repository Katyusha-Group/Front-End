import React, { useState } from 'react';
import * as style from "./ExamChart.module.css"
var weekday = new Array(7);
weekday[0] = "شنبه";
weekday[1] = "یکشنبه";
weekday[2] = "دوشنبه";
weekday[3] = "سه‌شنبه";
weekday[4] = "چهارشنبه";
weekday[5] = "پنج‌شنبه";
weekday[6] = "جمعه";
import { timeStringToFloat } from '../../global/functions';


function DayPeriod (Input) {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [isHovered, setisHovered] = useState(false);

  const handleMouseOver = (event, entry) => {
    if (isHovered)
    {
      document.getElementById(entry.complete_course_number + "x").style.display ="none";
      setHoveredCourse(null);
      setisHovered(false);
    }
    else
    {
      document.getElementById(entry.complete_course_number + "x").style.display ="block";
      setHoveredCourse(entry);
      setisHovered(true);
    }
  };

  const handleMouseOut = (event, entry) => {
    document.getElementById(entry.complete_course_number + "x").style.display ="none";
    setHoveredCourse(null);
  };

  return (
    <div>
      {Object.entries(Input).map(([count, entry]) => {
        return (
          <div className={style.ExamListContainer}>
            {entry !== null && (
              <div key={entry.complete_course_number}>
                <div  className={style.ExamContainer}>
                    <div 
                      id = {entry.complete_course_number}
                      className={`${style.exam} text-center`}
                      onClick={(e) => handleMouseOver(e, entry)}
                    >
                        <div>
                          <strong title= {entry.name}>
                              {
                                hoveredCourse === null ?
                                entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..." :
                                entry.name
                              }
                          </strong>
                        </div>
                        <div className={style.exam_hover} id={entry.complete_course_number + "x"}>
                          <div className="dir-left">
                            {entry.complete_course_number}
                          </div>
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
}


const TimeRow = ({ periods, ExamT }) => {
    return (
    <>
        <tr className={style.TableROW}>
        <td className={`${style.ExamsTable_column} text-center`} style = {{fontSize : "x-small"}}>{ExamT}</td>
        {Object.entries(periods).map(([time, entry]) => {
            return (
            <td className={style.ExamsTable_column2} key={time}>
                {DayPeriod(entry)}
            </td>
            )
        })}
        </tr>
    </>
    );
};
export default TimeRow;