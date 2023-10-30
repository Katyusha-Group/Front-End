import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import { apis } from "../../assets/apis";
import ModalLessons from "../../components/ModalLessons/ModalLessons";

const DayPeriod = (Input) => {
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
    fetch(apis["courses"]["id"]+`${x}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then((response) => response.json())
    .then((d) => {
      
      setModalData(d);
      if(showOrNot){
        setShowLesson({ flag: true, data: d })
      }
    });
    closeLoading();
   }
  return (
    <div>
      {Object.entries(Input).map(([count, entry]) => {
        return (
          <div className="CourseListContainer">
            {entry !== null && (
              <div className="CourseContainer" key={entry.complete_course_number}>
                <div className="Course"
                  style={{ backgroundColor: entry.backgColor, fontSize: /\s/.test(entry.name) ? "x-small" : "xx-small" }}
                  onClick={() => apiForModalData(entry.complete_course_number, true)}
                >
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
              </div>
            )}
            <ModalLessons
          show={showLesson}
          close={() =>
            setShowLesson(() => ({ ...showLesson, flag: false }))
          }
        />
          </div>
        )
      })}
      
    </div>
  )
}
export default DayPeriod;