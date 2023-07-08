import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import { containsWhitespace } from "./CoursesPanel_Functions";

// Token
// const tokenJson = localStorage.getItem("authTokens");
// const tokenClass = JSON.parse(tokenJson);
// const token = tokenClass.token.access;

function DayPeriod (Input) {
  const [showLesson, setShowLesson] = React.useState({
    flag: false,
    data: {},
  });
  const [modalData, setModalData] = React.useState(
    []
  );
  function apiForModalData(x ,showOrNot){
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    showLoading();
    console.log(x);
    fetch(`https://www.katyushaiust.ir/courses/${x}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then((response) => response.json())
    .then((d) => {
      console.log(d);
      setModalData(d);
      if(showOrNot){
        setShowLesson({ flag: true, data: d })
      }
      
    });
    
    
    // const data = await response.json();
    
   }

  return (
    <div>
      {Object.entries(Input).map(([count, entry]) => {
        return (
          <div className="CourseListContainer">
            {entry !== null && (
              <div className="CourseContainer">
                <div className="Course"
                  style={{ backgroundColor: entry.backgColor, fontSize: containsWhitespace(entry.name) ? "x-small" : "xx-small" }}
                  // onClick={() => apiForModalData(entry.complete_course_number, true)}
                >
                  {/* <div style={{ margin: '5px' }}>
                    {entry.name} ({entry.class_gp})
                  </div> */}
                  <div title= {entry.name}>
                    {entry.name.length < 17 ? entry.name : entry.name.slice(0, 17) + "..."} ({entry.class_gp})
                  </div>
                </div>
                <button className="btn-fill-AddCourseButton"
                  name="AddOrRemoveCourseButton"
                  style={{ backgroundColor: (entry.IsChosen) ? "rgb(233,87,104)" : "rgb(0, 191, 255)"}}
                  onClick={() => {
                    showLoading();
                    entry.ButtonClicked();
                    closeLoading();
                  }}>
                  {entry.IsChosen ? 'x' : '+'}
                </button>
                {/* <br/> */}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const DayRow = ({ periods, dayName }) => {
  // showLoading();
    return (
    <>
      {/* {showLoading()} */}
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
      {/* {closeLoading()} */}
    </>
    );
    // closeLoading();
};
export default DayRow;