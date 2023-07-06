import React from "react";
import { useMemo } from 'react';
import { useState } from "react";
import classNames from "classnames";
import TimeRow from './TimeRow';
import {
  Create2DArray,
  uniquifyArrayByKey,
  MapTimeToIndex,
  MapDateToIndex
} from "./ExamChart_Functions";

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
// import * as chart from "../../assets/img/schedule_table.png"
//import * as chart from "../../assets/img/ExamChart.png"
import dataJson from "../../assets/data/exams.json";

import { useInfo } from "../../contexts/InfoContext";

import "./ExamChart.css";

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
function ExamChart() {
  const [data, setData] = React.useState(dataJson);
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });

  const { info, changeInfo } = useInfo();
  const [showLesson, setShowLesson] = React.useState(false);
  const [bigChartData, setbigChartData] = React.useState("data1");
  let [ExamTable, setExamTable] = React.useState([]);


  // Already Chosen Lessons and Set Department Options and AllowedLessons
  React.useEffect(() => {
    fetch("https://www.katyushaiust.ir/courses/my_courses", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        changeInfo("courseChoosed", data)
        setExamTable(info.courseChoosed);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };

  }, []);



  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  let defu = 14.5;
  let length = 14.5;
  let top_right = 4.975;
  let top_defu = 5.1;
  function closeLesson(open) {
    setShowLesson(false);
  }
  var weekday = new Array(7);
  weekday[0] = "شنبه";
  weekday[1] = "یکشنبه";
  weekday[2] = "دوشنبه";
  weekday[3] = "سه‌شنبه";
  weekday[4] = "چهارشنبه";
  weekday[5] = "پنج‌شنبه";
  weekday[6] = "جمعه";
  function lessons() {
    // setExamTable(info.courseChoosed)
    return info.courseChoosed.map((lesson) => {
      // console.log("lesson", lesson.exam_times.length);
      if (lesson.exam_times.length > 0) {
        let lessonBoxId = `${lesson.complete_course_number}`;

        let day = lesson.exam_times[0].date.split("-")[2] - 17;

        // console.log(lesson.course_times[0].course_day);
        if (day < 0) day = day + 31;
        let time =
          (timeStringToFloat(lesson.exam_times[0].exam_start_time) - 8) / 2;
        return (
          <div key={lessonBoxId}>
            <div>
              <div
                id={lessonBoxId}
                className="exam text-center"
                style={{
                  top: `${defu + length * time}%`,
                  right: `${top_defu + top_right * day}%`,
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
                <div>
                  {/* {lesson.name} */}
                <strong title= {lesson.name}>{lesson.name.length < 13 ? lesson.name : lesson.name.slice(0, 13) + "..."}</strong>

                </div>
                <div className="exam_hover" id={lessonBoxId + "x"}>
                  <div className="dir-left">
                    {lesson.complete_course_number}
                  </div>
                  <div>{lesson.teachers.map((y)=>(y.name)).join(" , ")}</div>
                  <div>
                    {weekday[parseInt(lesson.course_times[0].course_day)]}
                  </div>
                  <div>
                    {timeStringToFloat(lesson.exam_times[0].exam_start_time) +
                      "-" +
                      timeStringToFloat(lesson.exam_times[0].exam_end_time)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  
  ExamTable = uniquifyArrayByKey(ExamTable, "complete_course_number")
  const keyedExamTable = useMemo(() => {                             // Mapping the courses into keyedExamTable
    const emptySection = () => ({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    const emptyDay = () => ({
      0: emptySection(),
      1: emptySection(),
      2: emptySection(),
      3: emptySection(),
      4: emptySection(),
      5: emptySection(),
      6: emptySection(),
      7: emptySection()
    });

    const NumInEachSlot = Create2DArray(6, 23);

    return ExamTable.reduce(
      (lessonsKeyedByExamDayAndPeriod, currentPeriod) => {
        const ExamTime = currentPeriod.exam_times.exam_start_time;
        const ExamDate = currentPeriod.exam_times.date;
        const TimeIndex = MapTimeToIndex(ExamTime); 
        const DateIndex = MapDateToIndex(ExamDate);
        NumInEachSlot[ExamTime][ExamDate] ++;
        let count = NumInEachSlot[ExamTime][ExamDate];
        try 
        {
          lessonsKeyedByExamDayAndPeriod[ExamTime][ExamDate][count] = currentPeriod;
        }
        catch (error) 
        {
          console.log("ERROR in mapping courses is: " + error);
        }
        return lessonsKeyedByExamDayAndPeriod
      },
      {
        0: emptyDay(),
        1: emptyDay(),
        2: emptyDay(),
        3: emptyDay(),
        4: emptyDay(),
        5: emptyDay(),
      }
    )
  }, [ExamTable])


  return (
    <>
      <Row>
        <Col lg="12" sm="12">
          <div className="overflow-auto nmt-1">
            <div className="chart1">{lessons()}</div>
          </div>
          <Table className="ExamsTable">
            <thead className="text-primary TableHead">
              <tr>
                <th className="table-head text-center "></th>
                <th className="table-head text-center ">13 خرداد</th>
                <th className="table-head text-center ">14</th>
                <th className="table-head text-center ">15</th>
                <th className="table-head text-center ">16</th>
                <th className="table-head text-center ">17</th>
                <th className="table-head text-center ">18</th>
                <th className="table-head text-center ">19</th>
                <th className="table-head text-center ">20</th>
                <th className="table-head text-center ">21</th>
                <th className="table-head text-center ">22</th>
                <th className="table-head text-center ">23</th>
                <th className="table-head text-center ">24</th>
                <th className="table-head text-center ">25</th>
                <th className="table-head text-center ">26</th>
                <th className="table-head text-center ">28</th>
                <th className="table-head text-center ">29</th>
                <th className="table-head text-center ">30</th>
                <th className="table-head text-center ">31</th>
                <th className="table-head text-center ">1 تیر</th>
                <th className="table-head text-center ">2</th>
                <th className="table-head text-center ">3</th>
                <th className="table-head text-center ">4</th>
                <th className="table-head text-center ">5</th>
              </tr>
            </thead>
            <tbody className="ExamChartTableBody">
              <TimeRow ExamT="8-10"  periods={keyedExamTable[0]} />
              <TimeRow ExamT="10-12" periods={keyedExamTable[1]} />
              <TimeRow ExamT="12-14" periods={keyedExamTable[2]} />
              <TimeRow ExamT="14-16" periods={keyedExamTable[3]} />
              <TimeRow ExamT="16-18" periods={keyedExamTable[4]} />
              <TimeRow ExamT="18-20" periods={keyedExamTable[5]} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default ExamChart;
