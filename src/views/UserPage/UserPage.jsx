
import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
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
import "./UserPage.css"
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png"
import dataJson from "../../assets/data/week.json"

export default function UserPage() {
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
          {/* <UncontrolledTooltip
            delay={0}
            target={lesson.id}
            placement="right"
          >
            Edit Task
          </UncontrolledTooltip> */}
        </div>
      );
    })
  }
  return (
    <>
      <div className="chart">{lessons()}</div>
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
      {/* <Row>
          
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
                      <td className="UserPage_first_column text-center  ">شنبه</td>
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
                      <td className="UserPage_first_column text-center ">یکشنبه</td>
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
                      <td className="UserPage_first_column text-center ">دوشنبه</td>
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
                      <td className="UserPage_first_column text-center ">سه‌شنبه</td>
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
                      <td className="UserPage_first_column text-center ">چهارشنبه</td>
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
                      <td className="UserPage_first_column text-center ">پنج‌شنبه</td>
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
                      <td className="UserPage_first_column text-center ">جمعه</td>
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
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
    </>
  );
}

