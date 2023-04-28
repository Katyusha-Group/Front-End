
import React from "react";
import { useMemo } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import "./CoursesPanel.css"
// import dataJson from "./Classes"


export default function CoursesPanel() {
  // let timetable = dataJson;
  // console.log(timetable);
  // const keyedTimetable = useMemo(() => {
  //   const emptySection = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null })
  //   const emptyDay = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null })
  //   return timetable.reduce(
  //     (lessonsKeyedByDayAndPeriod, currentPeriod) => {
  //       lessonsKeyedByDayAndPeriod[currentPeriod.day][currentPeriod.time] = currentPeriod
  //       console.log(lessonsKeyedByDayAndPeriod)
  //       return lessonsKeyedByDayAndPeriod
  //     },
  //     {
  //       0: emptyDay(),
  //       1: emptyDay(),
  //       2: emptyDay(),
  //       3: emptyDay(),
  //       4: emptyDay(),
  //       5: emptyDay(),
  //     }
  //   )
  // }, [timetable])
  let [timetable, settimetable] = React.useState([]);
  //timetable = dataJson;
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  //const timetable;
  const token = tokenClass.token.access;
  React.useEffect(() => {
    fetch("http://katyushaiust.ir/allcoursesdepartment/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // window.timetable = data;
        settimetable(data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  const keyedTimetable = useMemo(() => {
    const emptySection = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null })
    //const emptyDay = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null })
    const emptyDay = () => ({ 0: emptySection(), 1: emptySection(), 2: emptySection(), 3: emptySection(), 4: emptySection(), 5: emptySection(), 6: emptySection(), 7: emptySection() })
    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        lessonsKeyedByDayAndPeriod[currentPeriod.day][currentPeriod.time][currentPeriod.count] = currentPeriod
        //console.log(lessonsKeyedByDayAndPeriod)
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
      {/* {console.log("+++++++++++++++++++++++++++++++")} */}
      {Object.entries(Section).map(([count, entry]) => {
          return (
            <div>
              {entry !== null && (
                // {console.log(entry.name)}
                <div className="Course" color="primary">
                  {entry.name}({entry.class_gp})
                </div>     
              )}     
            </div>
          )
      })}
    </div>
  )
  const DayRow = ({ periods, dayName }) => (
    //console.log("===================")
    //console.log(typeof periods)
    //console.log(periods)
    //console.log(periods[5])
    //console.log(periods[0])
    //console.log(periods[0][0] === null)
    <tr>
      <td className="CoursesPanel_first_column text-center">{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
        return (
          <td key={time}>
            {/* {entry !== null && (
              // <div>
              //   <div className="Course">
              //     {entry.name}
              //   </div>
              //   <div className="Course">
              //     {entry.name}
              //   </div>
              //   <div className="Course">
              //     {entry.name}
              //   </div>
              // </div>
              <div className="Course">
                {entry.name}
              </div>
            )} */}
            {/* {console.log("+++++++++++++++++++")}
            {console.log(entry === null)} */}
            {/* {console.log("222222222222222222222222222222222222")}
            {console.log(entry)} */}
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
                <Table className="tablesorter" responsive>
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
                  <tbody>
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

