import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import Select from "react-select";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import "../../assets/css/nucleo-icons.css";
import DayRow from './DayRow';
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
  addNewLesson,
  mapTimeToIndex,
  createCourseGroupsArray,
  uniquifyArrayByKey
} from "./CoursesPanel_Functions";

import "./CoursesPanel.css"
import ReactSwitch from "react-switch";
// import HomeIcon from './home.png';
// import { size } from "lodash";
export default function CoursesPanel() {

  // Token
  // const tokenJson = localStorage.getItem("authTokens") || 'nothing';
  // const tokenClass = JSON.parse(tokenJson) || 'nothing';
  // // const token = tokenClass.token.access;
  // const token = tokenClass.token.access || 'nothing';

  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = tokenJson ? JSON.parse(tokenJson) : null;
    const newToken = tokenClass ? tokenClass.token.access : null;
    setToken(newToken);
  }, [localStorage.getItem("authTokens")]);


  // Info
  const { info, changeInfo } = useInfo();

  // Allowed Lessons
  // let [Allowed, setAllowed] = React.useState([]);
  const [DepartmentOptions, setDepartmentOptions] = React.useState([]);
  let [SelectedDepartment, setSelectedDepartment] = React.useState([]);
  let [ChosenCourses, setChosenCourses] = React.useState([]);
  let [ChosenCoursesChanged, setChosenCoursesChanged] = React.useState(false);

  // Already Chosen Lessons and Set Department Options and AllowedLessons
  React.useEffect(() => {
    fetch("https://www.katyushaiust.ir/departments/names")
      .then((response) => response.json())
      .then((DepartmentOptions) => {
      setDepartmentOptions(DepartmentOptions);
    });
    fetch("https://www.katyushaiust.ir/courses/my_courses", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        changeInfo("courseChoosed", data);
        const courses = data.map(course => new Course(course, true));
        setChosenCourses(courses);
        settimetable(courses);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };

  }, []);

  React.useEffect ( () => {
    fetch("https://www.katyushaiust.ir/courses/my_courses", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        changeInfo("courseChoosed", data);
        const courses = data.map(course => new Course(course, true));
        setChosenCourses(courses);
        // let NewTimeTable = [...courses, ...DepartmentCourses];
        // settimetable(NewTimeTable);
        if (SwitchChecked)
        {
          // console.log("DEPPPP COutseSc: " + DepartmentCourses);
          let AllowedDepartmentCourses = DepartmentCourses.filter(course => course.can_take);   // Only filter department courses (do not filter chosen courses)
          // let temp = NewTimeTable.filter(course => course.can_take);
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
  let [DepartmentCourses, setDepartmentCourses] = React.useState([]);

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
  }

  React.useEffect(() => {                                             // Set Selected Department courses
    if (SelectedDepartment) {
      fetch(`https://katyushaiust.ir/allcourses-based-department/${SelectedDepartment}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          // settimetable(data);
          const courses = data.map(course => new Course(course, false));
          // settimetable(courses);
          setDepartmentCourses(courses);
          let NewTimeTable = [...ChosenCourses, ...courses];
          settimetable(NewTimeTable);
          setSwitchChecked(false);
        })
        .catch((error) => console.error(error));
    }
  }, [SelectedDepartment]);

  // Switch
  const [SwitchChecked, setSwitchChecked] = React.useState(false);
  const handleSwitchChange = val => {
    setSwitchChecked(val)
  }
  React.useEffect(() => { 
    showLoading();
    if (SwitchChecked) {
      let FilteredDepartmentCourses = DepartmentCourses.filter(course => course.can_take);
      // let temp = timetable.filter(course => course.can_take);
      let temp = [...ChosenCourses, ...FilteredDepartmentCourses];
      settimetable(temp);
    }
    else
    {
      setChosenCoursesChanged(prev => !prev);         // Set the courses as before (= Chosen courses and Department Courses)
    }
    closeLoading();
  }, [SwitchChecked]);

  

  class Course {
    constructor(props, IsFromChosencourses) {
      this.name = props.name;
      // if (this.name.length > 30)
      // {
      //   // console.log("*****Length is: " + this.name.length);
      //   this.name = this.name.substring(0, 25) + "...";
      // }
      this.class_gp = props.class_gp;
      this.complete_course_number = props.complete_course_number;
      this.course_times = props.course_times;
      this.base_course_number = parseInt(this.complete_course_number.substring(0, this.complete_course_number.length - 3));
      this.DepartmentID = parseInt(this.complete_course_number.substring(0, 2));
      this.can_take = props.is_allowed;
      // console.log(this.name + " is allowed: " + this.can_take);
      this.IsChosen = IsFromChosencourses;
      this.backgColor = (this.IsChosen) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
    }
    
    ButtonClicked ()
    {
      if (this.IsChosen)
      {
        if (!info.courseChoosed.includes(this)) {
          addNewLesson(this.complete_course_number);
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
        // console.log("info.courseChoosed", info.courseChoosed)
        // setChosenCourses(info.courseChoosed);
        // let NewTimeTable = [...ChosenCourses] //UNNIIIIIIQUIIIIFYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
        // console.log("NewTime", info.courseChoosed)
        // settimetable(info.courseChoosed);
        // closeLesson(false, lessons);
        // setChosenCourses(info.co)
        this.IsChosen = false;
      }
      setChosenCoursesChanged(prev => !prev);
    }
  }
  let [timetable, settimetable] = React.useState([]);

  

  

  timetable = uniquifyArrayByKey(timetable, "complete_course_number")
  const keyedTimetable = useMemo(() => {                             // Mapping the courses into keyedTimetable
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

    const NumInEachSlot = createCourseGroupsArray(timetable);

    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        currentPeriod.course_times.forEach(time => {

          const day = time.course_day;

          let TimeIndex = time.course_time_representation;
          if (TimeIndex === undefined )
          {
            TimeIndex = mapTimeToIndex(time.course_start_time);
          }

          NumInEachSlot[day][TimeIndex]++;

          let count = NumInEachSlot[day][TimeIndex];
          try {
            lessonsKeyedByDayAndPeriod[day][TimeIndex][count] = currentPeriod;
          }
          catch (error) {
            console.log("ERROR is: " + error);
            // handleOpenPopup;
          }
          
        }
        );
        // let count = NumInEachSlot[currentPeriod.day][mapTimeToIndex(currentPeriod.time)];
        // lessonsKeyedByDayAndPeriod[currentPeriod.day][mapTimeToIndex(currentPeriod.time)][count] = currentPeriod
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
  
  
  return (
    <>
      <Row>
        <Col>
          <Card className="TableCard">
            <CardHeader className="MainCardHeader text-right">
              <CardTitle style={{fontSize:"25px"}}>
                پنل دروس
              </CardTitle>
              <Button //className="HomeButton"
                // class="HomeButton tim-icons icon-double-right"
                href="/admin/page"
                className="HomeButton tim-icons icon-double-right"
              >
                {/* <img src={HomeIcon} alt="Button Image" /> */}
                {/* خانه */}
              </Button>
            </CardHeader>
            <CardBody>
              <Row className="CardBodyRow">
                {/* <Col className="HomePageButtonCol">
                  
                </Col> */}
                
                <Col className="SelectCol">
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
                <Col className="ToggleCol">
                  <div className="SwitchCard">
                      <p className="SwitchLabel"> 
                        {/* <ReactSwitch className="Switch"
                            checked={SwitchChecked}
                            onChange={handleSwitchChange}
                          /> */}
                          <br/>
                        فقط دروس قابل اخذ
                     </p>
                  </div>
                </Col>
              </Row>
              <Table className="ClassesTable">
                <thead className="text-primary TableHead">
                  <tr>
                    <th className="table-head text-center "></th>
                    <th className="table-head text-center ">۷:۳۰ تا ۹</th>
                    <th className="table-head text-center ">۹ تا ۱۰:۳۰</th>
                    <th className="table-head text-center ">۱۰:۳۰ تا ۱۲</th>
                    <th className="table-head text-center ">۱۲ تا ۱:۳۰</th>
                    <th className="table-head text-center ">۱:۳۰ تا ۳</th>
                    <th className="table-head text-center ">۳ تا ۴:۳۰  </th>
                    <th className="table-head text-center ">۴:۳۰ تا ۶  </th>
                    <th className="table-head text-center ">۶ تا ۷:۳۰  </th>
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

