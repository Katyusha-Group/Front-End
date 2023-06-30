import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import Select from "react-select";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import DayRow from './DayRow';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import "./CoursesPanel.css"
import ReactSwitch from "react-switch";
import HomeIcon from './home.png';
import { size } from "lodash";
export default function CoursesPanel() {

  // Token
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

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
        let NewTimeTable = [...courses, ...DepartmentCourses];
        settimetable(NewTimeTable);
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
      // showLoading();
      let temp = timetable.filter(course => course.can_take);
      console.log("temp is: " + temp);
      settimetable(temp);
      // closeLoading();
    }
    else
    {
      setChosenCoursesChanged(prev => !prev);
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
      // this.can_take = this.IsAllowed(this.base_course_number);
      this.can_take = props.is_allowed;
      console.log(this.name + " is allowed: " + this.can_take);
      this.IsChosen = IsFromChosencourses;
      // this.IsInTheChosenCourses = false;
      // for (let i = 0; i < ChosenCourses.length; i++) {
      //   if (ChosenCourses[i] !== null && ChosenCourses[i].complete_course_number === obj.complete_course_number) {
      //     IsInTheChosenCourses = true;
      //     break;
      //   }
      // }
      // if (ChosenCourses.includes(this)) {
      //   this.IsInTheChosenCourses = true;
      // }
      // this.backgColor = (this.IsInTheChosenCourses) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
      this.backgColor = (this.IsChosen) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
      // console.log(this.name + " has color of " + this.backgColor);
    }

    // componentDidMount()
    // {
    //     fetch("https://www.katyushaiust.ir/departments/", {
    //     headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setAllowed(data);
    //       console.log("ALLLLOOOWWEDDD SET: " + Allowed);
    //       // let temp1 = JSON.stringify(Allowed);
    //       // console.log("Allowed Courses are: " + Allowed);
    //       // return data;
    //     });
    // }

    // IsAllowed(base_course_number)                              // Checks if the input course is in the allowed lessons or not
    // {
    //   // let AllowedLess = FindAllowedLessons();
    //   console.log("base course number is: " + base_course_number);
    //   console.log ("ALLOEWED ASDKSDJSD1: " + Allowed);
      
    //   console.log ("ALLOEWED ASDKSDJSD2: " + Allowed);
    //   console.log("Is allowed called");
    //   console.log("dept ID is: " + this.DepartmentID);
    //   for (let i = 0; i < Allowed.length; i++) {
    //     console.log("Entered LOOP");
    //     console.log ("DEPT ID IN LOOP IS: " + Allowed[i].id);
    //     if (Allowed[i].id === this.DepartmentID && Allowed[i].base_courses.length > 0) {
    //       console.log("Checking " + Allowed[i].name);
    //       for (let j = 0; j < Allowed[i].base_courses.length; j++) {
    //         if (Allowed[i].base_courses[j].course_number === base_course_number) {
    //           console.log(this.name + " is allowed");
    //           return true;
    //         }
    //       }
    //     }
    //   }
    //   return false;
    // }

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
        // console.log("timetable", timetable)
        // entry.Show = false;
        // console.log("Entry show is: " + entry.Show);
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
      // addNewLesson(this.complete_course_number);
      // console.log("Hello World!");
      // this.IsChosen = !this.IsChosen;
      // let NewTimeTable = [...ChosenCourses, ...DepartmentCourses];
      // settimetable(NewTimeTable);
      // const chcourses = info.courseChoosed.map(course => new Course(course, true));
      setChosenCoursesChanged(prev => !prev);
      // setChosenCourses(chcourses);
      // settimetable(chcourses);
      
    }
  }



  let [timeTableChanged, settimeTableChanged] = React.useState(false);

  



  let [timetable, settimetable] = React.useState([]);



  function AppendToTimetable(ToBeAppended) {
    let NewTimeTable = [...timetable, ...ToBeAppended];
    settimetable(NewTimeTable);
    settimetable(uniquifyArrayByKey(timetable, "complete_course_number"));
    return (timetable);
  }


  function addNewLesson(num) {                                        // Add a lesson
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
        // const dataArray = JSON.parse(data);
        const courses = data.map(course => new Course(course, true));
        // setChosenCourses(data);
        setChosenCourses(courses);
        // setChosenCoursesChanged(prev => !prev);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  function mapTimeToIndex(start_time) {                               // Time Index finder
    const times = [
      "07:30:00",
      "09:00:00",
      "10:30:00",
      "12:00:00",
      "13:30:00",
      "15:00:00",
      "16:30:00",
      "18:00:00",
    ];
    let index = times.findIndex(time => time === start_time);
    if (index === -1) {
      const times2 = [
        "08:00:00",
        "09:30:00",
        "11:00:00",
        "12:30:00",
        "14:00:00",
        "15:30:00",
        "17:00:00",
        "18:30:00",
      ];
      let index2 = times2.findIndex(time => time === start_time);
      if (index2 === -1) {
        const times3 = [
          "07:00:00",
          "08:30:00",
          "10:00:00",
          "11:30:00",
          "13:00:00",
          "14:30:00",
          "16:00:00",
          "17:30:00",
        ];
        return times3.findIndex(time => time === start_time);
      }
      return index2;
    }
    return index;
  }

  function createCourseGroupsArray(courses) {                         // Creates an array to store number of courses in each time slot
    const courseGroups = [];
    for (let i = 0; i < 6; i++) {
      courseGroups[i] = Array(8).fill(0);
    }
    return courseGroups;
  }

  function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
    return arr.filter((item, index) => {
      return (
        arr.findIndex((element) => element[key] === item[key]) === index
      );
    });
  }

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
            <CardHeader className="text-right">
              {/* <Row>
                <Col> */}
                  <CardTitle style={{fontSize:"25px"}}>
                    پنل دروس
                  </CardTitle>
                {/* </Col>
              </Row> */}
            </CardHeader>
            <CardBody>
              <Row className="CardBodyRow">
                <Col className="HomePageButtonCol">
                  <button className="HomeButton"
                    // class="HomeButton tim-icons icon-double-right"
                    href="/admin/page"
                  >
                    <img src={HomeIcon} alt="Button Image" />
                    {/* خانه */}
                  </button>
                </Col>
                <Col className="ToggleCol">
                  <div className="SwitchCard">
                      <p className="SwitchLabel"> 
                        <ReactSwitch className="Switch"
                            checked={SwitchChecked}
                            onChange={handleSwitchChange}
                          />
                          <br/>
                        فقط دروس قابل اخذ
                     </p>
                  </div>
                </Col>
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

