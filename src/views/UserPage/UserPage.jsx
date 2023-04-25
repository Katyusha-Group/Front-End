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
import colorpaletHey from "./colors.json"

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
export default function UserPage() {
  const [data, setData] = React.useState([]);
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });
  //getting token

  const token = localStorage.getItem("authTokens");

  // console.log(token);

  const [showLesson, setShowLesson] = React.useState(false);
  // console.log(data);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  let defu = 16;
  let length = 8.9;
  let top_right = 11;
  let top_defu = 13;
  const {info,changeInfo}=useInfo()
  function closeLesson(open) {
    setShowLesson(false);
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
          // console.log("get data1", data);
          setData(data);
        })
        .catch((error) => console.error(error));
      console.log(data);
      const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
      };
    }, []);

    return data.map((lessons) => {
      return(
      lessons.course_times.map((lesson, index) => {
        let lessonBoxId = `${lesson.complete_course_number}, ${index}`
        let time = timeStringToFloat(lesson.course_start_time)-7.5
        console.log("time",time)
        return (
          // <div key={lesson.id}>
          //   <div>
          //     <div
          //       id={lesson.id}
          //       className="course text-center"
          //       style={{
          //         top: `${defu + length * lesson.day}%`,
          //         right: `${top_defu + top_right * lesson.time}%`,
          //         width: `${lesson.long == 1 ? 11.5 : 16}%`,
          //       }}
          //       onMouseOver={() => document.getElementById(lesson.id + "x").style.display = 'block'}
          //       onMouseOut={() => document.getElementById(lesson.id + "x").style.display = 'none'}
          //     >
          //       <button
          //         className="lesson_button"
          //         onClick={() => {
          //           setData(data.filter((item) => item.name !== lesson.name));
          //           setShowLesson(false);
          //           console.log("false");
          //         }}
          //         id={lesson.id + "x"}
          //       >
          //         x
          //       </button>
          //       <div style={{height: "100%"}} onClick={() => setShowLesson(true)}>{lesson.name}</div>
          //     </div>
          //   </div>
          // </div>
          <div key= {lessonBoxId} >
            <div>
              <div
                id={lessonBoxId}
                className="course text-center"
                style={{
                  top: `${defu + length * lesson.course_day}%`,//TODO
                  right: `${top_defu + top_right * time}%`,
                  width: `${lesson.long == 1 ? 11.5 : 16}%`,
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
                    setData(data.filter((item) => item.name !== lesson.name));
                    setShowLesson(false);
                    // console.log("false");
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
          </div>
        );
      }));
    });
  }
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
              {
                courseGroups.map(x=>
                <Card className="courseCard">
                  <CardBody className="courseCardBody">
                    <img className="professorImage" src={sampleProfile} alt="professorImage"/>
                    <div>
                    <p>{x.name} (گروه {x.group_number})</p>  
                    <p style={{ fontSize: 12 }}> استاد:{x.teacher.name}</p>  
                    <p>ثبت نام شده: {x.capacity}/{x.registered_count} </p>  
                    <p style={{ fontSize: 12 }}> شنبه - دوشنبه 9.30 تا 11.00 </p>  
                    </div>
                  </CardBody>
                </Card>
                  )
              }
               
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
