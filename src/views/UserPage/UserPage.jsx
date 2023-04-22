import React from "react";
import classNames from "classnames";
import profImage from "./image1.png";


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
import "./UserPage.css"
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png"
import dataJson from "../../assets/data/week.json"
import HomeCardBar from "../../components/HomePageItems/HomeCardBar";
import courseState from "../../components/LessonSidebar/LessonSidebar.jsx";
import { useInfo } from "../../contexts/InfoContext";
import courseGroups from"./courseGroups.json";


export default function UserPage() {
  let [data, setData] = React.useState(dataJson)
  let { info } = useInfo();
  // const [info, dispatch] = useReducer(r, useInfo());
  //const[info,setInfo]=React.useState(useInfo());
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

      <Row>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>
              

              <div className="overflow-auto">
                {/* <Table className="tablesorter" responsive> */}
                <div className="chart">{lessons()}</div>
                {/* </Table> */}
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>

              <div className="overflow-auto">
                <div></div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

