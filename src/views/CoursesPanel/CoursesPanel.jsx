import React from "react";
import { useMemo, useState, useEffect } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import { apis } from "../../assets/apis";

import AdminNavbar from "../../components/Navbars/AdminNavbar";
import { showLoading, closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import Select from "react-select";
import DayRow from './DayRow';
import ReactSwitch from "react-switch";
import {
  Card,
  CardBody,
  Table,
  Row,
  Col
} from "reactstrap";

import { addNewLesson } from "../../Functions/addNewLesson";
import { uniquifyArrayByKey } from "../../Functions/uniquifyArrayByKey";
import { mapTimeToIndex } from "../../Functions/mapTimeToIndex";
import GenerateKeyedTimetable from "./KeyedTimetable";
import * as style from  "./CoursesPanel.module.css";
import SelectStyles from "../../assets/styles/SelectStyles";
import axios from "axios";

export default function CoursesPanel() {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

  const { info, changeInfo } = useInfo();

  const [DepartmentOptions, setDepartmentOptions] = useState([]);
  let [SelectedDepartment, setSelectedDepartment] = useState([]);
  let [ChosenCourses, setChosenCourses] = useState([]);
  let [ChosenCoursesChanged, setChosenCoursesChanged] = useState(false);

  let NumberOfChosenLessons = [];
  let Rows = 5, Cols = 9;
  for (let i = 0; i < Rows; i++) {
    NumberOfChosenLessons[i] = Array(Cols).fill(0);
  }

  useEffect(() => {
    axios(apis["departmentsAll"]["names"])
      // .then((response) => response.json())
      .then((DepartmentOptions) => {
        setDepartmentOptions(DepartmentOptions.data);
    });
    changeInfo("courseChoosed", info.courseChoosed);
      const courses = info.courseChoosed.map(course => new Course(course, true));
      setChosenCourses(courses);
      settimetable(courses);
  }, []);

  useEffect ( () => {
    axios(apis["courses"]["my_courses"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      // .then((response) => response.json())
      .then((data) => {
        changeInfo("courseChoosed", data.data);
        const courses = data.data.map(course => new Course(course, true));
        setChosenCourses(courses);
        if (SwitchChecked)
        {
          let AllowedDepartmentCourses = DepartmentCourses.filter(course => course.can_take);   // Only filter department courses (do not filter chosen courses)
          let NewTimeTable = [...courses, ...AllowedDepartmentCourses];
          settimetable(NewTimeTable);
        }
        else
        {
          let NewTimeTable = [...courses, ...DepartmentCourses];
          settimetable(NewTimeTable);
        }
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, [ChosenCoursesChanged]);
  
  let [DepartmentCourses, setDepartmentCourses] = useState([]);

  function handleDepartment(selectedOption) {                         
    setSelectedDepartment(selectedOption.value);
    showLoading();
  }

  useEffect(() => {                                             
    if (SelectedDepartment) {
      fetch(apis["allcoursesBasedDepartment"]+`${SelectedDepartment}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          const courses = data.map(course => new Course(course, false));
          setDepartmentCourses(courses); 
          if (SwitchChecked)
          {
            let AllowedDepartmentCourses = courses.filter(course => course.can_take);  
            let NewTimeTable = [...ChosenCourses, ...AllowedDepartmentCourses];
            settimetable(NewTimeTable);
            setSwitchChecked(true);
          }
          else
          {
            let NewTimeTable = [...ChosenCourses, ...courses];
            settimetable(NewTimeTable);
            setSwitchChecked(false);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [SelectedDepartment]);
  const [SwitchChecked, setSwitchChecked] = useState(false);
  const handleSwitchChange = val => {
    setSwitchChecked(val)
  }
  useEffect(() => {
    if (SwitchChecked) {
      let FilteredDepartmentCourses = DepartmentCourses.filter(course => course.can_take);
      let temp = [...ChosenCourses, ...FilteredDepartmentCourses];
      settimetable(temp);
    }
    else
    {
      setChosenCoursesChanged(prev => !prev);        
    }
  }, [SwitchChecked]);

  class Course {
    constructor(props, IsFromChosencourses) {
      this.name = props.name;
      this.complete_course_number = props.complete_course_number;
      this.class_gp = this.complete_course_number.substring(this.complete_course_number.length - 2);
      this.course_times = props.course_times;
      this.base_course_number = parseInt(this.complete_course_number.substring(0, this.complete_course_number.length - 3));
      this.DepartmentID = parseInt(this.complete_course_number.substring(0, 2));
      this.can_take = props.is_allowed;
      this.IsChosen = IsFromChosencourses;
      this.backgColor = (this.IsChosen) ? "rgb(87, 106, 224)" : "hsl(235, 22%, 30%)";
    }
    
    ButtonClicked ()
    {
      if (this.IsChosen)
      {
        if (!info.courseChoosed.includes(this)) {
          ChosenCourses = addNewLesson(this.complete_course_number, NumberOfChosenLessons);
          changeInfo("courseChoosed", [...info.courseChoosed, this]);
          this.IsChosen = true;
        }
      }
      else
      {
        addNewLesson(this.complete_course_number);
        changeInfo(
          "courseChoosed",
          info.courseChoosed.filter(
            (item) =>
              item.complete_course_number !==
              this.complete_course_number
          )
        );
        this.IsChosen = false;
      }
      setChosenCoursesChanged(prev => !prev);
    }
  }

  let [timetable, settimetable] = useState([]);
  
  timetable = uniquifyArrayByKey(timetable, "complete_course_number")

  const keyedTimetable = useMemo(() => {
    return GenerateKeyedTimetable(timetable);
  }, [timetable]);
  
  useEffect (() => {
    closeLoading();
  }, [timetable]);
  
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <div className={style.TableCard}>
          <div>
            <div className={style.CardBodyRow}>
              <div className={style.SelectCol}>
                <Select
                  options={DepartmentOptions}
                  styles={SelectStyles}
                  isRtl
                  placeholder="دانشکده مورد نظر را انتخاب کنید"
                  name="SelectDepartment"
                  value={SelectedDepartment.name}
                  onChange={handleDepartment}
                />
              </div>
              <div className={style.SwitchCol}>
                <ReactSwitch className={style.Switch}
                  checked={SwitchChecked}
                  onChange={handleSwitchChange}
                />
                <p>
                  فقط دروس قابل اخذ
                </p>
              </div>
            </div>
            <div className={style.ClassesTableDiv}>
              <Table className={style.ClassesTable} id ="CoursesPanelTable">
                {/* <thead className={`${style.text-primary} TableHead`}> */}
                <thead className="text-primary TableHead">
                  <tr>
                    <th className="table-head text-center "></th>
                    <th className="table-head text-center ">۷:۳۰ تا ۹</th>
                    <th className="table-head text-center ">۹ تا ۱۰:۳۰</th>
                    <th className="table-head text-center ">۱۰:۳۰ تا ۱۲</th>
                    <th className="table-head text-center ">1 تا 2:30</th>
                    <th className="table-head text-center ">2:30 تا 4</th>
                    <th className="table-head text-center ">4 تا 5:30</th>
                    <th className="table-head text-center ">5:30 تا 7  </th>
                    <th className="table-head text-center ">7 تا 8:30 </th>
                  </tr>
                </thead>
                <tbody className={style.CoursesTableBody}>
                  <DayRow dayName="شنبه" periods={keyedTimetable[0]} id="CoursesPanelDayRow"/>
                  <DayRow dayName="یکشنبه" periods={keyedTimetable[1]} />
                  <DayRow dayName="دوشنبه" periods={keyedTimetable[2]} />
                  <DayRow dayName="سه شنبه" periods={keyedTimetable[3]} />
                  <DayRow dayName="چهارشنبه" periods={keyedTimetable[4]} />
                </tbody>
              </Table>
            </div>
          </div>
      </div>
    </>
  );
}
