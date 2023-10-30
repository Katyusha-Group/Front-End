import React from 'react'
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Row,
    Col,
    CardFooter,
  } from "reactstrap";
  import { useInfo } from '../../contexts/InfoContext';
export default function CardFooterChart({bigChartData, setBgChartData,classNames}) {
    const { info, changeInfo } = useInfo();
  return (
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
  )
}
