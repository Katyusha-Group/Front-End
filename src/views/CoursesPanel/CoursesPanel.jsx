
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
import dataJson from "../../assets/data/week.json"


export default function CoursesPanel() {
  const timetable = [ // You did not show where you define this as you did not post your whole component, but you can leave it wherever it is currently.
    {
        "id" : 1,
        "day" : "0",
        "time" : "3",
        "name" : "Math",
        "teacher" : "X",
        "room" : "A-1",
    },
    {
        "id" : 1,
        "day" : "0",
        "time" : "1",
        "name" : "Art",
        "teacher" : "Y",
        "room" : "B-3"
    }
  ]

  const keyedTimetable = useMemo(() => {
    const emptyDay = () => ({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null })
    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        lessonsKeyedByDayAndPeriod[currentPeriod.day][currentPeriod.time] = currentPeriod
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
              <div>
                {entry.name}
                <br />
                {entry.teacher}
                <br />
                {entry.room}
              </div>
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
                  
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
  );
}

