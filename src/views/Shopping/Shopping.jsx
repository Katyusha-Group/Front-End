import React from "react";
import { useInfo } from "../../contexts/InfoContext";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
  CardFooter,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import * as style from "../../assets/css/Shopping.module.css";
import {
  closeLoading,
  showLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { CartCreator } from "../../Functions/CartCreator";
import { apis } from "../../assets/apis";
import * as UserPageStyle from "../../assets/css/UserPage.module.css";
import { getCartInfo } from "../../hooks/Shopping/getCartInfo";
import { saveWallet } from "../../hooks/Shopping/getWallet";
import { changeChecked } from "../../Functions/Shopping/changeChecked";
import { order } from "../../Functions/Shopping/order";

function Shopping() {
  const [s1, ss1] = React.useState(false);
  const [s2, ss2] = React.useState(false);
  const [s3, ss3] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;



  const { state, setState, amount, setAmount, totalPrice, setTotalPrice } =
    getCartInfo();
  const {wallet,setWallet} = saveWallet();

  closeLoading();
  const delete_item = (num, index) => {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["carts"] + `${shopId.id}/items/${state[index].id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
        contain_telegram: true,
        contain_sms: true,
        contain_email: true,
      }),
    }).then((response) => {
      getCartInfo();
    });
  };

  return (
    <>
      <div>
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="wrapper" style={{ direction: "ltr" }}>
        <div className="main-panel">
          <AdminNavbar></AdminNavbar>
          <div className="content_without_sidebar">
            <div className="react-notification-alert-container"></div>

            <Row style={{ height: "80vh" }}>
              <Col md="3">
                <Card
                  className=""
                  style={{ height: "100%", marginBottom: "0" }}
                >
                  <CardHeader
                    className="shop_row m-1"
                    style={{
                      borderBottom: " 1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <h2>خلاصه سفارش</h2>
                  </CardHeader>
                  <CardBody className="week-card-body ">
                    <Row
                      md="1"
                      sm="2"
                      xs="1"
                      className={`${style.places_buttons} ${style.shop_row}`}
                    >
                      <Col className="m-auto text-center category">
                        قیمت {totalPrice} تومان
                      </Col>
                    </Row>
                    <Row
                      md="1"
                      sm="2"
                      xs="1"
                      className={`${style.places_buttons} ${style.shop_row}`}
                    >
                      <Col className="m-auto text-center category">
                        کیف پول شما: {wallet} تومان
                      </Col>
                    </Row>
                    <Row
                      md="1"
                      sm="2"
                      xs="1"
                      className={`${style.places_buttons} ${style.shop_row}`}
                    >
                      <Col className="m-auto text-center category">
                        تعداد {amount}
                      </Col>
                    </Row>
                    <div
                      className={
                        "d-flex justify-content-center align-items-center " +
                        style.price
                      }
                    >
                      <h2>
                        قیمت کل <br /> <br /> {totalPrice} تومان
                      </h2>
                    </div>
                  </CardBody>
                  <CardFooter>
                    {state.length == 0 ? (
                      "کالایی انتخاب نشده"
                    ) : (
                      <Button
                        onClick={()=>order(notificationAlertRef,saveWallet, CartCreator, setState,setTotalPrice, setAmount)}
                        color="primary"
                        className="buy_button"
                      >
                        ثبت سفارش
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="9">
                <Card
                  className={style.shop_card}
                  style={{
                    height: "100%",
                    marginBottom: "0",
                    justifyContent: `${state.length == 0 ? "center" : ""}`,
                  }}
                >
                  {state.length == 0 ? (
                    <h4 className="mt-4">کالایی انتخاب نشده</h4>
                  ) : (
                    ""
                  )}
                  {state.map((x, index) => {
                    return (
                      <Row
                        md="6"
                        sm="2"
                        xs="1"
                        className={`${style.places_buttons} ${style.shop_row}`}
                        key={index}
                      >
                        <Col className="m-auto">
                          <img
                            className={UserPageStyle.professorImage}
                            src={
                              x.course.teachers[0].teacher_image
                                ? x.course.teachers[0].teacher_image
                                : sampleProfile
                            }
                            alt="professorImage"
                          />
                        </Col>
                        <Col className="m-auto text-center category">
                          {x.course.complete_course_number}
                        </Col>
                        <Col className="m-auto text-center category">
                          {x.course.name}
                        </Col>
                        <Col className="m-auto text-center category">
                          {x.price} تومان
                        </Col>
                        <Col className="m-auto text-center category">
                          <Form>
                            <FormGroup className={style.shopping_form} check>
                              <Label check className={style.shopping_label}>
                                <Input
                                  onChange={() => {
                                    ss1(() => !s1);
                                    changeChecked(1, index, state, setState);
                                  }}
                                  checked={state[index].contain_email}
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                                ایمیل
                              </Label>
                            </FormGroup>
                            <FormGroup
                              className={style.shopping_form}
                              check
                              disabled
                            >
                              <Label check className={style.shopping_label}>
                                <Input
                                  checked={false}
                                  type="checkbox"
                                  valid={false}
                                  onChange={() => {
                                    ss2(() => !s2);
                                    changeChecked(2, index, state, setState);
                                  }}
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                                sms
                              </Label>
                            </FormGroup>
                            <FormGroup className={style.shopping_form} check>
                              <Label check className={style.shopping_label}>
                                <Input
                                  checked={x.contain_telegram}
                                  key={x.contain_telegram}
                                  type="checkbox"
                                  onChange={() => {
                                    ss3(() => !s3);
                                    changeChecked(3, index, state, setState);
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
                        <Col className="m-auto text-center category">
                          <Button
                            color="primary"
                            size="sm"
                            onClick={() => {
                              delete_item(
                                x.course.complete_course_number,
                                index
                              );
                              setState(
                                state.filter(
                                  (y) =>
                                    y.course.complete_course_number !==
                                    x.course.complete_course_number
                                )
                              );
                            }}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                        </Col>
                      </Row>
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
