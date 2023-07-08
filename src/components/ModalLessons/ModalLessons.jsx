import React from "react";
import "./ModalLesson.css";
import { CardGroup, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Timeline from "../Timeline/Timeline";
import TeacherTimeline from "../TeacherTimeline/TeacherTimeline";

import classNames from "classnames";
import {
  dayOfWeek,
  timeStringToFloat,
  sexTostring,
  convertTime,
} from "../../global/functions";
// reactstrap components
import {
  Button,
  ButtonGroup,
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
// const [bigChartData, setbigChartData] = React.useState("data1");
// const setBgChartData = (name) => {
//   setbigChartData(name);
// };
const ModalLessons = (props) => {
  // console.log("PROPS in MODAL", props);
  const { info, changeInfo } = useInfo();
  const x = props.show.data;

  const [timelineData, setTimelineData] = React.useState("data1");
  const setTimeData = (name) => {
    setTimelineData(name);
  };
  // console.log("Info x", x);
  if (Object.keys(x).length != 0) {
    return (
      <Modal
        dialogClassName={"courseProfileModal"}
        centered
        show={props.show.flag}
        cancel={props.close}
        onHide={props.close}
        className="ModalLessonCourse"
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
                // style={{
                //   backgroundColor: "rgb(75 49 78)",
                // }}
              >
                <CardBody className="ModalCourseCardBody">
                  <img
                    className="ModalprofessorImage"
                    src={x.teachers[0].teacher_image}
                    alt="professorImage"
                  />
                  <div className="ModalLessoninfoPart">
                    <CardHeader className="modalHeader">
                      <p
                        md="12"
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#c7c1c1",
                        }}
                      >
                        {x.name} (گروه {x.group_number})
                      </p>
                    </CardHeader>
                    <Row>
                      <Col md="6">
                        <Card className="ModalLessondataCard1">
                          <Col
                            className="text-right"
                            style={{ marginRight: "0px !important" }}
                          >
                            <p className="courseTitle">استاد&nbsp;&nbsp;</p>
                            {"  "}
                            {x.teachers.map((y) => y.name).join(" , ")}
                          </Col>
                          <Col
                            className="text-right"
                            style={{ display: "flex" }}
                          >
                            <p className="courseTitle">کد درس&nbsp;&nbsp;</p>
                            <p
                              style={{
                                direction: "ltr",
                                color: "#dddddd",
                              }}
                            >
                              {x.complete_course_number}
                            </p>

                            {"  "}
                          </Col>
                          <Col
                            className="text-right"
                            style={{ marginRight: "0px !important" }}
                          >
                            <p className="courseTitle">
                              {" "}
                              جنسیت&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            </p>
                            {"  "}
                            {sexTostring(x.sex)}
                          </Col>
                          {/* <text>
                        &nbsp;
                        </text> */}
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="ModalLessondataCard2">
                          <Col className="text-right">
                            <p className="courseTitleNotInline">زمان برگزاری</p>
                            {"  "}
                            {x.course_times.map((t) => (
                              <text>{dayOfWeek(t.course_day)} </text>
                            ))}
                            <text>
                              {convertTime(x.course_times[0].course_start_time)}{" "}
                              تا{" "}
                              {convertTime(x.course_times[0].course_end_time)}
                            </text>
                          </Col>
                          {x.exam_times.length === 0 ? null : (
                            <Col className="text-right">
                              <p className="courseTitleNotInline">
                                زمان آزمون پایانی
                              </p>

                              <text dir="ltr">
                                {"تاریخ :"}
                                {x.exam_times[0].date}
                              </text>
                              <text>
                                &nbsp; ساعت&nbsp;
                                {convertTime(
                                  x.exam_times[0].exam_start_time
                                )}{" "}
                                تا {convertTime(x.exam_times[0].exam_end_time)}
                              </text>
                            </Col>
                          )}
                        </Card>
                      </Col>
                      <Row>
                        <Card className="ModalLessondataCard3">
                          <Row>
                            <Col
                              className="text-right"
                              md="7"
                              style={{ marginRight: "0px !important" }}
                            >
                              <p className="courseTitle">
                                ثبت نام
                                شده&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              {x.registered_count} از {x.capacity}
                            </Col>
                            <Col className="text-right" md="5">
                              <p className="courseTitle">
                                تعداد واحد های عملی &nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              &nbsp;{x.practical_unit}&nbsp;{"واحد"}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-right" md="7">
                              <p className="courseTitle">
                                تعداد در صف
                                انتظار&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                              </p>
                              {x.waiting_count} {"نفر"}
                            </Col>

                            <Col className="text-right" md="5">
                              <p className="courseTitle">
                                تعداد کل واحد ها&nbsp;&nbsp;&nbsp;{" "}
                              </p>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {x.total_unit} {"واحد"}
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-right" md="12">
                              <p className="courseTitle">
                                {" "}
                                تعداد اخذ شده در کاتیوشا&nbsp;&nbsp;{" "}
                              </p>
                              {x.added_to_calendar_count} {"نفر"}
                            </Col>
                            <Col className="text-right" md="6">
                              <p className="courseTitle">
                                {" "}
                                قابل اخذ بودن این درس برای
                                شما&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              {x.is_allowed ? "بله" : "خیر"}
                            </Col>
                          </Row>
                        </Card>
                        {x.description === "nan" ? null : (
                          <Card className="ModalLessondataCard3">
                            <Row>
                              <Col className="text-right" md="12">
                                <p className="courseTitle">
                                  {" "}
                                  توضیحات&nbsp;&nbsp;{" "}
                                </p>
                                {x.description}
                              </Col>
                            </Row>
                          </Card>
                        )}
                      </Row>
                    </Row>
                    {/* <Card className="ModalLessondataCard1">
                   
                   
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
                    </Row> */}
                  </div>
                </CardBody>
              </Card>
              <Row>
                <Col sm="12">
                  <ButtonGroup
                    className="btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <Button
                      tag="label"
                      className={classNames("btn-simple", "week_chart-btn", {
                        active: timelineData === "data1",
                      })}
                      // color="primary"
                      id="0"
                      size="sm"
                      onClick={() => setTimeData("data1")}
                    >
                      <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        تایم‌لاین درس
                        {"  "}
                        {x.name}
                      </span>
                      <span className="d-block d-sm-block d-md-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      // color="primary"
                      id="1"
                      size="sm"
                      // tag="label"
                      className={classNames("btn-simple", "week_chart-btn", {
                        active: timelineData === "data2",
                      })}
                      onClick={() => setTimeData("data2")}
                    >
                      <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        تایم‌لاین استاد
                        {"  "}
                        {x.teachers.map((y) => y.name).join(" , ")}
                      </span>
                      <span className="d-block d-sm-block d-md-none">
                        <i className="tim-icons icon-gift-2" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12" className="mt-3" style={{ overflow: "auto" , height:"60vh", background:"rgb(46, 49, 72)"}}>
                  <div
                    style={{
                      display: timelineData == "data2" ? "block" : "none",
                    }}
                  >
                    <TeacherTimeline show={props} />
                  </div>
                  <div
                    style={{
                      display: timelineData == "data1" ? "block" : "none",
                    }}
                  >
                    <Timeline show={props} />
                  </div>
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
