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
import fullLogo from "./full.png"
import { useInfo } from "../../contexts/InfoContext";
import { convertPercentagetoLigtness } from "../../global/functions";
import colorpaletHey from "./colors.json";
import { dayOfWeek } from "../../global/functions";
import { json } from "react-router-dom";
import cartlogo from"./cart.png";

import SummaryChart from "../../components/SummaryChart/SummaryChart.jsx";
function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
import ExamChart from "../../components/Charts/ExamChart.jsx";
import { sum } from "lodash";
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

  const [showLesson, setShowLesson] = React.useState({
    flag: false,
    data: {},
  });
  // console.log(data);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  const [showCourseHover, setShowCourseHover] = React.useState({
    courseChoosed: [],
  });
  function setShowCourseHoverFunc(name, value) {
    console.log("setShowCourseHover func");
    setShowCourseHover((info) => ({ ...info, [name]: value }));
  }
  let defu = 12.3;
  let length = 13.6;
  let top_right = 9.8;
  let top_defu = 10.4;
  // let initial = useInfo();
  //const[info,changeInfo]=React.useEffect(initial);
  const { info, changeInfo } = useInfo();
  console.log("info", info);
  function closeLesson(flag, data) {
    setShowLesson({ flag: flag, data: data });
    console.log("closeLesson", flag, data, showLesson);
  }
  /**
   * send course number to save in database
   * @param {} num
   */
  function addNewLesson(num) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);

    const token = tokenClass.token.access;

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
        console.log("put data", data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  /**
   * To get data of lessons from back and save it to infoState with changeInfoState
   * @param {*} infoState
   * @param {*} changeInfoState
   * @returns
   */

  function lessons(infoState, changeInfoState) {
    console.log("hello");
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    React.useEffect(() => {
      fetch("https://www.katyushaiust.ir/courses/my_courses", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("get data", data);
          setData(data);
          changeInfoState("courseChoosed", data);
          console.log("get data after reload", data);
        })
        .catch((error) => console.error(error));
      const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
      };
    }, []);

    return infoState.courseChoosed.map((lessons) => {
      console.log("lessons", lessons);
      return lessons.course_times.map((lesson, index) => {
        let lessonBoxId = `${lessons.complete_course_number}, ${index}`;
        let time = (timeStringToFloat(lesson.course_start_time) - 7.5) / 1.5;

        return (
          <div key={lessonBoxId}>
            <div
              id={lessonBoxId}
              className="course text-center"
              style={{
                top: `${defu + length * lesson.course_day}%`, //TODO
                right: `${top_defu + top_right * time}%`,
                width: `${
                  timeStringToFloat(lesson.course_end_time) -
                    timeStringToFloat(lesson.course_start_time) ==
                  1.5
                    ? 9.8
                    : 15
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
                  console.log("delete lesson", lessons.complete_course_number);
                  changeInfo(
                    "courseChoosed",
                    infoState.courseChoosed.filter(
                      (item) =>
                        item.complete_course_number !==
                        lessons.complete_course_number
                    )
                  );
                  closeLesson(false, lessons);
                  console.log("delete info", infoState);
                }}
                id={lessonBoxId + "x"}
              >
                x
              </button>
              <div
                style={{ height: "100%" }}
                onClick={() => closeLesson(true, lessons)}
              >
                {lessons.name}
              </div>
            </div>
          </div>
        );
      });
    });
  }

  return (
    <>
      <Row>
        <Col lg="12">{/* <ExamChart /> */}</Col>
        <Col lg="12" sm="10">
          <Card>
            <CardBody className="week-card-body">
              <CardHeader>
                <Row>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                          برنامه هفتگی
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                          خلاصه وضعیت
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                          برنامه امتحانات
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>

                  <Col
                    sm="6"
                    className="d-none d-sm-block d-md-block d-lg-block d-xl-block text-right pr-sm-5 pt-sm-2"
                  >
                    <span
                      style={{
                        display: bigChartData == "data2" ? "block" : "none",
                      }}
                    >
                      {info.courseChoosed.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.total_unit,
                        0
                      )}{" "}
                      : تعداد واحد
                    </span>
                  </Col>
                </Row>
              </CardHeader>
              <div className="overflow-auto">
                <div
                  className="chart"
                  style={{
                    display: bigChartData == "data1" ? "block" : "none",
                  }}
                >
                  {lessons(info, changeInfo)}
                  {lessons(showCourseHover, setShowCourseHoverFunc)}
                  <ModalLessons
                    show={showLesson}
                    close={() =>
                      setShowLesson(() => ({ ...showLesson, flag: false }))
                    }
                  />
                </div>
                <div
                  style={{
                    display: bigChartData == "data2" ? "block" : "none",
                  }}
                >
                  {" "}
                  <SummaryChart props={info.courseChoosed} />
                </div>
                <div
                  style={{
                    display: bigChartData == "data3" ? "block" : "none",
                  }}
                >
                  {" "}
                  <ExamChart />
                </div>
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
                    
                    className="courseCard"
                    key={index}
                    style={{
                      backgroundColor: x.color_intensity_percentage>10 ? `hsl(256, 45%, ${convertPercentagetoLigtness(
                        x.color_intensity_percentage 
                      )}%)`:"dimgray"
                    }}
                    onMouseEnter={() => {
                      console.log(x.complete_course_number);
                      setShowCourseHoverFunc("courseChoosed", [
                        ...info.courseChoosed,
                        x,
                      ]);
                    }}
                    onMouseLeave={() => {
                      console.log("out");
                      setShowCourseHoverFunc(
                        "courseChoosed",
                        []
                      );
                    }}
                  >
                    <CardBody className="courseCardBody">
                      <img
                        className="professorImage"
                        src={x.teacher.teacher_image}
                        // src={sampleProfile}
                        alt="professorImage"
                      />
                      <div className="infoPart">
                        <p>
                          {x.name} (گروه {x.group_number})
                        </p>
                        <p style={{ fontSize: 12 }}> استاد:{x.teacher.name}</p>
                        <div className="courseCardDownSide">
                          <div>
                          <p>
                            ثبت نام شده: {x.capacity}/{x.registered_count}{" "}
                          </p>
                          {/* <p style={{ fontSize: 12 }}>
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
                          </p> */}
                          {/* <img className="fullLogo"
                          src={x.teacher.teacher_image}
                          ></img> */}
                          {/* <div>{x.teacher.teacher_image}</div> */}
                          {/* <Button className="addToPlanButton">+</Button> */}
                          <Button variant="secondary"size="sm" style={{color:"aqua",fontSize:"medium"}}
                          onClick={() => {
                            console.log("x", x);
                            if (!info.courseChoosed.includes(x) ) {
                              console.log("includes")
                              addNewLesson(x.complete_course_number);
                              changeInfo("courseChoosed", [...info.courseChoosed, x]);
                            }
                            console.log("info", info);
                          }}
                          >+</Button>
                          <Button variant="secondary"size="sm" style={{color:"aqua",fontSize:"medium"}}>
                          <img className="cart"
                          src={cartlogo}
                          alt="cartlogo"></img>
                          </Button>
                          </div>
                          <img className="fullLogo"
                          src={fullLogo}
                          alt="fullLogo"
                          style={{display: x.color_intensity_percentage<11 ? 'block' : 'none' }}></img>
                        </div>
                        
                      </div>
                      
                    </CardBody>
                  </Card>
                ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
