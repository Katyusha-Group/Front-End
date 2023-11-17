import React from "react";
import * as style from "./ModalLesson.module.css";
import { Modal } from "react-bootstrap";
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
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const ModalLessons = (props) => {
  const { info, changeInfo } = useInfo();
  const x = props.show.data;

  const [timelineData, setTimelineData] = React.useState("data0");
  const setTimeData = (name) => {
    setTimelineData(name);
  };
  if (Object.keys(x).length != 0) {
    return (
      <Modal
        dialogClassName={style.courseProfileModal}
        centered
        show={props.show.flag}
        cancel={props.close}
        onHide={props.close}
        className={`${style.ModalLessonCourse} ModalLessonCourse`}
      >
        <div className={style.modalBack}>
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
          <Modal.Body className={style.loginLmsModalBody}>
            <CardBody>
              <Card
                className={style.ModalLessonCourseCard}
              >
                <CardBody className={style.ModalCourseCardBody}>
                  {/* <img
                    className={style.ModalProfessorImage}
                    src={x.teachers[0].teacher_image}
                    alt="professorImage"
                  /> */}
                  <div className={style.ModalLessonInfoPart}>
                    <CardHeader className={style.modalHeader}>
                      <Row>
                        <Col md="6">
                          <p
                            style={{
                              fontWeight: "bold",
                              textAlign: "right",
                              fontSize: "20px",
                              color: "#c7c1c1",
                            }}
                          >
                            {x.name} {x.group_number}
                          </p>
                        </Col>
                        <Col md="6">
                          <ButtonGroup
                            className={`${style.btnGroup} btn-group-toggle`}
                            data-toggle="buttons"
                          >
                            <Button
                              tag="label"
                              className={classNames("btn-simple", "week_chart-btn", {
                                active: timelineData === "data0",
                              })}
                              id="0"
                              size="sm"
                              onClick={() => setTimeData("data0")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                اطلاعات درس
                                {/* {"  "}
                            {x.name} */}
                              </span>
                              <span className="d-block d-sm-block d-md-none">
                                <i className="tim-icons icon-badge" />
                              </span>
                            </Button>
                            <Button
                              tag="label"
                              className={classNames("btn-simple", "week_chart-btn", {
                                active: timelineData === "data1",
                              })}
                              id="1"
                              size="sm"
                              onClick={() => setTimeData("data1")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                تایم‌لاین درس
                                {/* {"  "}
                            {x.name} */}
                              </span>
                              <span className="d-block d-sm-block d-md-none">
                                <i className="tim-icons icon-book-bookmark" />
                              </span>
                            </Button>
                            <Button
                              tag="label"
                              id="2"
                              size="sm"
                              className={classNames("btn-simple", "week_chart-btn", {
                                active: timelineData === "data2",
                              })}
                              onClick={() => setTimeData("data2")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                تایم‌لاین استاد
                                {/* {"  "}
                                {x.teachers.map((y) => y.name).join(" , ")} */}
                              </span>
                              <span className="d-block d-sm-block d-md-none">
                                <i className="tim-icons icon-single-02" />
                              </span>
                            </Button>
                          </ButtonGroup>
                        </Col>
                      </Row>
                    </CardHeader>
                    <div
                      style={{
                        display: timelineData == "data0" ? "block" : "none",
                      }}>
                      <Row>
                        <Col md="6">
                          <Card className={style.ModalLessonDataCard1}>
                            <Col
                              className="text-right"
                              style={{ marginRight: "0px !important" }}
                            >
                              <p className={style.courseTitle}>استاد&nbsp;&nbsp;</p>
                              {"  "}
                              {x.teachers.map((y) => y.name).join(" , ")}
                            </Col>
                            <Col
                              className="text-right"
                              style={{ display: "flex" }}
                            >
                              <p className={style.courseTitle}>کد درس&nbsp;&nbsp;</p>
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
                              <p className={style.courseTitle}>
                                {" "}
                                جنسیت&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                              </p>
                              {"  "}
                              {sexTostring(x.sex)}
                            </Col>
                          </Card>
                        </Col>
                        <Col md="6">
                          <Card className={style.ModalLessonDataCard2}>
                            <Col className="text-right">
                              <p className={style.courseTitleNotInline}>زمان برگزاری</p>
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
                                <p className={style.courseTitleNotInline}>
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
                          <Card className={style.ModalLessonDataCard3}>
                            <Row>
                              <Col
                                className="text-right"
                                md="7"
                                style={{ marginRight: "0px !important" }}
                              >
                                <p className={style.courseTitle}>
                                  ثبت نام
                                  شده&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                {x.registered_count} از {x.capacity}
                              </Col>
                              <Col className="text-right" md="5">
                                <p className={style.courseTitle}>
                                  تعداد واحد های عملی &nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                &nbsp;{x.practical_unit}&nbsp;{"واحد"}
                              </Col>
                            </Row>
                            <Row>
                              <Col className="text-right" md="7">
                                <p className={style.courseTitle}>
                                  تعداد در صف
                                  انتظار&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </p>
                                {x.waiting_count} {"نفر"}
                              </Col>

                              <Col className="text-right" md="5">
                                <p className={style.courseTitle}>
                                  تعداد کل واحد ها&nbsp;&nbsp;&nbsp;{" "}
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {x.total_unit} {"واحد"}
                              </Col>
                            </Row>
                            <Row>
                              <Col className="text-right" md="12">
                                <p className={style.courseTitle}>
                                  {" "}
                                  تعداد اخذ شده در کاتیوشا&nbsp;&nbsp;{" "}
                                </p>
                                {x.added_to_calendar_count} {"نفر"}
                              </Col>
                              <Col className="text-right" md="6">
                                <p className={style.courseTitle}>
                                  {" "}
                                  قابل اخذ بودن این درس برای
                                  شما&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                {x.is_allowed ? "بله" : "خیر"}
                              </Col>
                            </Row>
                          </Card>
                          {x.description === "nan" ? null : (
                            <Card className={style.ModalLessonDataCard3}>
                              <Row>
                                <Col className="text-right" md="12">
                                  <p className={style.courseTitle}>
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
                    </div>
                    <div
                      style={{
                        overflow: "auto",
                        height: "60vh",
                        // background: "rgb(46, 49, 72)",
                        paddingLeft: "30px",
                        paddingRight: "10px",
                        display: timelineData == "data1" ? "block" : "none",
                      }}
                    >
                      <Timeline show={props} />
                    </div>
                    <div
                      style={{
                        display: timelineData == "data2" ? "block" : "none",
                      }}
                    >
                      <TeacherTimeline show={props} />
                    </div>
                  </div>
                </CardBody>
              </Card>
              {/* <Row>
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
                      id="1"
                      size="sm"
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
              </Row> */}
              {/* <Row>
                <Col
                  md="12"
                  className="mt-3"
                  style={{
                    overflow: "auto",
                    height: "60vh",
                    // background: "rgb(46, 49, 72)",
                    paddingLeft: "30px",
                    paddingRight: "10px",
                  }}
                >
                  <div
                    style={{
                      display: timelineData == "data1" ? "block" : "none",
                    }}
                  >
                    <Timeline show={props} />
                  </div>
                  <div
                    style={{
                      display: timelineData == "data2" ? "block" : "none",
                    }}
                  >
                    <TeacherTimeline show={props} />
                  </div>
                </Col>
              </Row> */}
            </CardBody>
          </Modal.Body>
        </div >
      </Modal >
    );
  }
};

export default ModalLessons;
