import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import "../../assets/css/nucleo-icons.css";
import TimeRow from './TimeRow';
import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

import {
  MapTimeToIndex,
  MapDateToIndex,
  Create2DArray,
  uniquifyArrayByKey
} from "./ExamChart_Functions";

import "./ExamChart.css"
import AdminNavbar from "../../components/Navbars/AdminNavbar";


function Exams (ExamTable)
{
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
    const emptyTime = () => ({
      0: emptySection(),
      1: emptySection(),
      2: emptySection(),
      3: emptySection(),
      4: emptySection(),
      5: emptySection(),
      6: emptySection(),
      7: emptySection(),
      8: emptySection(),
      9: emptySection(),
      10: emptySection(),
      11: emptySection(),
      12: emptySection(),
      13: emptySection(),
      14: emptySection(),
      15: emptySection(),
      16: emptySection(),
      17: emptySection(),
      18: emptySection(),
      19: emptySection(),
      20: emptySection(),
      21: emptySection()
    });

    const NumInEachSlot = Create2DArray(6, 22);

    return ExamTable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        
        // if (!currentPeriod.exam_times[0].exam_start_time || !currentPeriod.exam_times[0].date) {
        //   // Skip the iteration if either ExamTime or ExamDay is undefined
        //   return lessonsKeyedByDayAndPeriod;
        // }
        
        try
        {
          let ExamTime = currentPeriod.exam_times[0].exam_start_time;
          let ExamDay = currentPeriod.exam_times[0].date;
        }
        catch 
        {
          console.log("First Error");
          return lessonsKeyedByDayAndPeriod;
        }

        let ExamTime = currentPeriod.exam_times[0].exam_start_time;
        let ExamDay = currentPeriod.exam_times[0].date;
        
        let time = MapTimeToIndex(ExamTime);
        let day = MapDateToIndex(ExamDay);

        try
        {
          NumInEachSlot[time][day] ++;
        }
        catch 
        {
          console.log("Second Error");
          return lessonsKeyedByDayAndPeriod;
        }

        NumInEachSlot[time][day] ++;
        let count = NumInEachSlot[time][day];
        try {
          lessonsKeyedByDayAndPeriod[time][day][count] = currentPeriod;
        }
        catch (error) {
          console.log("ERROR is: " + error);
        }
        return lessonsKeyedByDayAndPeriod
      },
      {
        0: emptyTime(),
        1: emptyTime(),
        2: emptyTime(),
        3: emptyTime(),
        4: emptyTime(),
        5: emptyTime(),
      }
    )
  }, [ExamTable])
  
  
  return (
    <>
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
    </>
  );
}

export default function ExamChart() {
  // Token
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

  // Info
  const { info, changeInfo } = useInfo();

  let [ExamTable, setExamTable] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://www.katyushaiust.ir/courses/my_courses", {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("fetched data");
    //     changeInfo("courseChoosed", data);
    //     const courses = data.map(course => new Course(course, true));
    //     setExamTable(courses);

    //   })
    //   .catch((error) => console.error(error));
    // const activeRoute = (routeName) => {
    //   return location.pathname === routeName ? "active" : "";
    // };
    setExamTable(info.courseChoosed);
  }, [info.courseChoosed]);
  // setExamTable(info.courseChoosed);

  class Course {
    constructor(props, IsFromChosencourses) {
      this.name = props.name;
      console.log ("Name: " + this.name);

      this.complete_course_number = props.complete_course_number;
      

      this.class_gp = props.class_gp;
      this.complete_course_number = props.complete_course_number;
      this.course_times = props.course_times;
      this.base_course_number = parseInt(this.complete_course_number.substring(0, this.complete_course_number.length - 3));
      this.DepartmentID = parseInt(this.complete_course_number.substring(0, 2));
      this.can_take = props.is_allowed;



      this.exam_times = props.exam_times;

      this.IsChosen = IsFromChosencourses;
      this.backgColor = (this.IsChosen) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
    }
  }

  return (
    <>
      <div>
        {console.log("Exams called")}
        {Exams(ExamTable)}
      </div>
    </>
  );
}

