import React from "react";
import "../assets/css/Login.css";
import * as log from "../assets/img/LoginRocket.svg";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../contexts/InfoContext";
import { closeLoading, showLoading } from "../components/LoadingAlert/LoadingAlert";
//import swal from "sweetalert";
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
import { conforms } from "lodash";

function Login(props) {
  // console.log("🚀 ~ file: Login.jsx:29 ~ Login ~ props:", props)
  let [shop_caller,setShop_caller] = React.useState()
  // console.log("default gohNakhor",shop_caller)
  let idShop = "ali";
  React.useEffect(() => {
    // console.log("state", idShop);
  }, [idShop]);
  // localStorage.clear();
  ////////////////////////////// Close eye Icon //////////////////////
  function PasCloseEyeIcon() {
    // toggle the type attribute
    const togglePassword = document.querySelector("#togglePassword");
    const passwordV = document.querySelector("#password_field");
    const type =
      passwordV.getAttribute("type") === "password" ? "text" : "password";

    togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.localStoragegetElementById("togglePassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("togglePassword").className =
          "fa fa-eye viewpass mr-4 text-muted");
    passwordV.setAttribute("type", type);
  }

  //////////////////////////// End of Close eye Icon //////////////////

  ////////////////////////////// Input errors ///////////////////////
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  
  // React.useEffect(() => {
    
  //   fetch("https://katyushaiust.ir/carts/", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("data all",data);
  //       console.log("data of shop catched: ", data)
  //       localStorage.setItem("shopId", data)
  //     })
  //     .catch((error) => console.error(error));
  //   // console.log(data);
  // }, [shop_caller]);
  function gohNakhor(){
    setShop_caller(true);
    // console.log("gohNakhor:",shop_caller)
  }
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setloading] = useState(true);

  const Navigate = useNavigate();
  // localStorage.clear();
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passError: "",
    backError: "",
  });
  async function handleSubmit(event) {

    // console.log("toooooken"+localStorage.authTokens)
    event.preventDefault();
    // const { info } = useInfo();
    // info.token = "73df55369dcfa58a95428e706f23544fadbe39e0";

    const errors = [
      {
        emailError: "",
        passError: "",
        backError: "",
      },
    ];
    if (formData.email.trim().length === 0) {
      errors.emailError = "!وارد کردن ایمیل الزامی است";
    }
    if (!isValidEmail(formData.email) && !errors.emailError) {
      errors.emailError = "!قالب ایمیل قابل قبول نیست";
    }
    if (formData.password.trim().length === 0) {
      errors.passError = "!وارد کردن رمز عبور الزامی است";
    }
    setErrorMessage({
      emailError: errors.emailError,
      passError: errors.passError,
    });
    if (errors.emailError || errors.passError) {
      return;
    }
    // alert("Erfan Googooli!");
    // console.log("No error in front");
    showLoading();
    const response = await fetch("https://katyushaiust.ir/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.email,
        password: formData.password,
      }),
    });
    const data = await response.json();
    // console.log("response",response);
    closeLoading();
    if (response.status === 200) {
      // props.onLogIn();
      // console.log("🚀 ~ file: Login.jsx:158 ~ handleSubmit ~ onLogIn:", props.onLogIn)
      
      setAuthTokens(data.token);
      // console.log(authTokens);
      setShop_caller(true);
      // console.log("shop_caller: ", shop_caller)
      localStorage.setItem("authTokens", JSON.stringify(data));
      // localStorage.getItem("authTokens");
      const tokenClass = JSON.parse(JSON.stringify(data));
      const token = tokenClass.token.access;
      const shopId = await fetch("https://katyushaiust.ir/carts/", {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
         },
      })
      // console.log("shopId", shopId.json())
      idShop = await shopId.json();
      // console.log("shopId_data",idShop);
      if (shopId.status == 201 || shopId.status == 200) {
        // console.log("shopId.json()",idShop)
        localStorage.setItem("shopId", JSON.stringify(idShop))
        // console.log("shopId localstorage ",localStorage.getItem("shopId"))
        let test = localStorage.getItem("shopId")
        // console.log("test", JSON.parse(test)[0])
      }
      else{
        console.error("shopId error", shopId.status)
      }
      // console.log("shopId: ",shopId)
      Navigate("/admin/page");
    } else {
      // console.log(data.error);
      errors.backError = "!رمز عبور اشتباه است و یا حساب کاربری ندارید";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
      // if (data.error === "Invalid credentials") {
      //   //show pop up
      //   swal("Error!", "Invalid credentials!", "error");
      // }
      // if (data.error === "email is not verified") {
      //   swal("Error!", "check your mailbox for verification", "error");
      //   //show pop up with  check your mailbox for verification
      // }
    }
  }
  //////////////////////////// End of input errors //////////////////
  return (
    <>
      <div className="wrapper">
        <div className="signUpContainer" >
          <div className="content contentLogin" style={{direction:"rtl"}}>
            <Row className="just-center">
              <Col className="text-right" md="4">
                {errorMessage.backError && (
                  <div className="back-error" style={{direction: 'ltr'}}>{errorMessage.backError}</div>
                )}
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
                      <Row style={{justifyContent: 'center'}}>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            <Input
                              className="text-right"
                              placeholder="ایمیل خود را وارد کنید"
                              type="email"
                              name="email"
                              // autoComplete="off"
                              onChange={handleChange}
                              value={formData.email}
                            />
                            {errorMessage.emailError && (
                              <div className="error">
                                {errorMessage.emailError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row style={{justifyContent: 'center'}}>
                        <Col md="12">
                          <FormGroup className="text-right">
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
                            {errorMessage.passError && (
                              <div className="error">
                                {errorMessage.passError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <br></br>
                    <Container>
                      <Row style={{justifyContent: 'center'}}>
                        <Col className="text-center" md="10">
                          <Link to="../forgetPassword" color="primary">
                            فراموشی رمز عبور
                            </Link>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <Row style={{justifyContent: 'center'}}>
                        <Col className="text-center pt-md-2" md="10">
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
