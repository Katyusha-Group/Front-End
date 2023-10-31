import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
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
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { apis } from "../../assets/apis";
import { Link } from "react-router-dom";
function UserProfile() {
  const [info, setInfo] = useState({});
  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState("");
  const [orders, setOrders] = React.useState([]);

  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  useEffect(() => {
    showLoading();
    fetch(apis["accounts"]["profile"]["updateProfile"], {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => console.error(error));
    fetch(apis["orders"], {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error(error));

    closeLoading();
  }, []);

  useEffect(() => {}, [info]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const startTelegramBot = () => {
    window.location.href = info.telegram_link;
  };

  function save() {
    var formData = new FormData();
    formData.append("first_name", info.first_name);
    formData.append("last_name", info.last_name);
    const startTelegramBot = () => {
      window.location.href = info.telegram_link;
    };
    fetch(apis["accounts"]["profile"]["updateProfile"], {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
      body: formData,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = images.map((image) => URL.createObjectURL(image));
    setImageURLs(newImageUrls);
  }, [images]);
  function onImageChangeForm(event) {
    if (event.target.files && event.target.files) {
      const fileList = Array.from(event.target.files);
      setImages(fileList);
    }
  }
  const renderImageField = () => {
    const onChange = (event) => {
      onImageChangeForm(event);
    };
    return (
      <div>
        <input
          className="btn"
          name="Image"
          label="Image"
          id="file-input"
          type="file"
          onChange={onChange}
          style={{ display: "none" }}
        />
        <label
          id="file-input-label"
          for="file-input"
          className="btn btn-primary mt-3"
        >
          انتخاب عکس
        </label>
        <br />
        {images.length !== "" ? images.name : ""}
      </div>
    );
  };

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
                          src={imageURLs != "" ? imageURLs : info.image}
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
                      onClick={startTelegramBot}
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
                              <Col>{order.payment_status === "C" ?"پرداخت نشده" : "پرداخت شده"}</Col>
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
