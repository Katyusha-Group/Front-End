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

import "./Shopping.css";
import cartlogo from "./cart.png";
import { convertPercentagetoLigtness } from "../../global/functions";

function Shopping() {
  const { info, changeInfo } = useInfo();
  const [state, useState] = React.useState([]);
  console.log("INFO", info);
  const notificationAlertRef = React.useRef(null);
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  // console.log("info lenght", info.shop.length);
  React.useEffect(() => {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    console.log("shopId in userpage", shopId);
    console.log("token is", token);
    fetch(`https://katyushaiust.ir/carts/${shopId[0].id}/items/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("shop data", data);
        useState(data);
        console.log("state", state);
      })
      .catch((error) => console.error(error));
  }, []);
  
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
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  /**
   * Change the checkbox
   * @param {int} num 1 is email 2 is sms 3 is telegram
   * @param {int} index index of list of state you need to change
   */
  function changeChecked(num,index) {
    let u = state;
    switch (num) {
      case 1:
        u[index].contain_email = !u[index].contain_email;
        break;
      case 2:
        u[index].contain_email = !u[index].contain_sms;
        break;
      case 3:
        u[index].contain_email = !u[index].contain_telegram;
        break;

      default:
        break;
    }
    useState(u);
    console.log(u);

  }

  function deleteItem(index) {
    
  }
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
                  {state.map((x, index) => {
                    console.log("info lenght", info.shop.lenght);
                    return (
                      <>
                        <CardBody>
                          <div className="places-buttons">
                            <Row md="6" sm="2" xs="1">
                              <Col className="m-auto text-center category">
                                <Button
                                  color="primary"
                                  size="sm"
                                  onClick={() =>
                                    useState(
                                      state.filter(
                                        (y) =>
                                          y.course.complete_course_number !==
                                          x.course.complete_course_number
                                      )
                                    )
                                  }
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </Col>
                              <Col className="m-auto text-center category">
                                <Form>
                                  <FormGroup className="shopping_form" check>
                                    <Label check className="shoping_label">
                                      <Input
                                        onChange={() => {
                                          changeChecked(1,index)
                                        }}
                                        checked={state[index].contain_email}
                                        type="checkbox"
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                      ایمیل
                                    </Label>
                                    <Label check className="shoping_label">
                                      <Input
                                        checked={x.contain_sms}
                                        type="checkbox"
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                      sms
                                    </Label>
                                    <Label check className="shoping_label">
                                      <Input
                                        checked={x.contain_telegram}
                                        type="checkbox"
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                      تلگرام
                                    </Label>
                                  </FormGroup>
                                </Form>
                              </Col>
                              <Col className="m-auto text-center category">
                                {x.price}
                              </Col>
                              <Col className="m-auto text-center category">
                                {x.course.name}
                              </Col>
                              <Col className="m-auto text-center category">
                                {x.course.complete_course_number}
                              </Col>
                            </Row>
                          </div>
                        </CardBody>
                      </>
                    );
                  })}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
