import React from "react";
import "../assets/css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeLoading, showLoading } from "../components/LoadingAlert/LoadingAlert";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { apis } from "../assets/apis";
import { IsValidEmail } from "../Functions/IsValidEmail"
import { PasCloseEyeIcon } from "../Functions/PasCloseEyeIcon"
import { EmailFormGroup } from "../assets/FormGroups/EmailFormGroup";
import { PasswordFormGroup } from "../assets/FormGroups/PasswordFormGroup";
function Login(props) {
  let [shop_caller, setShop_caller] = React.useState()
  let idShop = "ali";
  React.useEffect(() => {
  }, [idShop]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const Navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passError: "",
    backError: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
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
    if (!IsValidEmail(formData.email) && !errors.emailError) {
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
    showLoading();
    const response = await fetch(apis["accounts"]["login"], {
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
    closeLoading();
    if (response.status === 200) {
      setAuthTokens(data.token);
      setShop_caller(true);
      localStorage.setItem("authTokens", JSON.stringify(data));
      const tokenClass = JSON.parse(JSON.stringify(data));
      const token = tokenClass.token.access;
      const shopId = await fetch(apis["carts"], {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      idShop = await shopId.json();
      if (shopId.status == 201 || shopId.status == 200) {
        localStorage.setItem("shopId", JSON.stringify(idShop))
        let test = localStorage.getItem("shopId")
      }
      else {
        console.error("shopId error", shopId.status)
      }
      Navigate("/home/page");
    } else {
      errors.backError = "!رمز عبور اشتباه است و یا حساب کاربری ندارید";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="signUpContainer" >
          <div className="content contentLogin" style={{ direction: "rtl" }}>
            <Row className="just-center">
              <Col className="text-right" md="4">
                {errorMessage.backError && (
                  <div className="back-error" style={{ direction: 'ltr' }}>{errorMessage.backError}</div>
                )}
                <Card>
                  <CardHeader>
                    <h5 className="title text-center">ورود به سایت</h5>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Form>
                      <Row style={{ justifyContent: 'center' }}>
                        <Col md="12">
                          <EmailFormGroup
                            value={formData.email}
                            onChange={handleChange}
                            error={errorMessage.emailError}>
                          </EmailFormGroup>
                        </Col>
                      </Row>
                      <Row style={{ justifyContent: 'center' }}>
                        <Col md="12">
                          <PasswordFormGroup
                            value={formData.password}
                            onChange={handleChange}
                            error={errorMessage.passError}
                            onClick={PasCloseEyeIcon}>
                          </PasswordFormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <br></br>
                    <Container>
                      <Row style={{ justifyContent: 'center' }}>
                        <Col className="text-center" md="10">
                          <Link to="../forgetPassword" color="primary">
                            فراموشی رمز عبور
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <Row style={{ justifyContent: 'center' }}>
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