import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";

var weekday = new Array(7);
weekday[0] = "شنبه";
weekday[1] = "یکشنبه";
weekday[2] = "دوشنبه";
weekday[3] = "سه‌شنبه";
weekday[4] = "چهارشنبه";
weekday[5] = "پنج‌شنبه";
weekday[6] = "جمعه";

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

const [hoveredCourse, setHoveredCourse] = React.useState(null);
const handleMouseOver = (event, entry) => {
  document.getElementById(entry.complete_course_number + "x").style.display ="block";
  setHoveredCourse(entry);
  console.log("Hovered Course is: " + hoveredCourse.name)
};

const handleMouseOut = () => {
  document.getElementById(entry.complete_course_number + "x").style.display ="none"
  setHoveredCourse(null);
};


const DayPeriod = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        return (
          <div className="ExamListContainer">
            {entry !== null && (
              <div key={entry.complete_course_number}>
                <div  className="ExamContainer">
                    <div 
                      id = {entry.complete_course_number}
                      className="exam text-center"
                      onMouseOver={(e) => handleMouseOver(e, entry)}
                      onMouseOut={handleMouseOut}
                    >
                        <div>
                          {/* {entry.name} */}
                        {/* <strong title= {entry.name}>{entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..."}</strong> */}
                        <strong title= {entry.name}>
                            {
                              hoveredCourse === entry ?
                              entry.name :
                              entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..."
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






// import React, { useState } from 'react';

// function DayPeriod(Section) {
//   const [hoveredCourse, setHoveredCourse] = useState(null);

//   const handleMouseOver = (event, entry) => {
//     setHoveredCourse(entry);
//   };

//   const handleMouseOut = () => {
//     setHoveredCourse(null);
//   };

//   return (
//     <div>
//       {Object.entries(Section).map(([count, entry]) => {
//         return (
//           <div className="ExamListContainer">
//             {entry !== null && (
//               <div key={entry.complete_course_number}>
//                 <div className="ExamContainer">
//                   <div 
//                     id={entry.complete_course_number}
//                     className="exam text-center"
//                     onMouseOver={(e) => handleMouseOver(e, entry)}
//                     onMouseOut={handleMouseOut}
//                   >
//                     <div>
//                       <strong title={entry.name}>
//                         {entry.name.length < 13 ? entry.name : entry.name.slice(0, 13) + "..."}
//                       </strong>
//                     </div>
//                     <div className="exam_hover" id={entry.complete_course_number + "x"}>
//                       <div className="dir-left">
//                         {entry.complete_course_number}
//                       </div>
//                       <div>
//                         {weekday[parseInt(entry.course_times[0].course_day)]}
//                       </div>
//                       <div>
//                         {timeStringToFloat(entry.exam_times[0].exam_start_time) +
//                           "-" +
//                           timeStringToFloat(entry.exam_times[0].exam_end_time)}
//                       </div>
//                       {hoveredCourse === entry && (
//                         <div>
//                           {entry.name}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   );
// }