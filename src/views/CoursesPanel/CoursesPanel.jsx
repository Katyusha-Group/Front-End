import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import Select from "react-select";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  View
} from "reactstrap";
import "./CoursesPanel.css"
import ReactSwitch from "react-switch";
export default function CoursesPanel() {
  const { info, changeInfo } = useInfo();
  const [DepartmentOptions, setDepartmentOptions] = React.useState([]);
  const [SwitchChecked, setSwitchChecked] = React.useState(false);

  const handleSwitchChange = val => {
    setSwitchChecked(val)
  }

  let [ChosenCourses, setChosenCourses] = React.useState([]);
  let [SelectedDepartment, setSelectedDepartment] = React.useState([]);
  let [DepartmentCourses, setDepartmentCourses] = React.useState([]);
  let [Allowed, setAllowed] = React.useState([]);
  let [timetable, settimetable] = React.useState([]);

  // Token
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

  React.useEffect(() => {                                             // Already Chosen Lessons
    fetch("https://www.katyushaiust.ir/courses/my_courses", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setChosenCourses(data);
        changeInfo("courseChoosed", data);
        settimetable(data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);

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
        setChosenCourses(data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  React.useEffect(() => {                                             // Allowed Lessons
    fetch("https://www.katyushaiust.ir/departments/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllowed(data);
        // Allowed.map((dep, index) => {
        //   if (dep.base_courses.length > 0) {
        //     dep.base_courses.map((course, ind) => {
        //       console.log("Base courses courses: " + course.name);
        //     })
        //   }
        // })
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);

  function IsAllowed(base_course_number)                              // Checks if the input course is in the allowed lessons or not
  {
    console.log("Is allowed called");
    for (let i = 0; i < Allowed.length; i++) {
      if (Allowed[i].base_courses.length > 0) {
        for (let j = 0; j < Allowed[i].base_courses.length; j++) {
          if (Allowed[i].base_courses[j].course_number === base_course_number) {
            return true;
          }
        }
      }
    }
    return false;
  }

  React.useEffect(() => {                                             // Set Department Options
    fetch("https://www.katyushaiust.ir/departments/names")
      .then((response) => response.json())
      .then((DepartmentOptions) => {
        // console.log(DepartmentOptions);
        setDepartmentOptions(DepartmentOptions);
      });
  }, []);

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
      fontSize: "0.75rem",
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
          settimetable(data);
        })
        .catch((error) => console.error(error));
    }
  }, [SelectedDepartment]);

  function AddShowAttribute(obj) {                                    // Adding Show Attribute to object
    const UpdatedObj = { ...obj, Show: true };
    return UpdatedObj;
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
    const emptySection = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null });
    const emptyDay = () => ({ 0: emptySection(), 1: emptySection(), 2: emptySection(), 3: emptySection(), 4: emptySection(), 5: emptySection(), 6: emptySection(), 7: emptySection() });
    const NumInEachSlot = createCourseGroupsArray(timetable);

    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        currentPeriod.course_times.forEach(time => {
          const day = time.course_day;

          const startTime = time.course_start_time;

          let TimeIndex = mapTimeToIndex(startTime);

          if (TimeIndex === -1) {
            TimeIndex = 7;
          }
          NumInEachSlot[day][TimeIndex]++;

          let count = NumInEachSlot[day][TimeIndex];

          if (SwitchChecked) {                                       // Filter allowed courses
            let base_course_number = parseInt(currentPeriod.complete_course_number.substring(0, currentPeriod.complete_course_number.length - 3));
            // console.log ("Base course is: " + base_course_number + " Course name is: " + currentPeriod.name);

            if (IsAllowed(base_course_number)) {
              // console.log (currentPeriod.name + " is allowed");
              // console.log ("The course is: " + currentPeriod.name);
              lessonsKeyedByDayAndPeriod[day][TimeIndex][count] = AddShowAttribute(currentPeriod);
            }
            else {
              // console.log (currentPeriod.name + " is NOOOOOOOOOOT allowed");
              // console.log ("The course is: " + currentPeriod.name);
            }
          }
          else {
            lessonsKeyedByDayAndPeriod[day][TimeIndex][count] = AddShowAttribute(currentPeriod);
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
  const DayPeriod = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        // const backgroundColor = (entry !== null && entry.can_take) ? "rgb(29, 113, 236)": "rgb(100, 100, 120)"; // Also makes the courses that don't have the attribute gray
        // const backgroundColor = (entry !== null && ChosenCourses.includes(entry)) ? "rgb(29, 113, 236)" : "hsl(100, 22%, 30%)";
        // console.log(backgroundColor);
        let IsInTheChosenCourses = false;
        for (let i = 0; i < ChosenCourses.length; i++) {
          if (ChosenCourses[i] !== null && entry !== null && ChosenCourses[i].complete_course_number === entry.complete_course_number) {
            IsInTheChosenCourses = true;
          }
        }
        const backgroundColor = (entry !== null && IsInTheChosenCourses) ? "rgb(29, 113, 236)" : "hsl(235, 22%, 30%)";
        return (
          <div>
            {entry !== null && entry.Show && (
              <div className="Course"
                style={{ backgroundColor: backgroundColor }}
              >
                {entry.name} ({entry.class_gp})
                <br />
                <button className="btn-fill-AddCourseButton"
                  name="AddCourseButton"
                  onClick={() => {
                    if (!info.courseChoosed.includes(entry)) {
                      addNewLesson(entry.complete_course_number);
                      changeInfo("courseChoosed", [...info.courseChoosed, entry]);
                    }
                  }}>
                  +
                </button>
                <button
                  name="RemoveCourseButton"
                  className="btn-fill-RemoveCourseButton"
                  onClick={() => {
                    // entry.Show = false;
                    // console.log("Entry show is: " + entry.Show);
                    addNewLesson(entry.complete_course_number);
                    changeInfo(
                      "courseChoosed",
                      info.courseChoosed.filter(
                        (item) =>
                          item.complete_course_number !==
                          entry.complete_course_number
                      )
                    );
                    setChosenCourses(info.courseChoosed);
                    let NewTimeTable = [...ChosenCourses, ...timetable] //UNNIIIIIIQUIIIIFYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
                    settimetable(NewTimeTable);
                    // closeLesson(false, lessons);
                  }}
                >
                  x
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
  const DayRow = ({ periods, dayName }) => (
    <tr>
      <td className="CoursesPanel_column text-center">{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
        return (
          <td className="CoursesPanel_column2" key={time}>
            {DayPeriod(entry)}
          </td>
        )
      })}
    </tr>
  )

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="text-right">
              <Select
                options={DepartmentOptions}
                styles={customStyles}
                isRtl
                placeholder="دانشکده مورد نظر را انتخاب کنید"
                name="SelectDepartment"
                value={SelectedDepartment.name}
                onChange={handleDepartment}
              />
              <ReactSwitch className="Switch"
                checked={SwitchChecked}
                onChange={handleSwitchChange}
              />

            </CardHeader>
            <CardBody>
              <Table className="ClassesTable">
                <thead className="text-primary">
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
                  <DayRow dayName="پنجشنبه" periods={keyedTimetable[5]} />
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

