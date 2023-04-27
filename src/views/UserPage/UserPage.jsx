import React from "react";
import classNames from "classnames";
// import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import "./UserPage.css";
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png";
import dataJson from "../../assets/data/week.json";
import HomeCardBar from "../../components/HomePageItems/HomeCardBar";
import ModalLessons from "../../components/ModalLessons/ModalLessons.jsx";
import courseGroups from "./courseGroups.json";
import sampleProfile from "./image1.png";
import { useInfo } from "../../contexts/InfoContext";
import { convertPercentagetoLigtness } from "../../global/functions";
import colorpaletHey from "./colors.json";
import { dayOfWeek } from "../../global/functions";
import { json } from "react-router-dom";

import SummaryChart from "../../components/SummaryChart/SummaryChart.jsx";
function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
export default function UserPage() {
  const [datac, setData] = React.useState([]);
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });
  //getting token

  const token = localStorage.getItem("authTokens");

  // console.log("context" , useInfo);

  const [showLesson, setShowLesson] = React.useState(false);
  // console.log(data);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  let defu = 14;
  let length = 16;
  let top_right = 11;
  let top_defu = 12.5;
  // let initial = useInfo();
  //const[info,changeInfo]=React.useEffect(initial);
  const { info, changeInfo } = useInfo();
  console.log("info", info);
  function closeLesson(open) {
    setShowLesson(false);
  }

  function addNewLesson(num) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    // console.log("tokenClass", tokenClass);
    const token = tokenClass.token.access;
    // const response = await fetch("https://katyushaiust.ir/accounts/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: formData.email,
    //     password: formData.password,
    //   }),
    // });
    // const data = await response.json();
    // console.log(`num is : ${num}`);
    // console.log(`type :`, typeof num);
      
    fetch("https://www.katyushaiust.ir/courses/my_courses/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("gjgjhdsfffffhs post successfully");
        console.log("put data", data);
        // setData(data);
      })
      .catch((error) => console.error(error));
    // console.log(data);
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  function lessons() {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    // console.log(tokenClass);
    const token = tokenClass.token.access;

    React.useEffect(() => {
      fetch("https://www.katyushaiust.ir/courses/my_courses", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          changeInfo("courseChoosed",data)
          console.log("get data after reload", data);
          
        })
        .catch((error) => console.error(error));
      // console.log(data);
      const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
      };
    }, []);

    return info.courseChoosed.map((lessons) => {
      return lessons.course_times.map((lesson, index) => {
        let lessonBoxId = `${lessons.complete_course_number}, ${index}`;
        let time = (timeStringToFloat(lesson.course_start_time) - 7.5)/1.5;
        // console.log(`time of ${lessons.name}`, timeStringToFloat(lesson.course_start_time));
        // console.log(`long of ${lessons.name}`, timeStringToFloat(lesson.course_start_time ) - timeStringToFloat(lesson.course_end_time ));
        return (
          <div key={lessonBoxId}>
            <div
              id={lessonBoxId}
              className="course text-center"
              style={{
                top: `${defu + length * lesson.course_day}%`, //TODO
                right: `${top_defu + top_right * time}%`,
                width: `${  timeStringToFloat(lesson.course_end_time ) - timeStringToFloat(lesson.course_start_time )== 1.5 ? 10.8 : 16}%`,
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
              {
                //delete button
              }
              <button
                className="lesson_button"
                onClick={() => {
                  addNewLesson(lessons.complete_course_number)
                  console.log("delete lesson", lessons.complete_course_number);
                  changeInfo("courseChoosed",info.courseChoosed.filter((item) => item.complete_course_number !== lessons.complete_course_number));
                  setShowLesson(false);
                  console.log("delete info" , info);
                }}
                id={lessonBoxId + "x"}
              >
                x
              </button>
              <div
                style={{ height: "100%" }}
                onClick={() => setShowLesson(true)}
              >
                {lessons.name}
              </div>
            </div>
          </div>
        );
      });
    });
  }

 

  // function takeLessonsGroups(){
  //   const tokenJson = localStorage.getItem("authTokens");
  //   const tokenClass = JSON.parse(tokenJson);
  //   const token = tokenClass.token.access;

  //   React.useEffect(() => {
  //     fetch(`https://www.katyushaiust.ir/coursegroups/${info.courseGroupID}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("heyy it was done!", data);
  //         //setData(data);
  //       })
  //       .catch((error) => console.error(error));
  //     console.log(data);
  //     const activeRoute = (routeName) => {
  //       return location.pathname === routeName ? "active" : "";
  //     };
  //   }, []);

  // }

  return (
    <>
      <Row>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>
              <div className="overflow-auto">
                <div className="chart">{lessons()}</div>
                <ModalLessons
                  show={showLesson}
                  close={() => setShowLesson(false)}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" sm="10">
          <Card>
            <CardBody className="courseGroupCard">
              {info.courseGroupsListInContext.length &&
                info.courseGroupsListInContext.map((x, index) => (
                  <Card
                    onClick={() => {
                      console.log("x", x);
                      addNewLesson(x.complete_course_number);
                      changeInfo("courseChoosed",[...info.courseChoosed, x]);
                      console.log("info",info)
                    }}
                    className="courseCard"
                    key={index}
                    style={{backgroundColor: `hsl(256, 45%, ${convertPercentagetoLigtness(x.color_intensity_percentage)}%)`}} 
                  >
                    <CardBody className="courseCardBody">
                      <img
                        className="professorImage"
                        src={sampleProfile}
                        alt="professorImage"
                      />
                      <div>
                        <p>
                          {x.name} (گروه {x.group_number})
                        </p>
                        <p style={{ fontSize: 12 }}> استاد:{x.teacher.name}</p>
                        <p>
                          ثبت نام شده: {x.capacity}/{x.registered_count}{" "}
                        </p>
                        <div></div>

                        <p style={{ fontSize: 12 }}>
                          {" "}
                          {x.course_times.map((x) => (
                            <text>{dayOfWeek(x.course_day)} </text>
                          ))}
                          <text>
                            {timeStringToFloat(
                              x.course_times[0].course_start_time
                            )}
                          </text>{" "}
                          تا{" "}
                          <text>
                            {timeStringToFloat(
                              x.course_times[0].course_end_time
                            )}
                          </text>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                ))}

              {/* <div className="overflow-auto"> */}
              {/* {
                colorpaletHey.map(c=>
                  <div className="color" style={{backgroundColor: `${c.value}`}}>
                <p></p>
                <p>{c.id}</p>
              </div>
                )
              } */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
