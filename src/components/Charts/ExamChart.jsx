import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import "../../assets/css/nucleo-icons.css";
import TimeRow from './TimeRow';
import { Table } from "reactstrap";
import * as style from "./ExamChart.module.css"
import { uniquifyArrayByKey } from "../../Functions/uniquifyArrayByKey";
import GeneratekeyedExamTable from "./keyedExamTable";

export default function ExamChart() {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const { info, changeInfo } = useInfo();

  let [ExamTable, setExamTable] = React.useState([]);

  React.useEffect(() => {
    setExamTable(info.courseChoosed);
  }, [info.courseChoosed]);

  // class Course {
  //   constructor(props, IsFromChosencourses) {
  //     this.name = props.name;
  //     this.complete_course_number = props.complete_course_number;
  //     this.class_gp = props.class_gp;
  //     this.complete_course_number = props.complete_course_number;
  //     this.course_times = props.course_times;
  //     this.base_course_number = parseInt(this.complete_course_number.substring(0, this.complete_course_number.length - 3));
  //     this.DepartmentID = parseInt(this.complete_course_number.substring(0, 2));
  //     this.can_take = props.is_allowed;
  //     this.exam_times = props.exam_times;
  //     this.IsChosen = IsFromChosencourses;
  //     this.backgColor = (this.IsChosen) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
  //   }
  // }
  ExamTable = uniquifyArrayByKey(ExamTable, "complete_course_number")
  const keyedExamTable = useMemo(() => {                             // Mapping the courses into keyedExamTable
    return GeneratekeyedExamTable(ExamTable);
  }, [ExamTable])

  return (
    <>
      <Table className={style.ExamsTable} id="ExamChartTable">
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
        <tbody className={style.ExamChartTableBody}>
          <TimeRow ExamT="8-10"  periods={keyedExamTable[0]} id="ExamChartTimeRow"/>
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

