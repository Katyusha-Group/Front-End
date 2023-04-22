
import React from "react";
//import classNames from "classnames";
import { useMemo } from 'react';
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
  UncontrolledTooltip
} from "reactstrap";
import "./CoursesPanel.css"
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png"
import dataJson from "./Classes"


export default function CoursesPanel() {
  // const timetable = [
  //   {
  //   "id" : 7,
  //   "day" : "2",
  //   "time" : "6",
  //   "name" : "آهنگ",
  //   "teacher" : "ملکی",
  //   "room" : "A-1",
  //   "long" : "1"
  //   },
  //   {
  //       "id" : 8,
  //       "day" : "3",
  //       "time" : "7",
  //       "name" : "دینی",
  //       "teacher" : "رحمانی",
  //       "room" : "B-2",
  //       "long" : "1"
  //   }
  // ]
  // console.log(timetable)
  // let timetable = require('../../assets/data/week.json');
  // let timetable = require('../../assets/data/week.json');
  //const timetable = JSON.parse('../../assets/data/week.json');
  // let [data, setData] = React.useState(dataJson)
  // console.log(data)
  //console.log(timetable[0].day);
  // let [timetable, setTimetable] = React.useState(dataJson)
  // const timetable = JSON.parse('./Classes.json'); 
  // console.log(timetable)
  const timetable = dataJson;
  const keyedTimetable = useMemo(() => {
    const emptyDay = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null })
    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        lessonsKeyedByDayAndPeriod[currentPeriod.day][currentPeriod.time] = currentPeriod
        console.log(lessonsKeyedByDayAndPeriod)
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
  const DayRow = ({ periods, dayName }) => (
    <tr>
      <td className="CoursesPanel_first_column text-center ">{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
        return (
          <td key={time}>
            {entry !== null && (
              <div className="Course">
                {entry.name}
                {/* <br />
                {entry.teacher}
                <br />
                {entry.room} */}
              </div>
              // <Card>
              //   {entry.name}
              // </Card>
            )}
          </td>
        )
      })}
    </tr>
  )
  return (
    <>
      <Row>   
          <Col lg="12" sm="10">
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

