import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import Select from "react-select";
import { showLoading, closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import "../../assets/css/nucleo-icons.css";
import DayRow from './DayRow';
import { useState, useEffect } from 'react';
import { apis } from "../../assets/apis";
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

import { addNewLesson } from "../../Functions/addNewLesson";

import "./CoursesPanel.css"
import ReactSwitch from "react-switch";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
export default function CoursesPanel() {
  // Token
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

  // Info
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

  // Already Chosen Lessons and Set Department Options and AllowedLessons
  useEffect(() => {
    fetch(apis["departmentsAll"]["name"])
      .then((response) => response.json())
      .then((DepartmentOptions) => {
      setDepartmentOptions(DepartmentOptions);
    });
    changeInfo("courseChoosed", info.courseChoosed);
      const courses = info.courseChoosed.map(course => new Course(course, true));
      setChosenCourses(courses);
      settimetable(courses);
  }, []);

  useEffect ( () => {
    fetch(apis["courses"]["my_courses"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        changeInfo("courseChoosed", data);
        const courses = data.map(course => new Course(course, true));
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
  
  // Department courses
  let [DepartmentCourses, setDepartmentCourses] = useState([]);

  const customStyles = {                                              // Select Styles
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: "transparent",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#9A9A9A",
      backgroundColor: state.isSelected ? "#27293d" : "#27293d",
      "&:hover": {
        backgroundColor: "rgba(222, 222, 222, 0.3)",
      },
      transition: "all 150ms linear",
      margin: "-4px 0px",
      padding: "0.6rem 24px",
      fontSize: "0.75rem",
      fontWeight: "400",
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,

      "&:hover": {
        borderColor: "#e14eca",
      },
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "rgba(255, 255, 255, 0.8)",
      borderColor: state.isFocused ? "#e14eca" : "#2b3553",
      borderRadius: "0.4285rem",
      fontSize: "1rem",
      marginTop: "5px",
      fontWeight: "400",
      transition:
        "color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  function handleDepartment(selectedOption) {                         // Handle Select
    setSelectedDepartment(selectedOption.value);
    showLoading();
  }

  useEffect(() => {                                             // Set Selected Department courses
    if (SelectedDepartment) {
      fetch(apis["allcoursesBasedDepartment"]+`${SelectedDepartment}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          // settimetable(data);
          const courses = data.map(course => new Course(course, false));
          // settimetable(courses);
          setDepartmentCourses(courses); //Do we need this?
          // let NewTimeTable = [...ChosenCourses, ...courses];
          // settimetable(NewTimeTable);
          // setSwitchChecked(false);
          if (SwitchChecked)
          {
            let AllowedDepartmentCourses = courses.filter(course => course.can_take);   // Only filter department courses (do not filter chosen courses)
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
    // closeLoading();
  }, [SelectedDepartment]);

  // Switch
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
      setChosenCoursesChanged(prev => !prev);         // Set the courses as before (= Chosen courses and Department Courses)
    }
    // closeLoading();
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
  // function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
  //   return arr.filter((item, index) => {
  //       return (
  //       arr.findIndex((element) => element[key] === item[key]) === index
  //       );
  //   });
  // }
  // timetable = uniquifyArrayByKey(timetable, "complete_course_number")   // Do we need this?
  const keyedTimetable = useMemo(() => {                             // Mapping the courses into keyedTimetable
    // showLoading();
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

    const courseGroups = [];
    for (let i = 0; i < 6; i++) {
        courseGroups[i] = Array(8).fill(0);
    }
    const NumInEachSlot = courseGroups;

    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        // showLoading();
        currentPeriod.course_times.forEach(time => {

          const day = time.course_day;

          let TimeIndex = time.course_time_representation;
          if (TimeIndex === undefined)
          {
            TimeIndex = -1;
            // TimeIndex = mapTimeToIndex(time.course_start_time);
            const timeRanges = [ //map time to index
              ["07:30:00", "09:00:00"],
              ["09:00:01", "10:30:00"],
              ["10:30:01", "12:00:00"],
              ["13:00:00", "14:30:00"],
              ["14:30:01", "16:00:00"],
              ["16:00:01", "17:30:00"],
              ["17:30:01", "19:00:00"],
              ["19:00:01", "20:30:00"]
            ];
          
            for (let i = 0; i < timeRanges.length; i++) {
              const [start, end] = timeRanges[i];
              console.log("start is: " + start + " and end is: " + end);
              if (time.course_start_time >= start && time.course_start_time <= end) {
                console.log("The if is true");
                TimeIndex = i;
              }
            }
          }

          NumInEachSlot[day][TimeIndex]++;

          let count = NumInEachSlot[day][TimeIndex];
          try {
            lessonsKeyedByDayAndPeriod[day][TimeIndex][count] = currentPeriod;
          }
          catch (error) {
            console.log("ERROR is: " + error);
          }  
        }
        );
        return lessonsKeyedByDayAndPeriod
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
  }, [timetable])
  
  useEffect (() => {
    closeLoading();
  }, [timetable]);
  
  return (
    <>

    <AdminNavbar></AdminNavbar>
      <Row >
        <Col>
          <Card className="TableCard">
            <CardBody>
              <Row className="CardBodyRow">
                <Col className="SelectCol" md="4">
                  <Select
                    options={DepartmentOptions}
                    styles={customStyles}
                    isRtl
                    placeholder="دانشکده مورد نظر را انتخاب کنید"
                    name="SelectDepartment"
                    value={SelectedDepartment.name}
                    onChange={handleDepartment}
                  />
                </Col>
                <Col className="SwitchCol" md="1">
                  <Row className="SwitchCard">
                    <Col className="SwitchCardCol">
                      <ReactSwitch className="Switch"
                        checked={SwitchChecked}
                        onChange={handleSwitchChange}
                      />
                    </Col>
                    <Col className="SwitchCardCol">
                      <p>
                        فقط دروس قابل اخذ
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Table className="ClassesTable">
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
                <tbody className="CoursesTableBody">
                  <DayRow dayName="شنبه" periods={keyedTimetable[0]} />
                  <DayRow dayName="یکشنبه" periods={keyedTimetable[1]} />
                  <DayRow dayName="دوشنبه" periods={keyedTimetable[2]} />
                  <DayRow dayName="سه شنبه" periods={keyedTimetable[3]} />
                  <DayRow dayName="چهارشنبه" periods={keyedTimetable[4]} />
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
