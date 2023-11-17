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
                  <div className={style.ModalLessonInfoPart}>
                    <CardHeader className={style.modalHeader}>
                      <Row>
                        <Col md="5">
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
                        <Col md="7" className="text-right">
                          <ButtonGroup
                            className={`${style.btnGroup} btn-group-toggle `}
                            data-toggle="buttons"
                          >
                            <Button
                              tag="label"
                              className={classNames(style.modalLessonBtn, "btn-simple", {
                                active: timelineData === "data0",
                              })}

                              id="0"
                              size="sm"
                              onClick={() => setTimeData("data0")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                اطلاعات درس
                              </span>
                              <span className="d-block d-sm-block d-md-none">
                                <i className="tim-icons icon-badge" />
                              </span>
                            </Button>
                            <Button
                              tag="label"
                              className={classNames(style.modalLessonBtn, "btn-simple", {
                                active: timelineData === "data1",
                              })}
                              id="1"
                              size="sm"
                              onClick={() => setTimeData("data1")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                تایم‌لاین درس
                              </span>
                              <span className="d-block d-sm-block d-md-none">
                                <i className="tim-icons icon-book-bookmark" />
                              </span>
                            </Button>
                            <Button
                              tag="label"
                              id="2"
                              size="sm"
                              className={classNames(style.modalLessonBtn, "btn-simple", {
                                active: timelineData === "data2",
                              })}
                              onClick={() => setTimeData("data2")}
                            >
                              <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                تایم‌لاین استاد
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
                        <Col md="5">
                          <Card className={style.ModalLessonDataCard1}>
                            <Row>
                              <Col md="4"
                                className="p-0">
                                <img
                                  className={style.ModalProfessorImage}
                                  src={x.teachers[0].teacher_image}
                                  alt="professorImage"
                                />
                              </Col>
                              <Col md="8"
                                className="text-right p-0 mr-0"
                              >
                                <p className={style.courseTitle}>استاد&nbsp;
                                  <span className={style.courseText}>
                                    {x.teachers.map((y) => y.name).join(" , ")}</span>
                                </p>

                                <p className={`${style.courseTitle}`}
                                  style={{ display: "flex" }}>کد درس&nbsp;
                                  <span
                                    className={style.courseText}
                                    style={{ direction: "ltr" }}
                                  >
                                    {x.complete_course_number}
                                  </span>
                                </p>
                                <p className={style.courseTitle}>
                                  جنسیت&nbsp;
                                  <span className={style.courseText}>
                                    {sexTostring(x.sex)}
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </Card>

                          <Card className={style.ModalLessonDataCard2}>
                            <Col className="text-right">
                              <p className={style.courseTitleNotInline}>زمان برگزاری</p>
                              <span className={style.courseText}>
                                {x.course_times.map((t) => (
                                  <text>{dayOfWeek(t.course_day)} </text>
                                ))}

                                {" / "}
                              </span>
                              <text className={style.courseText}>
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
                                <text dir="ltr" className={style.courseText}>
                                  {"تاریخ"}
                                </text>{" "}
                                <text className={style.courseText}
                                  style={{ direction: "ltr" }}>
                                  {x.exam_times[0].date}
                                </text>
                                <text className={style.courseText}>
                                  {" / "}
                                  {convertTime(
                                    x.exam_times[0].exam_start_time
                                  )}{" "}
                                  تا {convertTime(x.exam_times[0].exam_end_time)}
                                </text>
                              </Col>
                            )}
                          </Card>
                        </Col>
                        <Col md="7">
                          <Card className={`${style.ModalLessonDataCard3} text-right`}>
                            <p className={style.courseTitle}>
                              ثبت نام
                              شده&nbsp;
                              <text className={style.courseText}>
                                {x.registered_count} از {x.capacity}
                              </text>
                            </p>
                            <p className={style.courseTitle}>
                              تعداد در صف
                              انتظار&nbsp;
                              <text className={style.courseText}>
                                {x.waiting_count} {"نفر"}
                              </text>
                            </p>
                            <p className={style.courseTitle}>
                              تعداد اخذ شده در کاتیوشا&nbsp;
                              <text className={style.courseText}>
                                {x.added_to_calendar_count} {"نفر"}
                              </text>
                            </p>
                            <p className={style.courseTitle}>
                              تعداد کل واحد ها&nbsp;
                              <text className={style.courseText}>
                                {x.total_unit} {"واحد"}</text>
                            </p>
                            <p className={style.courseTitle}>
                              تعداد واحد های عملی&nbsp;
                              <text className={style.courseText}>
                                {x.practical_unit}&nbsp;{"واحد"}
                              </text>
                            </p>
                            <p className={style.courseTitle}>
                              قابل اخذ بودن این درس برای
                              شما&nbsp;
                              <text className={style.courseText}>
                                {x.is_allowed ? "بله" : "خیر"}
                              </text>
                            </p>

                            {x.description === "nan" ? null : (
                              <Row>
                                <Col className="text-right" md="10">
                                  <p className={style.courseTitle}>
                                    توضیحات&nbsp;
                                    <text className={style.courseText}>
                                      {x.description}
                                    </text>
                                  </p>
                                </Col>
                              </Row>
                            )}
                          </Card>
                        </Col>
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
