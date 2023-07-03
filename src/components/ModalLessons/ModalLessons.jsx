import React from "react";
import "./ModalLesson.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Timeline from "../Timeline/Timeline";
import TeacherTimeline from "../TeacherTimeline/TeacherTimeline";
import {
  dayOfWeek,
  timeStringToFloat,
  sexTostring,
} from "../../global/functions";
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
  const x = props.show.data;
  console.log("Info x", x);
  if (Object.keys(x).length != 0) {
    return (
      <Modal
        dialogClassName={"courseProfileModal"}
        centered
        show={props.show.flag}
        cancel={props.close}
        onHide={props.close}
        // centered
      >
        <div>
          <Modal.Header>
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
                  backgroundColor: "rgb(75 49 78)",
                }}
              >
                <CardBody className="ModalCourseCardBody">
                  <img
                    className="ModalprofessorImage"
                    src={x.teachers[0].teacher_image}
                    alt="professorImage"
                  />
                  <div className="infoPart">
                    <CardHeader className="modalHeader"></CardHeader>
                    <Row>
                      <Col className="text-right" md="6">
                        {x.name} (گروه {x.group_number})
                      </Col>
                      <Col className="text-right" md="6">
                        جنسیت: {sexTostring(x.sex)}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-right" md="6">
                        استاد: {x.teachers[0].name}
                      </Col>
                      <Col className="text-right" md="6">
                        زمان برگزاری :
                        {x.course_times.map((t) => (
                          <text>{dayOfWeek(t.course_day)} </text>
                        ))}
                        <text>
                          {timeStringToFloat(
                            x.course_times[0].course_start_time
                          )}{" "}
                          تا{" "}
                          {timeStringToFloat(x.course_times[0].course_end_time)}
                        </text>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-right" md="6">
                        <div style={{ display: "flex" }}>
                          کد درس:
                          <p
                            style={{
                              direction: "ltr",
                              color: "rgb(199, 193, 193)",
                            }}
                          >
                            {x.complete_course_number}
                          </p>{" "}
                        </div>
                      </Col>
                      <Col className="text-right" md="6" dir="ltr">
                        تاریخ امتحان پایانی: {x.exam_times[0].date}
                        <text>
                          {" "}
                          ساعت
                          {timeStringToFloat(
                            x.exam_times[0].exam_start_time
                          )}{" "}
                          تا {timeStringToFloat(x.exam_times[0].exam_end_time)}
                        </text>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-right" md="6">
                        ثبت نام شده: {x.registered_count} از {x.capacity}
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
                    <Row>
                      <Col className="text-right" md="6">
                        تعداد اخذ شده در کاتیوشا: {x.added_to_calendar_count}
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>

              <Row>
                <Col md="12" style={{ overflow: "hidden" }}>
                  <TeacherTimeline show={props} />
                  {/* <Timeline show={props} /> */}
                </Col>
              </Row>
            </CardBody>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
};

export default ModalLessons;
