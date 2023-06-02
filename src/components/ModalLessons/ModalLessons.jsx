import React from "react";
import "./ModalLesson.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Timeline from "../Timeline/Timeline";
import { dayOfWeek , timeStringToFloat , sexTostring} from "../../global/functions";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const ModalLessons = (props) => {
  console.log("PROPS in MODAL", props);
  const { info, changeInfo } = useInfo();
  const x=props.show.data;
  console.log("Info x", x);
  if(Object.keys(x).length!=0){
  return (
    <>
      <Modal
        show={props.show.flag}
        cancel={props.close}
        className="ModalLesson"
        // centered
      >
        <div >
          <Modal.Header className="ModalHeader">
            <button
              type="button"
              class="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="" aria-hidden="true" onClick={props.close}>
                &times;
              </span>
            </button>
          </Modal.Header>
          <Modal.Body className="loginLmsModalBody">
            {/* //////////////////////////////////////////////////////// */}

            {/* //////////////////////////////////////////////////////// */}
            {/* <CardHeader>{props.show.data.name}</CardHeader>
            <CardHeader className="modalHeader">{x.name} (گروه {x.class_gp})</CardHeader> */}
             <CardBody>
            <Card
                    className="ModalLessonCourseCard"
                    style={{
                      backgroundColor:
                        "#ab69b1",
                    }}
                  >
                    <CardBody className="courseCardBody">               
                        <img
                        className="ModalprofessorImage"
                        src={x.teacher.teacher_image}
                        alt="professorImage"
                      />
                      <div className="infoPart">
                      <CardHeader className="modalHeader"></CardHeader> 
                      <Row>
                  <Col className="text-right" md="6">
                    {x.name} (گروه {x.class_gp})
                  </Col>
                  <Col className="text-right" md="6">
                   جنسیت: {sexTostring(x.sex)}
                  </Col>
                </Row>
                <Row>
                <Col className="text-right" md="6">
                  استاد: {x.teacher.name}
                  </Col>
                <Col className="text-right" md="6">
                   زمان برگزاری :  
                          {x.course_times.map((t) => (
                            <text>{dayOfWeek(t.course_day)} </text>
                          ))}
                          <text>
                          {timeStringToFloat(x.course_times[0].course_start_time)}
                             {" "}
                          تا{" "}
                          {timeStringToFloat(x.course_times[0].course_end_time)}
                          </text>
                  </Col>
                </Row>
                <Row>
                <Col className="text-right" md="6">
                  کد درس: {x.complete_course_number}
                  </Col>
                  <Col className="text-right" md="6" dir="ltr">
                  
                  تاریخ امتحان پایانی: {x.exam_times[0].date}
                  <text>
                  {" "}
                  ساعت 
                          {timeStringToFloat(x.exam_times[0].exam_start_time)}
                             {" "}
                          تا{" "}
                          {timeStringToFloat(x.exam_times[0].exam_end_time)}
                  </text>
                </Col>
                </Row>
                <Row>
                <Col className="text-right" md="6">
                  ثبت نام شده: {x.registered_count}{" "} از {x.capacity}
                  </Col>
                  <Col className="text-right" md="6">
                    تعداد واحد های عملی:{x.practical_unit} 
                  </Col>
                </Row>
                
                <Row>
                <Col className="text-right" md="6">
                  تعداد در صف انتظار: {x.waiting_count}
                  </Col>
                  
                  <Col className="text-right" md="6">
                    تعداد کل واحد ها:{x.total_unit} 
                  </Col>
                </Row>
                      </div>
                    </CardBody>
                  </Card>
              {/* <Row>
                  <Col className="text-right" md="12">
                    ظرفیت: {props.show.data.capacity}
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Timeline show={props} />
                  </Col>
                </Row> */}
            </CardBody>
            
          </Modal.Body>
        </div>
      </Modal>
    </>
  );}
};

export default ModalLessons;
