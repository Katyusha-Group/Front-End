import React from "react";
import { useMemo } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./CoursesPanel.css"
import dataJson from "./Classes"
// import { addNewLesson, changeInfo } from "../UserPage/UserPage"

export default function CoursesPanel() {
  const { info, changeInfo } = useInfo();
  let timetable = dataJson;
  // let [timetable, settimetable] = React.useState([]);
  // const tokenJson = localStorage.getItem("authTokens");
  // const tokenClass = JSON.parse(tokenJson);
  // const token = tokenClass.token.access;
  // React.useEffect(() => {
  //   fetch("https://katyushaiust.ir/allcourses-based-department/13", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //console.log("DATA IS::::::: " + data);
  //       settimetable(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  
  // function addNewLesson(num) {
  //   const tokenJson = localStorage.getItem("authTokens");
  //   const tokenClass = JSON.parse(tokenJson);
  //   // console.log("tokenClass", tokenClass);
  //   const token = tokenClass.token.access;
  //   // const response = await fetch("https://katyushaiust.ir/accounts/login/", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({
  //   //     username: formData.email,
  //   //     password: formData.password,
  //   //   }),
  //   // });
  //   // const data = await response.json();
  //   // console.log(`num is : ${num}`);
  //   // console.log(`type :`, typeof num);
  
  //   fetch("https://www.katyushaiust.ir/courses/my_courses/", {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       complete_course_number: num,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("gjgjhdsfffffhs post successfully");
  //       console.log("put data", data);
  //       // setData(data);
  //     })
  //     .catch((error) => console.error(error));
  //   // console.log(data);
  //   const activeRoute = (routeName) => {
  //     return location.pathname === routeName ? "active" : "";
  //   };
  // }

  function mapTimeToIndex (start_time) {
    const times = [
      "7:30:00",
      "9:00:00",
      "10:30:00",
      "12:00:00",
      "13:30:00",
      "15:00:00",
      "16:30:00",
      "18:00:00",
    ];
    return times.findIndex(time => time === start_time);
  }

  function createCourseGroupsArray (courses)
  {
    const courseGroups = [];
    for (let i=0; i<6; i++)
    {
      courseGroups[i] = Array(8).fill(0);
    }
    // courses.forEach(course => {
    //   const day = parseInt(course.day, 10);
    //   const timeIndex = mapTimeToIndex(course.time);
    //   courseGroups[day][timeIndex]++;
    // });
    return courseGroups;
  }

  const keyedTimetable = useMemo(() => {
    const emptySection = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null })
    const emptyDay = () => ({ 0: emptySection(), 1: emptySection(), 2: emptySection(), 3: emptySection(), 4: emptySection(), 5: emptySection(), 6: emptySection(), 7: emptySection() })
    const NumInEachSlot = createCourseGroupsArray(timetable)
    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        NumInEachSlot[currentPeriod.day][mapTimeToIndex(currentPeriod.time)]++;
        let count = NumInEachSlot[currentPeriod.day][mapTimeToIndex(currentPeriod.time)];
        lessonsKeyedByDayAndPeriod[currentPeriod.day][mapTimeToIndex(currentPeriod.time)][count] = currentPeriod
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
          return (
            <div>
              {entry !== null && (
                <div className="Course" color="primary">
                  {entry.name} ({entry.class_gp})
                  <br/>
                  <button className="btn-fill-AddCourseButton" onClick={() => {
                      //console.log("x", x);
                      //addNewLesson(x.complete_course_number);
                      //changeInfo("courseChoosed", [...info.courseChoosed, x]);
                      console.log("info", info.courseChoosed);
                    }}>
                      +
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
          <td className="CoursesPanel_column" key={time}>
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
                <CardTitle tag="h4">برنامه هفتگی</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="ClassesTable" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center "></th>
                      <th className="text-center ">۷:۳۰ تا ۹</th>
                      <th className="text-center ">۹ تا ۱۰:۳۰</th>
                      <th className="text-center ">۱۰:۳۰ تا ۱۲</th>
                      <th className="text-center ">۱۲ تا ۱:۳۰</th>
                      <th className="text-center ">۱:۳۰ تا ۳</th>
                      <th className="text-center ">۳ تا ۴:۳۰  </th>
                      <th className="text-center ">۴:۳۰ تا ۶  </th>
                      <th className="text-center ">۶ تا ۷:۳۰  </th>
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

