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
// import NotificationAlert from "react-notification-alert";
import * as style from "../../assets/css/Shopping.module.css";
import { CartCreator } from "../../Functions/CartCreator";
import { apis } from "../../assets/apis";
import * as UserPageStyle from "../../assets/css/UserPage.module.css";
import { useGetCartInfo } from "../../hooks/Shopping/getCartInfo";
import { useSaveWallet } from "../../hooks/Shopping/getWallet";
import axios from "axios";
import { saveWallet } from "../../Functions/Shopping/saveWallet";
import { getCartInfo } from "../../Functions/Shopping/getCartInfo";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
function Shopping() {
  const [s1, ss1] = React.useState(false);
  const [s2, ss2] = React.useState(false);
  const [s3, ss3] = React.useState(false);
  // const notificationAlertRef = React.useRef(null);
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

  const {
    state: info,
    setState,
    amount,
    setAmount,
    totalPrice,
    setTotalPrice,
    loading,
    setLoading,
  } = useGetCartInfo();
  const { wallet, setWallet } = useSaveWallet();

  const delete_item = (num, index) => {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["shop"]["carts"]["removeItem"] + `${info[index].id}/`, {
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
      getCartInfo(setState, setTotalPrice, setAmount, setLoading);
    });
  };

  function order() {
    let shopId = JSON.parse(localStorage.getItem("shopId"));
    axios(apis["orders"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        cart_id: shopId.id,
        payment_method: "W",
      },
    })
      .then((response) => {
        // notify("tl");
        saveWallet(setWallet);
        shopId = CartCreator({ setState, setTotalPrice, setAmount });
      })

      .catch((error) => {
        if (error.status == 400) {
          return response.then((data) => {
            alert(
              data.telegram +
                "\n لطفا به صفحه پروفایل بروید و روی آیکون تلگرام کلیک کنید و ربات تلگرام را فعال کنید"
            );
          });
        } else console.error(error);
      });
  }

  /**
   * Change the checkbox
   * @param {number} num 1 is email 2 is sms 3 is telegram
   * @param {number} index index of list of state you need to change
   */
  function changeChecked(num, index) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    let u = info;
    switch (num) {
      case 1:
        u[index].contain_email = !u[index].contain_email;
        break;
      case 2:
        u[index].contain_sms = !u[index].contain_sms;
        break;
      case 3:
        u[index].contain_telegram = !u[index].contain_telegram;
        break;

      default:
        break;
    }
    setState(u);
    fetch(apis["shop"]["carts"]["updateCart"] + `${info[index].id}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
        contain_telegram: u[index].contain_telegram,
        contain_sms: u[index].contain_sms,
        contain_email: u[index].contain_email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        let newData = info[index];
        if (data.total_price !== undefined) {
          newData.price = data.total_price;
        }
        let newList = info.map((item) => {
          if (item.id === newData.id) {
            return newData;
          }
          return item;
        });
        setState([...newList]);
      })
      .then((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <div className={style.bg} style={{ overflow: "auto" }}>
        <div className={`main-panel ${style.bg1}`}>
          <AdminNavbar></AdminNavbar>
          <div className={`content_without_sidebar ${style.main}`}>
            <div className="react-notification-alert-container"></div>

            <Row className={style.box} style={{ height: "80vh" }}>
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
                    <h2 className={style.h2custom}>خلاصه سفارش</h2>
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
                      <h2 className={style.h2custom}>
                        قیمت کل <br /> <br /> {totalPrice} تومان
                      </h2>
                    </div>
                  </CardBody>
                  <CardFooter>
                    {info.length === 0 ? (
                      "کالایی انتخاب نشده"
                    ) : (
                      <Button
                        onClick={order}
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
                    justifyContent: `${
                      loading && info.length == 0 ? "center" : ""
                    }`,
                  }}
                >
                  {info.length == 0 ? (
                    loading?"":<h4 className="mt-4">کالایی انتخاب نشده</h4>
                  ) : (
                    ""
                  )}
                  {loading ? (
                    <div>
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    info.map((x, index) => {
                      return (
                        <div
                          md="6"
                          sm="2"
                          xs="1"
                          className={`${style.places_buttons} ${style.shop_row}`}
                          key={index}
                        >
                          <div className="m-auto">
                            <img
                            className={UserPageStyle.professorImage}
                            src={
                              x.course.teachers[0].teacher_image
                                ? x.course.teachers[0].teacher_image
                                : sampleProfile
                            }
                            alt="professorImage"
                          />
                            {/* <img
                              alt="..."
                              // className="avatar"
                              className={UserPageStyle.professorImage}
                              src="http://84.32.10.112/media/images/profile_pics/male_default.png"
                            /> */}
                          </div>
                          <div className="m-auto text-center category">
                            {x.course.complete_course_number}
                          </div>
                          <div className={`m-auto text-center category ${style.Shopping_CourseName}`}>
                            {x.course.name}
                          </div>
                          <div className="m-auto text-center category">
                            {x.price} تومان
                          </div>
                          <div className="m-auto text-center category">
                            <Form>
                              <FormGroup className={style.shopping_form} check>
                                <Label check className={style.shopping_label}>
                                  <Input
                                    onChange={() => {
                                      ss1(() => !s1);
                                      changeChecked(1, index);
                                    }}
                                    checked={info[index].contain_email}
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
                                      changeChecked(2, index);
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
                                      changeChecked(3, index);
                                    }}
                                  />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                  تلگرام
                                </Label>
                              </FormGroup>
                            </Form>
                          </div>
                          <div className="m-auto text-center category">
                            <Button
                              color="primary"
                              size="sm"
                              onClick={() => {
                                delete_item(
                                  x.course.complete_course_number,
                                  index
                                );
                                setState(
                                  info.filter(
                                    (y) =>
                                      y.course.complete_course_number !==
                                      x.course.complete_course_number
                                  )
                                );
                              }}
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                          </div>
                        </div>
                      );
                    })
                  )}
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
