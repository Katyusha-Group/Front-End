
import React from "react";
// react plugin for creating notifications over the dashboard
// import NotificationAlert from "react-notification-alert";
import { useInfo } from "../../contexts/InfoContext";
// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";

import "./Shoping.css"

function Shoping() {
  const {info,changeInfo} = useInfo()
  const [state, useState] = React.useState(true)
  console.log("INFO",info)
  const notificationAlertRef = React.useRef(null);
  // console.log("info lenght", info.shop.length);

  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content_without_sidebar">
            <div className="react-notification-alert-container">
              {/* <NotificationAlert ref={notificationAlertRef} /> */}
            </div>
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <div className="places-buttons">
                      <Row md="5" sm="2" xs="1">
                        <Col className="m-auto text-center category">حذف</Col>
                        <Col className="m-auto text-center category">نوع</Col>
                        <Col className="m-auto text-center category">قیمت</Col>
                        <Col className="m-auto text-center category">
                          نام درس
                        </Col>
                        <Col className="m-auto text-center category">
                          کد درس
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <div className="places-buttons">
                      <Row md="5" sm="2" xs="1">
                        {
                        info.shop.map((x) => {
                          console.log("info lenght", info.shop.lenght);
                          return (
                            <>
                              <Col className="m-auto text-center category">
                                <Button
                                  color="primary"
                                  size="sm"
                                  onClick={() =>
                                    changeInfo(
                                      "shop",
                                      info.shop.filter(
                                        (y) =>
                                          y.complete_course_number !==
                                          x.complete_course_number
                                      )
                                    )
                                  }
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </Col>
                              <Col className="m-auto text-center category">
                                <Form>
                                  <FormGroup check>
                                    <Label className="shoping_label" check>
                                      <Input defaultValue="" type="checkbox" />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                      ایمیل
                                    </Label>
                                    <Label check className="shoping_label">
                                      <Input defaultValue="" type="checkbox" />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                      sms
                                    </Label>
                                  </FormGroup>
                                </Form>
                              </Col>
                              <Col className="m-auto text-center category">
                                2000 تومان
                              </Col>
                              <Col className="m-auto text-center category">
                                {x.name}
                              </Col>
                              <Col className="m-auto text-center category">
                                {x.complete_course_number}
                              </Col>
                              
                              {/* <Col className="m-auto text-center category">
                            <Form>
                              <FormGroup switch>
                                <Input type="switch" role="switch" />
                                <Label check>
                                  Default switch checkbox input
                                </Label>
                              </FormGroup>
                              <FormGroup switch>
                                <Input
                                  type="switch"
                                  checked={state}
                                  onClick={() => {
                                    setState(!state);
                                  }}
                                />
                                <Label check>
                                  Checked switch checkbox input
                                </Label>
                              </FormGroup>
                            </Form>
                          </Col> */}
                            </>
                          );
                        })}
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoping;
