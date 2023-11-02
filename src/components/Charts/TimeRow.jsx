import React, { useState } from 'react';
import "./ExamChart.css"
var weekday = new Array(7);
weekday[0] = "شنبه";
weekday[1] = "یکشنبه";
weekday[2] = "دوشنبه";
weekday[3] = "سه‌شنبه";
weekday[4] = "چهارشنبه";
weekday[5] = "پنج‌شنبه";
weekday[6] = "جمعه";

import {timeStringToFloat} from "../../Functions/timeStringToFloat"

function DayPeriod (Input) {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [isHovered, setisHovered] = useState(false);
  // const handleMouseOver = (event, entry) => {
  //   // console.log("Hovered Course is: " + hoveredCourse.name)
  //   document.getElementById(entry.complete_course_number + "x").style.display ="block";
  //   setHoveredCourse(entry);
  // };

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
          <div className="ExamListContainer">
            {entry !== null && (
              <div key={entry.complete_course_number}>
                <div  className="ExamContainer">
                    <div 
                      id = {entry.complete_course_number}
                      // className="Course"
                      className="exam text-center"
                      // onMouseOver={(e) => handleMouseOver(e, entry)}
                      // onMouseOut={(e) => handleMouseOut (e, entry)}
                      onClick={(e) => handleMouseOver(e, entry)}
                    >
                        <div>
                          {/* {entry.name} */}
                        {/* <strong title= {entry.name}>{entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..."}</strong> */}
                          <strong title= {entry.name}>
                              {
                                hoveredCourse === null ?
                                entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..." :
                                entry.name
                              }
                          </strong>
                        </div>
                        <div className="exam_hover" id={entry.complete_course_number + "x"}>
                          <div className="dir-left">
                            {entry.complete_course_number}
                          </div>
                          {/* <div>{entry.teachers[0].map((y)=>(y.name)).join(" , ")}</div> */}
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
        <tr className="TableROW">
        <td className="ExamsTable_column text-center" style = {{fontSize : "x-small"}}>{ExamT}</td>
        {Object.entries(periods).map(([time, entry]) => {
            return (
            <td className="ExamsTable_column2" key={time}>
                {DayPeriod(entry)}
            </td>
            )
        })}
        </tr>
    </>
    );
};
export default TimeRow;