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
} from "reactstrap";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import NotificationAlert from "react-notification-alert";

import { Link } from "react-router-dom";
import ChangePassword from "../ChangePass";
function UserProfile() {
  const [info, setInfo] = useState({});
  const [images, setImages] = React.useState([]);
  const [imageURLs, setlmageURLs] = React.useState("");

  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  useEffect(() => {
    showLoading();
    fetch("https://www.katyushaiust.ir/accounts/profile/", {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
    closeLoading();
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: UserProfile.jsx:45 ~ UserProfile ~ info:", info);
  }, [info]);

  function handleChange(event) {
    // setErrorMessage("");
    const { name, value } = event.target;
    setInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const startTelegramBot = () => {
    window.location.href = info.telegram_link;
  };
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = 2;
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
            <b>با موفقیت به سبد خرید اضافه شد</b>
          </div>
        </div>
      ),
      type: type,
      color: "white",
      // icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  function save() {
    var formData = new FormData();
    formData.append("first_name", info.first_name);
    console.log("🚀 ~ file: UserProfile.jsx:59 ~ save ~ info:", info);
    formData.append("last_name", info.last_name);
    if (images.length > 0) {
      formData.append("image", images[0]);
      console.log(
        "🚀 ~ file: UserProfile.jsx:73 ~ save ~ images[0]:",
        images[0]
      );
    } else {
      console.log("no image");
    }
    console.log("🚀 ~ file: UserProfile.jsx:61 ~ save ~ formData:", formData);
    fetch("https://www.katyushaiust.ir/accounts/profile/update_profile/", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
      body: formData,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        notify("tl");
      })
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
      //console.log("event.target.files", event.target.files);
      const fileList = Array.from(event.target.files);
      setImages(fileList);
      // onChangeImage(event.target.files[0]);
    }
  }
  const renderImageField = () => {
    const onChange = (event) => {
      onImageChangeForm(event);
    };
    

    // const { touched, error } = meta;
    return (
      <div>
        <NotificationAlert ref={notificationAlertRef} />

        <input
          className="btn"
          name="Image"
          // type="file"
          label="Image"
          // {...input}
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
        {/* {touched && error && <span>{error}</span>} */}
        {/* <img src={imag  eURLs} /> */}
        {console.log(
          "🚀 ~ file: UserProfile.jsx:94 ~ renderImageField ~ imageURLs:",
          imageURLs
        )}
        {/* {getImageListItemBarUtilityClass.map(imageSrc => (<img src=""/>))} */}
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
              <Col md="8">
                <Card>
                  <CardHeader>
                    <h5 className="title">ویرایش پروفایل</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>رشته</label>
                            <Input
                              defaultValue={info.department}
                              placeholder="رشته"
                              name="department"
                              type="text"
                              onChange={handleChange}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="3">
                          <FormGroup>
                            <label>جنسیت</label>
                            <Input
                              defaultValue={info.gender === "M" ? "مرد" : "زن"}
                              placeholder="جنسیت"
                              type="text"
                              name="gender"
                              disabled
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            <Input
                              placeholder={info.email}
                              type="email"
                              disabled
                              name="email"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>نام</label>
                            <Input
                              defaultValue={info.first_name}
                              placeholder="نام"
                              type="text"
                              name="first_name"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>نام خانوادگی</label>
                            <Input
                              defaultValue={info.last_name}
                              placeholder="نام خانوادگی"
                              type="text"
                              name="last_name"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>{/* <label>تلگرام</label> */}</FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      onClick={save}
                    >
                      ذخیره
                    </Button>
                  </CardFooter>
                </Card>
                <ChangePassword></ChangePassword>
              </Col>
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
                        {console.log(
                          "🚀 ~ file: UserProfile.jsx:223 ~ UserProfile ~ imageURLs:",
                          imageURLs != "" ? imageURLs : info.image
                        )}
                        {/* {console.log("🚀 ~ file: UserProfile.jsx:199 ~ UserProfile ~ info.image:", info.image)} */}
                        {/* <h5 className="title">Mike Andrew</h5> */}
                      </a>
                      {/* <p className="description">Ceo/Co-Founder</p> */}
                    </div>
                    <div className="card-description">
                      برای پروفایل خود عکس انتخاب کنید
                    </div>
                    {renderImageField()}

                    <div className="card-description"></div>
                  </CardBody>
                  <div className="card-description mt-2">
                    برای دیدن اعلان ها به تلگرام بروید
                  </div>
                  <CardFooter>
                    <div className="button-container">
                      <Button
                        onClick={startTelegramBot}
                        // color="primary"
                        className="btn-icon btn-round"
                      >
                        <i className="fab fa-telegram" />
                      </Button>
                    </div>
                    <div className="button-container"></div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
