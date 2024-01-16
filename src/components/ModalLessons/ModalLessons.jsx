import React from "react";
import * as style from "./ModalLesson.module.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "../Timeline/Timeline";
import TeacherTimeline from "../TeacherTimeline/TeacherTimeline";

import {
  dayOfWeek,
  sexTostring,
  convertTime,
} from "../../global/functions";
import {
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { closeLoading } from "../LoadingAlert/LoadingAlert";
const ModalLessons = (props) => {
  closeLoading();
  const x = props.show.data;
  console.log("props: ", props.show);
  
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
            <Card
              className={style.ModalLessonCourseCard}
            >
              <CardHeader className={style.modalHeader}>
                <Row>
                  <Col md="5">
                    <p
                      style={{
                        fontWeight: "bold",
                        textAlign: "right",
                        fontSize: "20px",
                        color: "#c7c1c1",
                        paddingRight: "30px",
                      }}
                    >
                      {x.name} ({x.group_number})
                    </p>
                  </Col>
                  <Col md="7" className="text-right">
                    <ButtonGroup
                      className={`${style.btnGroup} btn-group-toggle `}
                      data-toggle="buttons"
                    >
                      <button
                        tag="label"
                        className={
                          timelineData === "data0" ? style.modalLessonBtnActive : style.modalLessonBtn
                        }
                        id="0"
                        size="sm"
                        onClick={() => setTimeData("data0")}
                      >
                        <span className={`${style.btnSpan}d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
                          اطلاعات درس
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-badge" />
                        </span>
                      </button>
                      <button
                        tag="label"
                        className={
                          timelineData === "data1" ? style.modalLessonBtnActive : style.modalLessonBtn
                        }
                        id="1"
                        size="sm"
                        onClick={() => setTimeData("data1")}
                      >
                        <span className={`${style.btnSpan}d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
                          تایم‌لاین درس
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-book-bookmark" />
                        </span>
                      </button>
                      <button
                        tag="label"
                        id="2"
                        size="sm"
                        className={
                          timelineData === "data2" ? style.modalLessonBtnActive : style.modalLessonBtn
                        }
                        onClick={() => setTimeData("data2")}
                      >
                        <span className={`${style.btnSpan}d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
                          تایم‌لاین استاد
                        </span>
                        <span className="d-block d-sm-block d-md-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className={style.ModalCourseCardBody}>
                <div className={style.ModalLessonInfoPart}>

                  <div
                    style={{
                      display: timelineData == "data0" ? "block" : "none",
                    }}>
                    <Row>
                      <Col md="5">
                        <Card className={style.ModalLessonDataCard1}>
                          <Row>
                            <Col md="4"
                              className={`${style.profImg} p-0 mt-1`}>
                              <img
                                className={style.ModalProfessorImage}
                                src={x.teachers[0].teacher_image}
                                alt="professorImage"
                              />
                            </Col>
                            <Col md="8"
                              className={`text-right p-0 mr-0`}
                            >
                              <p className={style.courseTitle}>استاد&nbsp;
                                <span className={style.courseText}>
                                  {x.teachers.map((y) => y.name).join(" , ")}</span>
                              </p>

                              <p className={`${style.courseTitle}`}
                                style={{ display: "flex", whiteSpace: "nowrap" }}>کد درس&nbsp;
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
                      display: timelineData == "data1" ? "block" : "none",
                    }}
                  >
                    <Timeline show={props.show.data.complete_course_number.split("_")[0]} />
                  </div>
                  <div
                    style={{
                      display: timelineData == "data2" ? "block" : "none",
                    }}
                  >
                    <TeacherTimeline show={props.show.data.teachers[0].id} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Modal.Body>
        </div >
      </Modal >
    );
  }
};

export default ModalLessons;
