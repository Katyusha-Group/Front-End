import React from "react";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardFooter,
} from "reactstrap";
import "./UserPage.css";
import Spinner from "react-bootstrap/Spinner";
import * as chart from "../../assets/img/chart.png";
import dataJson from "../../assets/data/week.json";
import HomeCardBar from "../../components/HomePageItems/HomeCardBar";
import ModalLessons from "../../components/ModalLessons/ModalLessons.jsx";
import courseGroups from "./courseGroups.json";
import sampleProfile from "./image1.png";
import fullLogo from "./full.png";
import { useInfo } from "../../contexts/InfoContext";
import { convertPercentagetoLigtness } from "../../global/functions";
import colorpaletHey from "./colors.json";
import { dayOfWeek } from "../../global/functions";
import { json } from "react-router-dom";
import cartlogo from "./cart.png";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert.jsx";
import SummaryChart from "../../components/SummaryChart/SummaryChart.jsx";
import ExamChart from "../../components/Charts/ExamChart.jsx";
import { sum } from "lodash";
import axios from "axios";
import ModalShopping from "../../components/ModalShopping/ModalShopping.jsx";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
const fetchRequest = "FETC_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";
const reducer = (state, action) => {
  switch (action.type) {
    case fetchRequest:
      // changeInfo("loading" , true)
      return { ...state, loading: true };
    case fetchSuccess:
      return { ...state, loading: false, props: action.payload };
    case fetchFail:
      // changeInfo("loading" , false)
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function UserPage() {
  // const [datac, setData] = React.useState([]);
  const { info, changeInfo } = useInfo();
  const [lesson, setLesson] = React.useState({
    name: "",
    day: 0,
    time: 0,
    long: 0,
  });
  //getting token
  const getError = (error) => {
    // console.log(error.data.message)
    return error.responst && error.response.data
      ? error.response.data
      : error.message;
  };
  const token = localStorage.getItem("authTokens");
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
  const [showX, setShowX] = React.useState("none");
  const [showCourseHover, setShowCourseHover] = React.useState({
    courseChoosed: [],
  });
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
  /**
   * send course number to save in database
   * @param {} num
   */
  function addNewLesson(num) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);

    const token = tokenClass.token.access;

    fetch("https://www.katyushaiust.ir/courses/my_courses/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("loading", info.loading);
      })
      .catch((error) => {
        console.error(error);
        propsSetter({ type: fetchFail, payload: getError(error) });
      });
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  /**
   * To get data of lessons from back and save it to infoState with changeInfoState
   * @param {*} infoState
   * @param {*} changeInfoState
   * @returns
   */

  function lessons(infoState, changeInfoState, getapi, classNameHover) {
    // console.log("hello");

    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;

    React.useEffect(() => {
      if (getapi == true) {
        showLoading();
        fetch("https://www.katyushaiust.ir/courses/my_courses", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("get data", data);
            // setData(data);
            changeInfoState("courseChoosed", data);
            // console.log("get data after reload", data);
          })
          .catch((error) => console.error(error));
        const activeRoute = (routeName) => {
          return location.pathname === routeName ? "active" : "";
        };
      }
    }, []);
    closeLoading();
    return infoState.courseChoosed.map((lessons) => {
      // console.log("lessons", lessons);
      return lessons.course_times.map((lesson, index) => {
        let lessonBoxId = `${lessons.complete_course_number}, ${index}`;
        let time = (timeStringToFloat(lesson.course_start_time) - 7.5) / 1.5;

        return (
          <div key={lessonBoxId}>
            <div
              id={lessonBoxId}
              className={`course text-center ${classNameHover} course-hover`}
              style={{
                top: `${defu + length * lesson.course_day}%`, //TODO
                right: `${top_defu + top_right * time}%`,
                width: `${
                  timeStringToFloat(lesson.course_end_time) -
                    timeStringToFloat(lesson.course_start_time) ==
                  1.5
                    ? 9.5
                    : 15
                }%`,
              }}
              onMouseOver={() =>
                (document.getElementById(lessonBoxId + "x").style.display =
                  "block")
              }
              onMouseOut={() =>
                (document.getElementById(lessonBoxId + "x").style.display =
                  "none")
              }
            >
              <button
                className="lesson_button"
                onClick={() => {
                  addNewLesson(lessons.complete_course_number);
                  // console.log("delete lesson", lessons.complete_course_number);
                  changeInfo(
                    "courseChoosed",
                    infoState.courseChoosed.filter(
                      (item) =>
                        item.complete_course_number !==
                        lessons.complete_course_number
                    )
                  );
                  closeLesson(false, lessons);
                  // console.log("delete info", infoState);
                }}
                id={lessonBoxId + "x"}
              >
                <strong>
                  <i
                    className="tim-icons icon-simple-remove"
                    style={{ margin: "auto" }}
                  ></i>
                </strong>
                {/* x */}
              </button>
              <div
                style={{ height: "100%" }}
                onClick={() => closeLesson(true, lessons)}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="m-1">
                  <strong title={lessons.name}>
                    {lessons.name.length < 27
                      ? lessons.name
                      : lessons.name.slice(0, 27) + "..."}
                  </strong>
                  <br />
                  {lessons.registered_count} از {lessons.capacity}
                  <br />
                  <p className="id_code"> {lessons.complete_course_number}</p>
                  {/* {console.log("lessons click", lessons)}n */}
                </div>
              </div>
            </div>
          </div>
        );
      });
    });
  }

  function getShopData(x) {
    console.log("hello22");
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    // console.log("data", props.show.data);
    console.log("id", showShoppingModal.data);
    console.log("api", `https://katyushaiust.ir/course-cart-order-info/${shopId.id}/`);
    // fetch(`https://katyushaiust.ir/course-cart-order-info/${shopId.id}/${x}`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${info.token.access}`,
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("get shop data", data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  return (
    <>
      {/* {showLoading()} */}
      {/* <AdminNavbar/> */}
      <Row>
        {/* <Spinner/> */}
        {/* <Col lg="12"><ExamChart /></Col> */}
        {/* <Button className="sidebar_button d-flex" style={{position:"absolute"}}>
        <i className="tim-icons icon-gift-2" />

        </Button> */}
        <Col sm="12">
          <Card className="week-card card-body">
            <CardBody className="week-card-body">
              <div className="">
                <div
                  className="chart"
                  style={{
                    display: bigChartData == "data1" ? "block" : "none",
                  }}
                >
                  {lessons(info, changeInfo, true, null)}
                  {lessons(
                    showCourseHover,
                    setShowCourseHoverFunc,
                    false,
                    "classNameHover"
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
                      className={classNames("btn-simple", {
                        active: bigChartData === "data1",
                      })}
                      color="primary"
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
                      color="primary"
                      id="1"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", {
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
                      color="primary"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", {
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
                          x.color_intensity_percentage > 10
                            ? `hsl(256, 45%, ${convertPercentagetoLigtness(
                                x.color_intensity_percentage
                              )}%)`
                            : "dimgray",
                      }}
                      onMouseEnter={() => {
                        console.log("x.complete", x.complete_course_number);
                        // console.log("z");
                        setShowCourseHoverFunc("courseChoosed", [x]);
                      }}
                      onMouseLeave={() => {
                        // console.log("out");
                        setShowCourseHoverFunc("courseChoosed", []);
                      }}
                      // onClick={() => {
                      //   setShowLesson({ flag: true, data: x });
                      // }}
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
                        // bool = bool == true?true:false;
                        // console.log('bool', bool)
                        console.log(
                          "all the courses in group",
                          info.courseGroupsListInContext
                        );
                        console.log("clicked");
                        if (isFound != true) {
                          console.log("includes------------------");

                          addNewLesson(x.complete_course_number);
                          changeInfo("courseChoosed", [
                            ...info.courseChoosed,
                            x,
                          ]);
                          } 
                        // else {
                        //   //remove lesson
                        //   addNewLesson(x.complete_course_number);
                        //   console.log(x.complete_course_number);
                        //   console.log(
                        //     "delete lesson",
                        //     x.complete_course_number
                        //   );
                        //   changeInfo(
                        //     "courseChoosed",
                        //     info.courseChoosed.filter(
                        //       (item) =>
                        //         item.complete_course_number !==
                        //         x.complete_course_number
                        //     )
                        //   );
                        //   closeLesson(false, lessons);
                        // }

                        // console.log("info", info);
                      }}
                    >
                      <CardBody className="courseCardBody">
                        <img
                          className="professorImage"
                          src={
                            x.teachers[0].teacher_image
                              ? x.teachers[0].teacher_image
                              : sampleProfile
                          }
                          alt="professorImage"
                        />
                        <div className="infoPart">
                          <p>
                            {x.name} (گروه {x.group_number})
                          </p>
                          <p style={{ fontSize: 12 }}>
                            {"استاد:  "}
                            {x.teachers.map((y)=>(y.name)).join(" , ")}
                          </p>
                          {/* <p style={{ fontSize: 12 }}>
                            {" "}
                            استاد:{x.teachers[0].name}
                          </p> */}
                          <div className="courseCardDownSide">
                            <div>
                              <p>
                                ثبت نام شده: {x.registered_count} از{" "}
                                {x.capacity}{" "}
                              </p>
                            </div>
                            <img
                              className="fullLogo"
                              src={fullLogo}
                              alt="fullLogo"
                              style={{
                                display:
                                  x.color_intensity_percentage < 11
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
                            : "aqua",
                          fontSize: !info.courseChoosed.includes(x)
                            ? "large"
                            : "large",
                        }}
                        onClick={() => {
                        setShowLesson({ flag: true, data: x });
                        }}
                        // onClick={() => {
                        //   let isFound = info.courseChoosed.some((element) => {
                        //     if (
                        //       element.complete_course_number ===
                        //       x.complete_course_number
                        //     ) {
                        //       return true;
                        //     }

                        //     return false;
                        //   });
                        //   // bool = bool == true?true:false;
                        //   // console.log('bool', bool)
                        //   console.log(
                        //     "all the courses in group",
                        //     info.courseGroupsListInContext
                        //   );
                        //   console.log("clicked");
                        //   if (isFound != true) {
                        //     console.log("includes------------------");

                        //     addNewLesson(x.complete_course_number);
                        //     changeInfo("courseChoosed", [
                        //       ...info.courseChoosed,
                        //       x,
                        //     ]);
                        //     } 
                        //   // else {
                        //   //   //remove lesson
                        //   //   addNewLesson(x.complete_course_number);
                        //   //   console.log(x.complete_course_number);
                        //   //   console.log(
                        //   //     "delete lesson",
                        //   //     x.complete_course_number
                        //   //   );
                        //   //   changeInfo(
                        //   //     "courseChoosed",
                        //   //     info.courseChoosed.filter(
                        //   //       (item) =>
                        //   //         item.complete_course_number !==
                        //   //         x.complete_course_number
                        //   //     )
                        //   //   );
                        //   //   closeLesson(false, lessons);
                        //   // }

                        //   // console.log("info", info);
                        // }}
                      >
                        {/* {!info.courseChoosed.includes(x) ?  "+": "x"} */}
                        <i className="tim-icons icon-badge ml-0" />
                      </Button>
                      <Button
                        className="courseCardButton"
                        variant="secondary"
                        size="sm"
                        style={{
                          // color: "aqua",
                          fontSize: "large",
                          display: "flex",
                        }}
                        onClick={() => {
                          if (true) {
                            // changeInfo("shop", [...info.shop, x]);
                            // addItemShop(x.complete_course_number);
                            getShopData(x.complete_course_number)
                            funcSetShowShoppingModal(true, x);
                          }
                        }}
                      >
                        <i className="tim-icons icon-cart ml-0" />
                        {/* <img
                          className="cart"
                          src={cartlogo}
                          alt="cartlogo"
                        ></img> */}
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
