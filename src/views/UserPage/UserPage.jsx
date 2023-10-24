import React from "react";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import "./UserPage.css";
import Spinner from "react-bootstrap/Spinner";
import ModalLessons from "../../components/ModalLessons/ModalLessons.jsx";
import fullLogo from "./full.png";
import { useInfo } from "../../contexts/InfoContext";
import { convertPercentagetoLigtness } from "../../global/functions";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert.jsx";
import SummaryChart from "../../components/SummaryChart/SummaryChart.jsx";
import ExamChart from "../../components/Charts/ExamChart.jsx";
import ModalShopping from "../../components/ModalShopping/ModalShopping.jsx";
import { timeStringToFloat } from "../../Functions/timeStringToFloat";
import { reducer } from "../../Functions/reducer";
import { apis } from "../../assets/apis";
import {lessons} from './Lessons'
import { getShopData } from "../../Functions/getData/getShopData";
const fetchRequest = "FETC_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";

export default function UserPage() {
  const { info, changeInfo } = useInfo();
  const getError = (error) => {
    return error.responst && error.response.data
      ? error.response.data
      : error.message;
  };

  const [{ loading, props: input, error }, propsSetter] = React.useReducer(
    reducer,
    { loading: true, props: {}, error: "" }
  );

  const [showShoppingModal, setShowShoppingModal] = React.useState({
    flag: false,
    data: {},
  });
  const [showLesson, setShowLesson] = React.useState({
    flag: false,
    data: {},
  });
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [showCourseHover, setShowCourseHover] = React.useState({
    courseChoosed: [],
  });
  const [OrderInfo, SetOrderInfo] = React.useState({
    name: "",
    price: 0,
    contain_telegram: "O",
    contain_sms: "N",
    contain_email: "N",
  });

  const [prices, setPrices] = React.useState({
    S: 0,
    E: 0,
    T: 0,
  });
  const [modalData, setModalData] = React.useState([]);

  function setShowCourseHoverFunc(name, value) {
    setShowCourseHover((info) => ({ [name]: value }));
  }
  let defu = 13.3;
  let length = 17.1;
  let top_right = 9.6;
  let top_defu = 11.7;
  function closeLesson(flag, data) {
    setShowLesson({ flag: flag, data: data });
  }
  function funcSetShowShoppingModal(flag, data) {
    setShowShoppingModal({ flag: flag, data: data });
  }




  // function getShopData(x) {
  //   const tokenJson = localStorage.getItem("authTokens");
  //   const tokenClass = JSON.parse(tokenJson);
  //   const token = tokenClass.token.access;
  //   const shopId = JSON.parse(localStorage.getItem("shopId"));
  //   fetch(
  //     apis["courseCartOrderInfo"] +
  //       `?cart_id=${shopId.id}&complete_course_number=${x}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       SetOrderInfo(data[0]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   fetch(apis["getPrice"], {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPrices(data);
  //     })
  //     .catch((error) => console.error(error));
  // }
  function apiForModalData(x, showOrNot) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    showLoading();
    fetch(apis["courses"]["my_courses"] + x, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((d) => {
        setModalData(d);
        if (showOrNot) {
          setShowLesson({ flag: true, data: d });
        }
      });
  }

  return (
    <>
      <Row>
        <Col className="" sm="12">
          <Card className="week-card card-body">
            <CardBody className="week-card-body">
              <div className="">
                <div
                  className="chart"
                  style={{
                    display: bigChartData == "data1" ? "block" : "none",
                  }}
                >
                  {lessons(info, changeInfo, true, null,showLoading, closeLoading)}
                  {lessons(
                    showCourseHover,
                    setShowCourseHoverFunc,
                    false,
                    "classNameHover"
                    ,showLoading,
                    closeLoading
                  )}
                  <ModalLessons
                    show={showLesson}
                    close={() =>
                      setShowLesson(() => ({ ...showLesson, flag: false }))
                    }
                  />
                </div>
                <div
                  style={{
                    display: bigChartData == "data2" ? "block" : "none",
                    // maxHeight: "400px",
                    overflowX: "auto",
                    overflowY: "scroll",
                    minWidth: "100%",
                  }}
                >
                  <SummaryChart props={info.courseChoosed} />
                </div>
                <div
                  style={{
                    display: bigChartData == "data3" ? "block" : "none",
                  }}
                >
                  <ExamChart />
                </div>
              </div>
            </CardBody>
            <CardFooter className="week-card-footer mt-0 pt-0">
              <Row>
                <Col sm="6">
                  <ButtonGroup
                    className="btn-group-toggle float-right"
                    data-toggle="buttons"
                  >
                    <Button
                      tag="label"
                      className={classNames("btn-simple", "week_chart-btn", {
                        active: bigChartData === "data1",
                      })}
                      id="0"
                      size="sm"
                      onClick={() => setBgChartData("data1")}
                    >
                      <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        برنامه هفتگی
                      </span>
                      <span className="d-block d-sm-block d-md-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      id="1"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", "week_chart-btn", {
                        active: bigChartData === "data2",
                      })}
                      onClick={() => setBgChartData("data2")}
                    >
                      <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        خلاصه وضعیت
                      </span>
                      <span className="d-block d-sm-block d-md-none">
                        <i className="tim-icons icon-gift-2" />
                      </span>
                    </Button>
                    <Button
                      // color="primary"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", "week_chart-btn", {
                        active: bigChartData === "data3",
                      })}
                      onClick={() => setBgChartData("data3")}
                    >
                      <span className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        برنامه امتحانات
                      </span>
                      <span className="d-block d-sm-block d-md-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </Col>

                <Col
                  sm="6"
                  className="d-none d-sm-block d-md-block d-lg-block d-xl-block text-right pr-sm-5 pt-sm-2 dir-left"
                >
                  <span
                    style={{
                      display: bigChartData == "data2" ? "block" : "none",
                      marginLeft: "0px",
                      textAlign: "left",
                    }}
                  >
                    {info.courseChoosed.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.total_unit,
                      0
                    )}{" "}
                    : تعداد واحد
                  </span>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="dir-right groups_card" style={{ marginBottom: "0" }}>
            <CardBody className="courseGroupCard">
              {info.loading == 0 ? (
                "گروهی انتخاب نشده"
              ) : info.loading == 1 ? (
                <Spinner />
              ) : (
                info.courseGroupsListInContext.map((x, index) => (
                  <div className="coursCardContainer" key={index}>
                    <Card
                      className="courseCard"
                      key={index}
                      style={{
                        backgroundColor:
                          x.color_intensity_percentage > 0
                            ? `hsl(256, 45%, ${convertPercentagetoLigtness(
                                x.color_intensity_percentage
                              )}%)`
                            : "dimgray",
                      }}
                      onMouseEnter={() => {
                        setShowCourseHoverFunc("courseChoosed", [x]);
                      }}
                      onMouseLeave={() => {
                        setShowCourseHoverFunc("courseChoosed", []);
                      }}
                      onClick={() => {
                        let isFound = info.courseChoosed.some((element) => {
                          if (
                            element.complete_course_number ===
                            x.complete_course_number
                          ) {
                            return true;
                          }

                          return false;
                        });
                        // console.log(
                        //   "all the courses in group",
                        //   info.courseGroupsListInContext
                        // );
                        // console.log("clicked");
                        if (isFound != true) {
                          // console.log("includes------------------");

                          addNewLesson(x.complete_course_number,propsSetter);

                          changeInfo("courseChoosed", [
                            ...info.courseChoosed,
                            x,
                          ]);
                        }
                      }}
                    >
                      <CardBody className="courseCardBody">
                        <img
                          className="professorImage"
                          src={x.teachers[0].teacher_image}
                          alt="professorImage"
                        />
                        <div className="infoPart">
                          <p
                            style={{ textAlign: "right" }}
                            title={`${x.name} (گروه ${x.group_number})`}
                          >
                            {x.name} (گروه {x.group_number})
                          </p>
                          <p
                            style={{
                              fontSize: 12,
                              textAlign: "right",
                              marginRight: "10px",
                            }}
                            title={`"استاد:  "
                            ${x.teachers.map((y) => y.name).join(" , ")}`}
                          >
                            {`استاد:  ${x.teachers
                              .map((y) => y.name)
                              .join(" , ")}`.length < 35
                              ? `استاد:  ${x.teachers
                                  .map((y) => y.name)
                                  .join(" , ")}`
                              : `استاد:  ${x.teachers
                                  .map((y) => y.name)
                                  .join(" , ")}`.slice(0, 35) + "..."}
                          </p>

                          <div className="courseCardDownSide">
                            <p>
                              ثبت نام شده: {x.registered_count} از {x.capacity}{" "}
                            </p>

                            <img
                              className="fullLogo"
                              src={fullLogo}
                              alt="fullLogo"
                              style={{
                                display:
                                  x.color_intensity_percentage < 1
                                    ? "block"
                                    : "none",
                              }}
                            ></img>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <div className="buttonBar">
                      <Button
                        className="courseCardButton"
                        variant="secondary"
                        size="sm"
                        style={{
                          color: !info.courseChoosed.includes(x)
                            ? "white"
                            : "white",
                          fontSize: !info.courseChoosed.includes(x)
                            ? "large"
                            : "large",
                        }}
                        onClick={() => {
                          apiForModalData(x.complete_course_number, true);
                          // setShowLesson({ flag: true, data: modalData });
                        }}
                      >
                        <i className="tim-icons icon-badge ml-0" />
                      </Button>
                      <Button
                        className="courseCardButton"
                        variant="secondary"
                        size="sm"
                        style={{
                          fontSize: "large",
                          display: "flex",
                        }}
                        onClick={() => {
                          if (true) {
                            getShopData(x.complete_course_number ,SetOrderInfo, setPrices);
                            funcSetShowShoppingModal(true, x);
                          }
                        }}
                      >
                        <i className="tim-icons icon-cart ml-0" />
                      </Button>
                    </div>
                    <ModalLessons
                      show={showLesson}
                      close={() =>
                        setShowLesson(() => ({ ...showLesson, flag: false }))
                      }
                    />
                    <ModalShopping
                      show={showShoppingModal}
                      order={OrderInfo}
                      prices={prices}
                      close={() =>
                        setShowShoppingModal(() => ({
                          ...showShoppingModal,
                          flag: false,
                        }))
                      }
                    />
                  </div>
                ))
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
