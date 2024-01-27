import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import img from "../../assets/img/DefaultAvatar.jpg";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Swal from "sweetalert2";
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
import Spinner from "react-bootstrap/Spinner";

import { apis } from "../../assets/apis";
import { Link } from "react-router-dom";
import ChangePassword from "../ChangePass";
import { usesProfileMe } from "../../hooks/useProfileMe";

function UserProfile() {
  const [info, setInfo] = useState({});
  const [images, setImages] = React.useState([]);
  const [imageURLs, setlmageURLs] = React.useState("");
  const { profile, setProfile, loading: loading2 } = usesProfileMe();

  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

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

  // function save() {
  //   var formData = new FormData();
  //   // formData.append("first_name", info.first_name);
  //   // formData.append("last_name", info.last_name);
  //   formData.append("name", info.first_name + " " + info.last_name);
  //   // if (images.length > 0) {
  //   //   formData.append("image", images[0]);
  //   // } else {
  //   // }
  //   fetch(apis["profiles"]["updateProfile"], {
  //     method: "PATCH",
  //     headers: { Authorization: `Bearer ${token}` },
  //     "Content-Type": "application/json",
  //     body: formData,
  //     redirect: "follow",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // notify("tl");
  //     })
  //     .catch((error) => console.error(error));
  //   const activeRoute = (routeName) => {
  //     return location.pathname === routeName ? "active" : "";
  //   };
  // }
  function save() {
    var formData = new FormData();
    formData.append("name", info.first_name + " " + info.last_name);

    fetch(apis["profiles"]["updateProfile"], {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
      body: formData,
      redirect: "follow",
    })
      .then((response) => {
        if (response.status === 200) {
          // Display a success message using Swal
          Swal.fire({
            icon: "success",
            title: "اطلاعات با موفقیت تغییر یافت",
            showConfirmButton: false,
            timer: 1500, // Automatically close after 1.5 seconds
            background: "#3c3e5d",
            color: "#ceccc0",
            width: "26rem",
            confirmButtonText: "باشه",
          });
        }
        return response.json();
      })
      .then((data) => {
        // Additional handling if needed
      })
      .catch((error) => {
        console.error(error);
        // Display an error message using Swal if the request fails
        Swal.fire({
          icon: "error",
          title: "با خطا مواجه شد...",
          background: "#3c3e5d",
          color: "#ceccc0",
          width: "26rem",
          confirmButtonText: "باشه",
        });
      });

    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }
  function savePic() {
    var formData = new FormData();
  
    if (images.length > 0) {
      formData.append("image", images[0]);
    } else {
      // Handle case when no image is selected, if needed
    }
  
    fetch(apis["profiles"]["updateProfile"], {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
      body: formData,
      redirect: "follow",
    })
      .then((response) => {
        if (response.status === 200) {
          // Display a success message using Swal
          Swal.fire({
            icon: 'success',
            title: 'عکس با موفقیت عوض شد',
            showConfirmButton: false,
            timer: 1500,
            background: "#3c3e5d",
            color: "#ceccc0",
            width: "26rem",
            confirmButtonText: "باشه",
          });
        }
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'خطا...',
          background: "#3c3e5d",
          color: "#ceccc0",
          width: "26rem",
          confirmButtonText: "باشه",
        });
      });
  
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
    if (loading2) {
      return <></>;
    }
    return (
      <div>
        {/* <NotificationAlert ref={notificationAlertRef} /> */}

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
  console.log("loading2", loading2);

  return (
    <>
      <div className="wrapper" style={{ direction: "rtl",overflow:"auto" }}>
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
                        <Col className="pr-md-1" md="4">
                          <FormGroup>
                            <label>رشته</label>
                            {loading2 ? (
                              <Spinner animation="border" variant="primary" />
                            ) : (
                              <Input
                                defaultValue={profile.department}
                                placeholder="رشته"
                                name="department"
                                type="text"
                                onChange={handleChange}
                                disabled
                              />
                            )}
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="2">
                          <FormGroup>
                            <label>جنسیت</label>
                            {loading2 ? (
                              <Spinner animation="border" variant="primary" />
                            ) : (
                              <Input
                                defaultValue={
                                  profile.gender === "M" ? "مرد" : "زن"
                                }
                                placeholder="جنسیت"
                                type="text"
                                name="gender"
                                disabled
                                onChange={handleChange}
                              />
                            )}
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            {loading2 ? (
                              <Spinner animation="border" variant="primary" />
                            ) : (
                              <Input
                                placeholder={profile.email}
                                type="email"
                                disabled
                                name="email"
                                onChange={handleChange}
                                dir="ltr"
                                style={{ paddingLeft: "15px" }}
                              />
                            )}
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
                          <FormGroup></FormGroup>
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
                        {loading2 ? (
                          <Spinner animation="border" variant="primary" />
                        ) : (
                          <img
                            alt="..."
                            className="avatar"
                            // src={profile !== null ? profile.image : img}
                            src={imageURLs != "" ? imageURLs : profile.image}
                          />
                        )}
                        {console.log("profile", profile)}
                      </a>
                    </div>
                    <div className="card-description">
                      برای پروفایل خود عکس انتخاب کنید
                    </div>
                    {renderImageField()}

                    <div className="card-description"></div>
                  </CardBody>
                  <div className="card-description mt-2">
                    <Button
                      className="$btn-fill {styles.}"
                      color="primary"
                      type="submit"
                      onClick={savePic}
                    >
                      ثبت عکس
                    </Button>{" "}
                  </div>
                  <CardFooter></CardFooter>

                  <div className="button-container"></div>
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
