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
import * as style from  "./Shopping.module.css";
import {
  closeLoading,
  showLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { CartCreator } from "../../Functions/CartCreator";
import { apis } from "../../assets/apis";
import * as UserPageStyle from "../../assets/css/UserPage.module.css"
function Shopping() {
  const { info, changeInfo } = useInfo();
  const [state, setState] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [s1, ss1] = React.useState(false);
  const [s2, ss2] = React.useState(false);
  const [s3, ss3] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

  const [wallet, setWallet] = React.useState(0);
  function getCartInfo() {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["carts"] + `${shopId.id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data.items);
        setTotalPrice(data.total_price);
        setAmount(data.total_number);
      })
      .catch((error) => console.error(error));
  }
  function saveWallet(){
    fetch(apis["accounts"]["wallet"]["seeWallet"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setWallet(data.balance);
      })
      .catch((error) => console.error(error));
  }
  React.useEffect(() => {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    showLoading();
    getCartInfo();
    saveWallet();
  }, []);

  closeLoading();
  const delete_item =(num, index) => {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(
      apis["carts"]+`${shopId.id}/items/${state[index].id}/`,
      {
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
      }
    ).then((response) =>{
      getCartInfo();

    });
  }

  function order() {
    showLoading();
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["orders"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: shopId.id,
        payment_method: "W",
      }),
    })
      .then((response) => {
        
        if (response.status == 400) {
          return response.json().then((data) => {
            alert(
              data.telegram +
                "\n لطفا به صفحه پروفایل بروید و روی آیکون تلگرام کلیک کنید و ربات تلگرام را فعال کنید"
            );
          });
        } else
          return response.json().then((data) => {
            notify("tl");
            saveWallet();
            let newCart = CartCreator({ setState, setTotalPrice, setAmount });
          });
      })
      
      .catch((error) => {
        console.error(error);
      });
      closeLoading ();
  }

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
            خرید شما با موفقیت انجام شد
          </div>
        </div>
      ),
      type: type,
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  /**
   * Change the checkbox
   * @param {int} num 1 is email 2 is sms 3 is telegram
   * @param {int} index index of list of state you need to change
   */
  function changeChecked(num, index) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    let u = state;
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
    fetch(
      apis["carts"]+`${shopId.id}/items/${state[index].id}/`,
      {
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
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let newData = state[index];
        if (data.total_price !== undefined) {
          newData.price = data.total_price;
        }
        let newList = state.map((item) => {
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

  function deleteItem(index) {}
  return (
    <>
    <div>
          <NotificationAlert ref={notificationAlertRef} />

    </div>
      <div className="wrapper" style={{ direction: "ltr" }}>
        <div className="main-panel">
          <AdminNavbar></AdminNavbar>
          <div className="content_without_sidebar">
            <div className="react-notification-alert-container">
            </div>

            <Row>
              <Col md="3" >
                <Card className="" style={{height: "100%", marginBottom: "0"}}>
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
                    <div className={"d-flex justify-content-center align-items-center " + style.price}>
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
              <Col md="9" >
                <Card className={style.shop_card} style={{height: "100%", marginBottom: "0" ,justifyContent: `${state.length == 0 ? "center" : ""}`}}>
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
                                    changeChecked(1, index);
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
                            <FormGroup className={style.shopping_form} check disabled>
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
