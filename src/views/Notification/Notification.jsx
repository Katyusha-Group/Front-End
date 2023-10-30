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
} from "reactstrap";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { apis } from "../../assets/apis";

function UserProfile() {
  const [info, setInfo] = useState({});
  const [images, setImages] = React.useState([]);
  const [imageURLs, setlmageURLs] = React.useState("");
  const [notifs, setNotifs] = React.useState([

  ]);
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
    closeLoading();
    const fetchData = () => {
      fetch(apis["notification"], {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      })
        .then((response) => response.json())
        .then((data) => {
          setNotifs(data);
        })
        .catch((error) => console.error(error));
    };

    fetchData();

    const intervalId = setInterval(fetchData, 2000);
  }, []);

  useEffect(() => {
  }, [info]);

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
    setlmageURLs(newImageUrls);
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
              <Col md="8" className="overflow-auto " style={{ height: "70vh" }}>
                {notifs.length === 0 ? "اعلانی وجود ندارد" : ""}
                {notifs.map((notif, index) => {
                  let time = notif.applied_at.split("T")[1].split(".")[0];
                  let date = notif.applied_at.split("T")[0];
                  return (
                    <Card key={index}>
                      <Row className="category mb-0 mt-4 mr-4 ">
                        {notif.title}
                      </Row>
                      <Row className="category mb-0 mt-4 mr-4">
                        {notif.text.split("\n")[0]}
                      </Row>
                      <Row className="category mb-0 mt-2 mr-4">
                        {notif.text.split("\n")[1]}
                      </Row>
                      <Row className=" m-3 " style={{direction: "ltr"}}>
                        {date} {" "} {time}
                      </Row>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
