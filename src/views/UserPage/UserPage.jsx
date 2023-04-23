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
import "./UserPage.css";
// import * as chart from "../../assets/img/schedule_table.png"
import * as chart from "../../assets/img/chart.png";
import dataJson from "../../assets/data/week.json";
import HomeCardBar from "../../components/HomePageItems/HomeCardBar";
import ModalLessons from "../../components/ModalLessons/ModalLessons.jsx";
import courseGroups from "./courseGroups.json";
import sampleProfile from "./image1.png";
import { useInfo } from "../../contexts/InfoContext";

export default function UserPage() {
  const [data, setData] = React.useState(dataJson);
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });
  const [showLesson, setShowLesson] = React.useState(false);
  console.log(data);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showX, setShowX] = React.useState("none");
  let defu = 20;
  let length = 9.3;
  let top_right = 10.8;
  let top_defu = 13;
  const {info,changeInfo}=useInfo()
  function closeLesson(open) {
    setShowLesson(false);
  }
  function lessons() {
    return data.map((lesson) => {
      return (
        <div key={lesson.id}>
          <div>
            <div
              id={lesson.id}
              className="course text-center"
              style={{
                top: `${defu + length * lesson.day}%`,
                right: `${top_defu + top_right * lesson.time}%`,
                width: `${lesson.long == 1 ? 11.5 : 16}%`,
              }}
              onMouseOver={() => document.getElementById(lesson.id + "x").style.display = 'block'} 
              onMouseOut={() => document.getElementById(lesson.id + "x").style.display = 'none'}
            >
              <button
                className="lesson_button"
                onClick={() => {
                  setData(data.filter((item) => item.name !== lesson.name));
                  setShowLesson(false);
                  console.log("false");
                }}
                id={lesson.id + "x"}
              >
                x
              </button>
              <div style={{height: "100%"}} onClick={() => setShowLesson(true)}>{lesson.name}</div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      <Row>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>
              <div className="overflow-auto">
                <div className="chart">{lessons()}</div>
                <ModalLessons
                  show={showLesson}
                  close={() => setShowLesson(false)}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" sm="10">
          <Card>
            <CardBody className="courseGroupCard">
              {/* {
                courseGroups.map(x=>
                <Card >
                  <CardBody className="courseCard">
                    <img className="professorImage" src={sampleProfile} alt="professorImage"/>
                    <div>
                    <p>{x.name}</p>  
                    <p>{x.professor}</p>  
                    <p>{x.days}</p>  
                    <p>{x.endTime} - {x.startTime}</p>  
                    </div>
                  </CardBody>
                </Card>
                  )
              } */}
              {/* <div className="overflow-auto"> */}
                
                <div>{info.courseGroupID}</div>
              {/* </div> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
