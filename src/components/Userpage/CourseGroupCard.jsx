import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Row,
  Col,
  CardFooter,
  Spinner,
} from "reactstrap";
import fullLogo from "../../assets/img/full.png";
import { apiForModalData } from "../../Functions/Userpage/apiForModalData";
import { useInfo } from "../../contexts/InfoContext";
export default function CourseGroupCard({
  convertPercentagetoLigtness,
  setShowCourseHoverFunc,
  addNewLesson,
  propsSetter,
  showLoading,
  setModalData,
  setShowLesson,
  SetOrderInfo,
  setPrices,
  showLesson,
  setShowShoppingModal,
  getShopData
}) {
  const { info, changeInfo } = useInfo();
  function funcSetShowShoppingModal(flag, data) {
    setShowShoppingModal({ flag: flag, data: data });
  }
  return (
    <Col sm="12">
      {/*TODO  */}
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
                    if (isFound != true) {
                      addNewLesson(x.complete_course_number, propsSetter);

                      changeInfo("courseChoosed", [...info.courseChoosed, x]);
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
                        {`استاد:  ${x.teachers.map((y) => y.name).join(" , ")}`
                          .length < 35
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
                      apiForModalData(
                        x.complete_course_number,
                        true,
                        showLoading,
                        setModalData,
                        setShowLesson
                      );
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
                        getShopData(
                          x.complete_course_number,
                          SetOrderInfo,
                          setPrices
                        );
                        funcSetShowShoppingModal(true, x);
                      }
                    }}
                  >
                    <i className="tim-icons icon-cart ml-0" />
                  </Button>
                </div>
                
              </div>
            ))
          )}
        </CardBody>
      </Card>
    </Col>
  );
}
