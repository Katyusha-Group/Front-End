import React from "react";
import "../../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import "./ModalLessons.css";
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
  console.log("INFO", info)
  const x=props.show.data;
  return (
    <>
      <Modal
        show={props.show.flag}
        cancel={props.close}
        // centered
      >
        <div className="loginLmsModal">
          <Modal.Header >
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
          <Modal.Body >
            <CardHeader className="modalHeader">{x.name} (گروه {x.class_gp})</CardHeader>
            <CardBody>
              
              <Form style={{color:"white"}}>
                {/* <Row>
                  <Col className="text-right" md="12">
                  استاد: {x.teacher}
                  </Col>
                </Row> */}
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
                  <Col className="text-right" md="12">
                   تعداد واحد:{x.total_unit} 
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  کد درس: {x.complete_course_number}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  ثبت نام شده: {x.registered_count}{" "} از {x.capacity}
                  </Col>
                  <Col className="text-right" md="12">
                  تعداد در صف انتظار: {x.waiting_count}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  تاریخ امتحان پایانی: 
                  {/* {x.exam_times[0].date} */}
                  
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  پیشنیاز ها : 
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  کد درس: {x.complete_course_number}
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
            {/* <CardFooter>
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
