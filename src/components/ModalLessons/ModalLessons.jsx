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
  console.log("INFO", info);
  const x=props.show.data;
  return (
    <>
      <Modal
        show={props.show.flag}
        cancel={props.close}
        className="ModalLesson"
        // centered
      >
        <div className="loginLmsModal">
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
            <CardHeader>{props.show.data.name}</CardHeader>
            <CardHeader className="modalHeader">{x.name} (گروه {x.class_gp})</CardHeader>
             <CardBody>
            <Card
                    className="ModalLessonCourseCard"
                    style={{
                      backgroundColor:
                        x.color_intensity_percentage > 10
                          ? `hsl(256, 45%, ${convertPercentagetoLigtness(
                              x.color_intensity_percentage
                            )}%)`
                          : "dimgray",
                    }}
                  >
                    <CardBody className="courseCardBody">               
                        <img
                        className="professorImage"
                        src={x.teacher.teacher_image}
                        alt="professorImage"
                      />
                      <div className="infoPart">
                        <p>
                          {x.name} (گروه {x.group_number})
                        </p>
                        <p style={{ fontSize: 12 }}> استاد:{x.teacher.name}</p>
                        <div className="courseCardDownSide">
                          <div>
                            <p>
                              ثبت نام شده: {x.registered_count} از {x.capacity}{" "}
                            </p>
                          </div>
                         

                        </div>

                      </div>
                    </CardBody>
                  </Card>
            </CardBody>
            {/*            <CardBody>
              
              <Form style={{color:"white"}}>
                <Row>
                  <Col className="text-right" md="12">
                  استاد: {x.teacher.name}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
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
                  <Col className="text-right" md="12">
                   جنسیت: {sexTostring(x.sex)}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="6">
                    تعداد واحد های عملی:{x.practical_unit} 
                  </Col>
                  <Col className="text-right" md="6">
                    تعداد کل واحد ها:{x.total_unit} 
                  </Col>
                </Row>
                
                <Row>
                  <Col className="text-right" md="6">
                  ثبت نام شده: {x.registered_count}{" "} از {x.capacity}
                  </Col>
                  <Col className="text-right" md="6">
                  تعداد در صف انتظار: {x.waiting_count}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  کد درس: {x.complete_course_number}
                  </Col>
                </Row>
                <Row>
                <Col className="text-right" md="12" dir="ltr">
                  
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
                  <Col className="text-right" md="12"></Col>
                </Row>
                  
                  
                  
                    افزودن به سبد خرید
                  
                <Button
                  variant="secondary"
                  size="sm"
                  style={{ color: "aqua", fontSize: "medium" }}
                  onClick={() =>{
                    if (!info.shop.includes(props.show.data) ) {
                      console.log("includes shop")
                      // changeInfo("courseChoosed", [...info.courseChoosed, x]);
                      changeInfo("shop", [...info.shop, props.show.data])
                    }
                  }
                  }
                >
                  <i className="tim-icons icon-simple-add" />
                </Button>
                <Row>
                 <Link to="/shoping">
                    سبد خرید
                  </Link>
                </Row>
              </Form>
            </CardBody>
            <CardBody>
              <Form>
              <Row>
                  <Col className="text-right" md="12">
                    ظرفیت: {x.capacity}
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Timeline show={props} />
                  </Col>
                </Row>
                
              </Form>
            </CardBody> */}
            {/* <CardFooter>
              <Link to="/shoping">خرید</Link>
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  if (!info.shop.includes(props.show.data)) {
                    console.log("includes shop");
                    // changeInfo("courseChoosed", [...info.courseChoosed, x]);
                    changeInfo("shop", [...info.shop, props.show.data]);
                  }
                }}
              >
                <i className="tim-icons icon-simple-add" />
              </Button>

              <Button className="btn-fill" color="primary" type="submit">
                تایید
              </Button>
            </CardFooter> */}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ModalLessons;
