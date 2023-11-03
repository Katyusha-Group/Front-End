import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
function UserProfile() {
  const { info, orders } = useUpdateProfile();
  return (
    <>
      <div className="wrapper" style={{ direction: "rtl" }}>
        <div className="main-panel">
          <AdminNavbar></AdminNavbar>
          <div className="mt-5"></div>
          <div className="content_without_sidebar">
            <Row>
              <Col md="4">
                <Card className="card-user">
                  <CardBody className="pb-0">
                    <CardText />
                    <div className="author">
                      <div className="block block-one" />
                      <div className="block block-two" />
                      <div className="block block-three" />
                      <div className="block block-four" />
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar"
                          src={ info.image}
                        />
                      </a>
                    </div>
                    <div className="card-description">
                      {info.email}
                      <br />
                      {info.first_name + " "}
                      {info.last_name}
                      <br />
                      {info.department}
                    </div>

                    <div className="card-description"></div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      onClick={() => {
                        window.location.href = info.telegram_link;
                      }}
                      className="btn-icon btn-round"
                    >
                      <i className="fab fa-telegram" />
                    </Button>

                    <div className="button-container"></div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="8">
                <Row>
                  <Card>
                    <div className="category p-3">تاریخچه سبد خرید</div>
                  </Card>
                </Row>

                <Row style={{ maxHeight: "70vh" }} className="overflow-auto">
                  <UncontrolledAccordion
                    defaultOpen={["1", "2"]}
                    stayOpen
                    className=" mb-0 "
                  >
                    {orders.length === 0 ? "سفارشی وجود ندارد" : ""}
                    {orders.map((order, index) => {
                      let [date, time] = order.placed_at.split("T");
                      return (
                        <AccordionItem className="card mb-2" key={index}>
                          <AccordionHeader
                            targetId={index}
                            className="card mb-0"
                          >
                            {"در تاریخ " + date}{" "}
                            {"و در زمان " + time.split(".")[0]}
                          </AccordionHeader>
                          <AccordionBody
                            accordionId={index}
                            className="category"
                          >
                            <Row className="mb-2">
                              <Col>زمان </Col>
                              <Col>{time.split(".")[0]}</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>کد خرید</Col>
                              <Col>{order.ref_code}</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>تعداد</Col>
                              <Col>{order.total_number}</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>نوع پرداخت</Col>
                              <Col>
                                {order.payment_method === "W"
                                  ? "کیف پول"
                                  : "درگاه پرداخت"}
                              </Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>وضعیت</Col>
                              <Col>
                                {order.payment_status === "C"
                                  ? "پرداخت نشده"
                                  : "پرداخت شده"}
                              </Col>
                            </Row>
                          </AccordionBody>
                        </AccordionItem>
                      );
                    })}
                  </UncontrolledAccordion>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
