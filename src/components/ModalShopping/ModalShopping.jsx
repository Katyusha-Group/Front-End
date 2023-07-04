import React from "react";
import "../../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
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
  Label,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

import { Link, NavLink, useSearchParams } from "react-router-dom";
const ModalShopping = (props) => {
  const { info, changeInfo } = useInfo();
  const [email, setEmail] = React.useState(false);
  const [telegram, setTelegram] = React.useState(props.order.contain_telegram == "C" ? true:false);
  const [sms, setSms] = React.useState(false);
  const [enableBotton, setEnableBotton] = React.useState(false);
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  React.useEffect(() => {
    setTelegram(()=>props.order.contain_telegram == "C" ? true:false);
    console.log("telegram",telegram);
  }, [props]);
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    console.log("hello")
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
            <b>با موفقیت به سبد خرید اضافه شد</b>
          </div>
        </div>
      ),
      type: type,
      // icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  function addItemShop(num) {
    fetch(`https://katyushaiust.ir/carts/${shopId.id}/items/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
        contain_telegram: telegram,
        contain_sms: email,
        contain_email: sms,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`shop add ${num}`, data);
      })
      .catch((error) => {
        console.error(error);
        console.log("failed course complete", num);
      });
    }
    return (
      <>
              <div className="react-notification-alert-container">
                <NotificationAlert ref={notificationAlertRef} />
              </div>
        <Modal
          show={props.show.flag}
          cancel={props.close}
          style={{ background: "rgba(0,0,0,0.2)" }}
          onHide={props.close}
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
              <CardHeader>{props.show.data.name}</CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="text-right" md="12">
                      گزینه های مورد نظر را انتخاب کنید
                    </Col>
                    <Col className="text-right" md="12">
                      قیمت: {props.order.price} تومان
                    </Col>
                  </Row>
                  <Col className="m-auto text-center category">
                    <Form className="d-flex justify-content-center">
                      <FormGroup
                        className="shopping_form_userpage"
                        check
                        disabled
                      >
                        <Label check className="shoping_label">
                          <Input
                            onChange={() => {
                              if (props.order.contain_email != "O") {
                                setEmail(!email);
                              }
                            }}
                            checked={false}
                            type="checkbox"
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                          ایمیل
                        </Label>
                      </FormGroup>
                      <FormGroup
                        className="shopping_form_userpage"
                        check
                        disabled
                      >
                        <Label check className="shoping_label">
                          <Input
                            checked={false}
                            type="checkbox"
                            onChange={() => {
                              if (props.order.contain_sms != "O") {
                                setSms(!sms);
                              }
                            }}
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                          sms
                        </Label>
                      </FormGroup>
                      <FormGroup className="shopping_form_userpage" check>
                        <Label check className="shoping_label">
                          <Input
                            checked={
                              props.order.contain_telegram == "O"
                                ? true
                                : telegram
                            }
                            type="checkbox"
                            onChange={() => {
                              console.log(
                                "order contain telegram",
                                props.order.contain_telegram
                              );
                              if (props.order.contain_telegram != "O") {
                                setTelegram(!telegram);
                              }
                            }}
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                          تلگرام
                        </Label>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col></Col>
                </Form>
              </CardBody>
              <Link to="/shopping">رفتن به سبد خرید</Link>
              <CardFooter>
                <Button
                  className="btn-fill"
                  color="primary"
                  type="submit"
                  disabled={!sms && !email && !telegram}
                  onClick={() => {
                    addItemShop(props.show.data.complete_course_number);
                    notify("tl");
                    props.close();
                  }}
                >
                  تایید
                </Button>
              </CardFooter>
            </Modal.Body>
          </div>
        </Modal>
      </>
    );
};

export default ModalShopping;
