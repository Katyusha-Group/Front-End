import React from "react";
import classNames from "classnames";

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
  UncontrolledTooltip,
} from "reactstrap";
// import * as chart from "../../assets/img/schedule_table.png"
//import * as chart from "../../assets/img/ExamChart.png"
import dataJson from "../../assets/data/exams.json";

import { useInfo } from "../../contexts/InfoContext";

import "./ExamChart.css";

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
function ExamChart() {
  const [data, setData] = React.useState(dataJson);
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });

  const { info, changeInfo } = useInfo();
  const [showLesson, setShowLesson] = React.useState(false);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  let defu = 15;
  let length = 12.7;
  let top_right = 4.9;
  let top_defu = 5.8;
  function closeLesson(open) {
    setShowLesson(false);
  }
  console.log(info.courseChoosed);
  function lessons() {
    return info.courseChoosed.map((lesson) => {
      let day = lesson.exam_times[0].date.split("-")[2] - 17;
      if (day < 0) day = day + 31;
      let time =
        (timeStringToFloat(lesson.exam_times[0].exam_start_time) - 8) / 2;
      return (
        <div key={lesson.id}>
          <div>
            <div
              id={lesson.id}
              className="exam text-center"
              style={{
                top: `${defu + length * time}%`,
                right: `${top_defu + top_right * day}%`,
              }}
            >
              <div
                style={{ height: "100%" }}
                onClick={() => setShowLesson(true)}
              >
                {lesson.name}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      {/* <div className="chart">{lessons()}</div> */}
      {/* <Form>
        <FormGroup>
          <Label for="exampleSelect"></Label>
          <Input className="select" type="select" name="select" id="exampleSelect">
            <option>ریاضی</option>
            <option>کامپایلر</option>
            <option>فیزیک</option>
            <option>ریزپر</option>
          </Input>
        </FormGroup>
      </Form> */}
      <Row>
        <Col lg="12" sm="12">
          <Card>
            {/* <CardHeader className="text-right">
              <CardTitle tag="h4">برنامه هفتگی</CardTitle>
            </CardHeader> */}
            <CardBody className="exam-card-body">
              <div className="overflow-auto">
                <div className="chart1">{lessons()}</div>
              </div>
              {/* <Table>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center "></th>
                    <th className="text-center ">17 خرداد</th>
                    <th className="text-center ">18</th>
                    <th className="text-center ">19</th>
                    <th className="text-center ">20</th>
                    <th className="text-center ">21</th>
                    <th className="text-center ">22</th>
                    <th className="text-center ">23</th>
                    <th className="text-center ">24</th>
                    <th className="text-center ">25</th>
                    <th className="text-center ">26</th>
                    <th className="text-center ">27</th>
                    <th className="text-center ">28</th>
                    <th className="text-center ">29</th>
                    <th className="text-center ">30</th>
                    <th className="text-center ">31</th>
                    <th className="text-center ">1 تیر</th>
                    <th className="text-center ">2</th>
                    <th className="text-center ">3</th>
                    <th className="text-center ">4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Table_first_row">
                    <td className="Table_first_column text-center  ">8-10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="Table_first_column text-center ">10-12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="Table_first_column text-center ">12-14</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="Table_first_column text-center ">14-16</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="Table_first_column text-center ">16-18</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr className="Table_last_row">
                    <td className="Table_first_column text-center ">18-20</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center"></td>
                  </tr>
                </tbody>
              </Table> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ExamChart;
