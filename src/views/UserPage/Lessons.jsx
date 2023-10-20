import React from "react";
import { apis } from "../../assets/apis"
import {timeStringToFloat} from "../../Functions/timeStringToFloat"
let defu = 13.3;
let length = 17.1;
let top_right = 9.6;
let top_defu = 11.7;
function lessons(infoState, changeInfoState, getapi, classNameHover,showLoading,closeLoading) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;

    React.useEffect(() => {
      if (getapi == true) {
        showLoading();
        fetch(apis["courses"]["my_courses"], {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => response.json())
          .then((data) => {
            changeInfoState("courseChoosed", data);
          })
          .catch((error) => console.error(error));
        const activeRoute = (routeName) => {
          return location.pathname === routeName ? "active" : "";
        };
      }
    }, []);

    closeLoading();

    return infoState.courseChoosed.map((lessons) => {
      return lessons.course_times.map((lesson, index) => {
        let lessonBoxId = `${lessons.complete_course_number}, ${index}`;

        let time = (timeStringToFloat(lesson.course_start_time) - 7.5) / 1.5;

        return (
          <div key={lessonBoxId}>
            <div
              id={lessonBoxId}
              className={`course text-center ${classNameHover} course-hover`}
              style={{
                top: `${defu + length * lesson.course_day}%`, 
                right: `${top_defu + top_right * time}%`,
                width: `${
                  timeStringToFloat(lesson.course_end_time) -
                    timeStringToFloat(lesson.course_start_time) ==
                  1.5
                    ? 9.5
                    : 13
                }%`,
              }}
              onMouseOver={() =>
                (document.getElementById(lessonBoxId + "x").style.display =
                  "block")
              }
              onMouseOut={() =>
                (document.getElementById(lessonBoxId + "x").style.display =
                  "none")
              }
            >
              <button
                className="lesson_button"
                onClick={() => {
                  addNewLesson(lessons.complete_course_number);
                  changeInfo(
                    "courseChoosed",
                    infoState.courseChoosed.filter(
                      (item) =>
                        item.complete_course_number !==
                        lessons.complete_course_number
                    )
                  );
                  closeLesson(false, lessons);
                }}
                id={lessonBoxId + "x"}
              >
                <strong>
                  <i
                    className="tim-icons icon-simple-remove"
                    style={{ margin: "auto" }}
                  ></i>
                </strong>
                {/* x */}
              </button>
              <div
                style={{ height: "100%" }}
                onClick={() =>
                  apiForModalData(lessons.complete_course_number, true)
                }
                className="d-flex align-items-center justify-content-center"
              >
                <div className="m-1">
                  <strong title={lessons.name}>
                    {lessons.name.length < 27
                      ? lessons.name
                      : lessons.name.slice(0, 27) + "..."}
                  </strong>
                  <br />
                  {lessons.registered_count} از {lessons.capacity}
                  <br />
                  <p className="id_code"> {lessons.complete_course_number}</p>
                  {/* {console.log("lessons click", lessons)}n */}
                </div>
              </div>
            </div>
          </div>
        );
      });
    });
  }