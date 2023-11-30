import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
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
import { apis } from "../../assets/apis";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import * as style from "../../assets/css/UserPage.module.css";
import * as shopStyle from "../../assets/css/Shopping.module.css";
import axios from "axios";
const ModalShopping = (props) => {
  const { info, changeInfo } = useInfo();
  const [email, setEmail] = React.useState(
    props.order.contain_email == "C" ? true : false
  );
  const [telegram, setTelegram] = React.useState(
    props.order.contain_telegram == "C" ? true : false
  );
  const [sms, setSms] = React.useState(false);
  const [enableButton, setEnableButton] = React.useState(false);
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  const [prices, setPrices] = React.useState({});
  const [totalPrices, setTotalPrices] = React.useState(0);
  function calPrice() {
    let price = 0;
    if (email) {
      price += props.prices.E;
    }
    if (telegram) {
      price += props.prices.T;
    }
    if (sms) {
      price += props.prices.S;
    }
    setTotalPrices(price);
  }

  React.useEffect(() => {
    calPrice();
  }, [telegram, email, sms]);

  React.useEffect(() => {
    setTelegram(() => (props.order.contain_telegram == "C" ? true : false));
    setEmail(() => (props.order.contain_email == "C" ? true : false));
    calPrice();
  }, [props]);

  const notificationAlertRef = React.useRef(null);

  const notify = (place, succeed) => {
    var color = 2;
    var type;
    var options = {};
    if (succeed){
      type = "success";
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
        color: "white",
        autoDismiss: 7,
      };
    }
      else{
        type = "danger";
        options = {
          place: place,
          message: (
          <div>
            <div>
              <b>متاسفانه ثبت نشد</b>
            </div>
          </div>
        ),
        type: type,
        color: "white",
        autoDismiss: 7,
      };
    }
      notificationAlertRef.current.notificationAlert(options);
  };
  function addItemShop(num) {
    console.log("🚀 ~ file: ModalShopping.jsx:106 ~ addItemShop ~ num:", {
      id: shopId.id,
      complete_course_number: num,
      contain_telegram: telegram,
      contain_sms: sms,
      contain_email: email,
    },)

    axios(apis["shop"]["carts"]["addToCart"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: shopId.id,
        complete_course_number: num,
        contain_telegram: telegram,
        contain_sms: sms,
        contain_email: email,
      },
    })
      .then((data) => {
        notify("tl", true);
      })
      .catch((error) => {
        notify("tl", false);
        console.error(error);
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
      >
        <div className={shopStyle.loginLmsModal}>
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
          <Modal.Body className={shopStyle.loginLmsModalBody}>
            <CardHeader>{props.show.data.name}</CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="text-center" md="12">
                    گزینه های مورد نظر را انتخاب کنید
                  </Col>
                  <Col className="text-center" md="12">
                    قیمت: {totalPrices} تومان
                  </Col>
                </Row>
                <Col className="m-auto text-center category">
                  <Form className="d-flex justify-content-center">
                    <FormGroup className={shopStyle.shopping_label} check>
                      <Label check className={style.shopping_label}>
                        <Input
                          onChange={() => {
                            if (props.order.contain_email != "O") {
                              setEmail(!email);
                            }
                          }}
                          checked={
                            props.order.contain_email == "O" ? true : email
                          }
                          type="checkbox"
                        />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                        ایمیل
                      </Label>
                    </FormGroup>
                    <FormGroup
                      className={shopStyle.shopping_label}
                      check
                      disabled
                    >
                      <Label check className={style.shopping_label}>
                        <Input checked={false} type="checkbox" />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                        sms
                      </Label>
                    </FormGroup>
                    <FormGroup className={shopStyle.shopping_label} check>
                      <Label check className={style.shopping_label}>
                        <Input
                          checked={
                            props.order.contain_telegram == "O"
                              ? true
                              : telegram
                          }
                          type="checkbox"
                          onChange={() => {
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
                  // notify("tl");
                  props.close();
                }}
              >
                اضافه کردن به سبد خرید
              </Button>
            </CardFooter>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ModalShopping;
