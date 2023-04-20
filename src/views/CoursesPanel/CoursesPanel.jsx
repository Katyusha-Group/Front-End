
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
  UncontrolledTooltip
} from "reactstrap";
import "./CoursesPanel.css"
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png"
import dataJson from "../../assets/data/week.json"


export default function CoursesPanel() {
  let [data, setData] = React.useState(dataJson)
  console.log(data)
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  let defu = 20;
  let length = 9.3;
  let top_right = 10.8;
  let top_defu = 13;
  function lessons(){
    return data.map((lesson) => {
      return (
        <div key={lesson.id} >
          <div 
            id = {lesson.id}
            className="course text-center"
            style={{
              top: `${defu + length * lesson.day}%`,
              right: `${top_defu + top_right * lesson.time}%`,
              width: `${lesson.long == 1 ? 5 : 7.5}rem`,
            }}
          >
            {lesson.name}
          </div>
        </div>
      );
    })
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
                    <tr>
                      <td className="CoursesPanel_first_column text-center  ">شنبه</td>
                      <td>
                        <div id="01"></div>
                      </td>
                      <td>
                        <div id="02"></div>
                      </td>
                      <td>
                        <div id="03"></div>
                      </td>
                      <td>
                        <div id="04"></div>
                      </td>
                      <td>
                        <div id="05"></div>
                      </td>
                      <td>
                        <div id="06"></div>
                      </td>
                      <td>
                        <div id="07"></div>
                      </td>
                      <td className="text-center">
                        <div id="08"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="CoursesPanel_first_column text-center ">یکشنبه</td>
                      <td>
                        <div id="11"></div>
                      </td>
                      <td>
                        <div id="12"></div>
                      </td>
                      <td>
                        <div id="13"></div>
                      </td>
                      <td>
                        <div id="14"></div>
                      </td>
                      <td>
                        <div id="15"></div>
                      </td>
                      <td>
                        <div id="16"></div>
                      </td>
                      <td>
                        <div id="17"></div>
                      </td>
                      <td className="text-center">
                        <div id="18"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="CoursesPanel_first_column text-center ">دوشنبه</td>
                      <td>
                        <div id="21"></div>
                      </td>
                      <td>
                        <div id="22"></div>
                      </td>
                      <td>
                        <div id="23"></div>
                      </td>
                      <td>
                        <div id="24"></div>
                      </td>
                      <td>
                        <div id="25"></div>
                      </td>
                      <td>
                        <div id="26"></div>
                      </td>
                      <td>
                        <div id="27"></div>
                      </td>
                      <td className="text-center">
                        <div id="28"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="CoursesPanel_first_column text-center ">سه‌شنبه</td>
                      <td>
                        <div id="31"></div>
                      </td>
                      <td>
                        <div id="32"></div>
                      </td>
                      <td>
                        <div id="33"></div>
                      </td>
                      <td>
                        <div id="34"></div>
                      </td>
                      <td>
                        <div id="35"></div>
                      </td>
                      <td>
                        <div id="36"></div>
                      </td>
                      <td>
                        <div id="37"></div>
                      </td>
                      <td className="text-center">
                        <div id="38"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="CoursesPanel_first_column text-center ">چهارشنبه</td>
                      <td>
                        <div id="41"></div>
                      </td>
                      <td>
                        <div id="42"></div>
                      </td>
                      <td>
                        <div id="43"></div>
                      </td>
                      <td>
                        <div id="44"></div>
                      </td>
                      <td>
                        <div id="45"></div>
                      </td>
                      <td>
                        <div id="46"></div>
                      </td>
                      <td>
                        <div id="47"></div>
                      </td>
                      <td className="text-center">
                        <div id="48"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="CoursesPanel_first_column text-center ">پنج‌شنبه</td>
                      <td>
                        <div id="51"></div>
                      </td>
                      <td>
                        <div id="52"></div>
                      </td>
                      <td>
                        <div id="53"></div>
                      </td>
                      <td>
                        <div id="54"></div>
                      </td>
                      <td>
                        <div id="55"></div>
                      </td>
                      <td>
                        <div id="56"></div>
                      </td>
                      <td>
                        <div id="57"></div>
                      </td>
                      <td className="text-center">
                        <div id="58"></div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
  );
}

