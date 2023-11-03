import React from "react";
// import "../assets/css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeLoading, showLoading } from "../components/LoadingAlert/LoadingAlert";
import Swal from "sweetalert2";
import { apis } from "../assets/apis";
import { IsValidEmail } from "../Functions/IsValidEmail";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [formData, setFormData] = useState({
    email: ""
  });

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const Navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    backError: ""
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const errors = [
      {
        emailError: "",
      },
    ];
    if (formData.email.trim().length === 0) {
      errors.emailError = "!وارد کردن ایمیل الزامی است";
    }
    if (!IsValidEmail(formData.email) && !errors.emailError) {
      errors.emailError = "!قالب ایمیل قابل قبول نیست";
    }
    setErrorMessage({
      emailError: errors.emailError,
    });
    if (errors.emailError || errors.passError) {
      return;
    }
    showLoading();
    const response = await fetch(apis["accounts"]["resetPassword"], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
    });
    const data = await response.json();
    closeLoading();
    if (response.status === 200) {
      localStorage.setItem('link', data.link);
      Swal.fire({
        icon: 'success',
        title: 'کد تایید ارسال شد.',
        html: 'لطفا ایمیلتان را چک کنید',
        background: '#3c3e5d',
        color: '#ceccc0',
        width: '25rem',
        confirmButtonText: "باشه"
      }).then((result) => {
        if (result) {
          window.location = "/verificationForgetPassword";
        } else {
        }
      });
      Navigate("/verificationForgetPassword")
    }
    else {
      if (response.status === 429) {
        errors.backError = ". حداکثر تعداد درخواست فراموشی رمز عبور ۵ بار است . شما بیش از ۵ بار درخواست ایمیل کرده اید ";
        setErrorMessage({
          ...errorMessage,
          backError: errors.backError,
        });
      } else {
        errors.backError = "!ایمیل وارد شده اشتباه است و یا حساب کاربری ندارید";
        setErrorMessage({
          ...errorMessage,
          backError: errors.backError,
        });
      }
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="signUpContainer">
          <div className="content contentLogin">
            <Row className="just-center">
              <Col className="text-right" md="4">
                {errorMessage.backError && (
                  <div className="back-error" style={{ direction: 'ltr' }}>{errorMessage.backError}</div>
                )}
                <Card>
                  <CardHeader>
                    <h5 className="title text-center"> فراموشی رمز عبور </h5>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Form>
                      <Row style={{ justifyContent: 'center' }}>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            <Input
                              className="text-right"
                              placeholder="ایمیل خود را وارد کنید"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                            />
                            {errorMessage.emailError && (
                              <div className="error" style={{ direction: 'ltr' }}>
                                {errorMessage.emailError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <br></br>
                    <Container>
                      <Row style={{ justifyContent: 'center' }}>
                        <Col className="text-center pt-md-2" md="10">
                          بازگشت به صفحه ی
                          <Link to="../login" color="primary">
                            &nbsp;ورود به حساب کاربری&nbsp;
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
                      ثبت ایمیل
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

export default ForgetPassword;
