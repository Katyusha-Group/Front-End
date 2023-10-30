import React from "react";
import classNames from "classnames";
import { Card, CardBody, Row, Col } from "reactstrap";
import "./UserPage.css";
import ModalLessons from "../../components/ModalLessons/ModalLessons.jsx";
import { useInfo } from "../../contexts/InfoContext";
import { convertPercentagetoLigtness } from "../../global/functions";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert.jsx";
import SummaryChart from "../../components/SummaryChart/SummaryChart.jsx";
import ExamChart from "../../components/Charts/ExamChart.jsx";
import ModalShopping from "../../components/ModalShopping/ModalShopping.jsx";
import { reducer } from "../../Functions/reducer";
import { lessons } from "./Lessons";
import { getShopData } from "../../Functions/getData/getShopData";
import { addNewLesson } from "../../Functions/addNewLesson";
import CourseGroupCard from "../../components/Userpage/CourseGroupCard";
import CardFooterChart from "../../components/Userpage/CardFooterChart";


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
                  {lessons(
                    info,
                    changeInfo,
                    true,
                    null,
                    showLoading,
                    closeLoading,
                    setModalData,
                    setShowLesson
                  )}
                  {lessons(
                    showCourseHover,
                    setShowCourseHoverFunc,
                    false,
                    "classNameHover",
                    showLoading,
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
            <CardFooterChart
              bigChartData={bigChartData}
              setBgChartData={setBgChartData}
              classNames={classNames}
            />
          </Card>
        </Col>
        <CourseGroupCard
          convertPercentagetoLigtness={convertPercentagetoLigtness}
          setShowCourseHoverFunc={setShowCourseHoverFunc}
          addNewLesson={addNewLesson}
          propsSetter={propsSetter}
          showLoading={showLoading}
          setModalData={setModalData}
          setShowLesson={setShowLesson}
          SetOrderInfo={SetOrderInfo}
          setPrices={setPrices}
          showLesson={showLesson}
          setShowShoppingModal={setShowShoppingModal}
          getShopData={getShopData}
        />
        <ModalLessons
          show={showLesson}
          close={() => setShowLesson(() => ({ ...showLesson, flag: false }))}
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
      </Row>
    </>
  );
}
