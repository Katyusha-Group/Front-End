import React from "react";
import "../assets/css/Login.css";
import { useState } from "react";
import * as log from "../assets/img/LoginRocket.svg";
// reactstrap components
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
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function Login() {
  ////////////////////////////// Close eye Icon //////////////////////
  function PasCloseEyeIcon() {
    // toggle the type attribute
    const togglePassword = document.querySelector("#togglePassword");
    const passwordV = document.querySelector("#password_field");
    const type =
      passwordV.getAttribute("type") === "password" ? "text" : "password";

    togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("togglePassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("togglePassword").className =
          "fa fa-eye viewpass mr-4 text-muted");
    passwordV.setAttribute("type", type);
  }

  //////////////////////////// End of Close eye Icon //////////////////

  ////////////////////////////// Input errors ///////////////////////
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.email.trim().length === 0) {
      console.log("وارد کردن ایمیل الزامی می‌باشد");
      return;
    }

    if (!isValidEmail(formData.email)) {
      console.log("قالب ایمیل قابل قبول نیست");
      return;
    }
    if (formData.password.trim().length === 0) {
      console.log("وارد کردن پسوورد الزامی می‌باشد");
      return;
    }
    console.log("خوش آمدید");
  }

  //////////////////////////// End of input errors //////////////////
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content contentLogin">
            <Row className="just-center">
              <Col className="text-right" md="4">
                <Card>
                  <CardHeader>
                    <h5 className="title text-center">ورود به سایت</h5>
                    <Row>
                      <Col md="12">
                        {/* <img
                          alt="LoginImage"
                          className="pl-5 pr-5"
                          src={log.default}
                        /> */}
                      </Col>
                    </Row>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            <Input
                              className="text-right"
                              placeholder="ایمیل خود را وارد کنید"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>رمز عبور</label>
                            <Input
                              className="text-right"
                              placeholder="رمز عبور خود را وارد کنید"
                              type="password"
                              id="password_field"
                              //id="message"
                              name="password"
                              onChange={handleChange}
                              value={formData.password}
                            ></Input>
                            <i
                              className="tim-icons fa fa-eye-slash viewpass mr-4 text-muted"
                              onClick={PasCloseEyeIcon}
                              id="togglePassword"
                            ></i>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <br></br>
                    <Container>
                      <Row>
                        <Col className="text-center" md="12">
                          <Link href="#" color="primary">
                            فراموشی رمز عبور
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <Row>
                        <Col className="text-center pt-md-2" md="12">
                          در صورت نداشتن حساب کاربری
                          <Link to="../signup" color="primary">
                            &nbsp;ثبت‌نام&nbsp;
                          </Link>
                          کنید
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                  <br></br>
                  <CardFooter className="text-center">
                    <Button
                      onClick={handleSubmit}
                      //onChange={handleClick}
                      className="btn-fill"
                      color="primary"
                      type="submit"
                    >
                      ورود
                    </Button>
                  </CardFooter>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
