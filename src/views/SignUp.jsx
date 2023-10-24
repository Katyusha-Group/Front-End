import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import "../assets/css/SignUp.css";
import SelectStyles from "../assets/styles/SelectStyles";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../contexts/InfoContext";
import Swal from 'sweetalert2';
import { apis } from "../assets/apis";
import {IsValidEmail} from "../Functions/IsValidEmail"
import {PasCloseEyeIcon} from "../Functions/PasCloseEyeIcon"
import {ConfirmPasCloseEyeIcon} from "../Functions/ConfirmPasCloseEyeIcon"
// reactstrap components
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

function SignUp() {
  const { info, changeInfo } = useInfo();
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const genderOptions = [
    { value: "F", label: "زن" },
    { value: "M", label: "مرد" },
  ];

  const [subjectOptions, setSubjectOptions] = useState();
  React.useEffect(() => {
    fetch(apis["departmentsAll"]["names"])
      .then((response) => response.json())
      .then((subjectOptions) => {
        setSubjectOptions(subjectOptions);
      });
  }, []);

  //////////////////////////// Input errors //////////////////
  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const [gender, setGender] = useState();
  const [subject, setSubject] = useState();

  function handleSubject(selectedOption) {
    setErrorMessage("");
    setSubject(selectedOption.value);
  }
  function handleGender(selectedOption) {
    setErrorMessage("");
    setGender(selectedOption.value);
  }
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passError: "",
    passErrorRep: "",
    genderError: "",
    subjectError: "",
    backError: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();

    const errors = [
      {
        emailError: "",
        passError: "",
        passErrorRep: "",
        genderError: "",
        subjectError: "",
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
    if (formData.password.length < 8 && formData.password) {
      errors.passError = "!رمز عبور باید حداقل شامل هشت کاراکتر باشد";
    }
    if (formData.passwordConfirm.trim().length === 0) {
      errors.passErrorRep = "!وارد کردن تکرار رمز عبور الزامی است";
    }
    if (
      formData.password !== formData.passwordConfirm &&
      !errors.passError &&
      !errors.passErrorRep
    ) {
      errors.passErrorRep = "!تکرار رمز عبور و رمز عبور یکسان نیست";
    }
    if (!gender) {
      errors.genderError = "!وارد کردن جنسیت الزامی است";
    }
    if (!subject) {
      errors.subjectError = "!وارد کردن رشته الزامی است";
    }
    setErrorMessage({
      emailError: errors.emailError,
      passError: errors.passError,
      passErrorRep: errors.passErrorRep,
      genderError: errors.genderError,
      subjectError: errors.subjectError,
    });
    if (
      errors.emailError ||
      errors.passError ||
      errors.passErrorRep ||
      errors.genderError ||
      errors.subjectError
    ) {
      return;
    }
    Swal.fire({
      title: 'کمی صبر کنید',
      html: 'در حال بررسی درخواست ثبت نام',
      allowOutsideClick: false,
      timerProgressBar: true,
      showConfirmButton: false,
      background: '#3c3e5d',
        color:'#ceccc0',
      // timer: 2000,
      width:'25rem',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        // const b = Swal.getHtmlContainer().querySelector('b')
        // timerInterval = setInterval(() => {
        //   b.textContent = Swal.getTimerLeft()
        // }, 100)
      },
      // willClose: () => {
      //   clearInterval(timerInterval)
      // }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        //console.log('I was closed by the timer')
        /////has to be changed to no internet
      }
    })
  
    const response = await fetch("https://katyushaiust.ir/accounts/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: formData.email,
        password1: formData.password,
        password2: formData.passwordConfirm,
        department: subject,
        gender: gender,
      }),
    });
    const data = await response.json();
    Swal.close()
    if ( response.status===201){      
      localStorage.setItem("token",data.token)
      localStorage.setItem("verificationLink",data.url)
      Swal.fire({
        icon: 'success',
        title: ' کد تایید ارسال شد',
        html:'لطفا ایمیلتان را چک کنید',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
        confirmButtonText:"باشه"
      })
      Navigate("/verification");
    } else {
      if (data.email) errors.backError = "!این ایمیل پیش از این ثبت شده است";
      if (data.password) errors.backError = "!رمز عبور قابل قبول نیست";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="signUpContainer">
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="4" >
                {errorMessage.backError && (
                  <div className="back-error" style={{direction: 'ltr'}}>{errorMessage.backError}</div>
                )}
                <Card style={{direction: 'ltr'}}>
                  <CardHeader>
                    <h5 className="title text-center">ثبت نام</h5>
                  </CardHeader>
                  <CardBody>
                    <Form >
                      <Row>
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
                              <div className="error" >
                                {errorMessage.emailError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label>رمز عبور</label>
                            <Input
                              className="text-right"
                              placeholder="رمز عبور را وارد کنید"
                              type="password"
                              name="password"
                              id="password_field"
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
                      <Row>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label>تکرار رمز عبور</label>
                            <Input
                              className="text-right"
                              placeholder="تکرار رمز عبور را وارد کنید"
                              type="password"
                              name="passwordConfirm"
                              id="confirm_password_field"
                              onChange={handleChange}
                              value={formData.passwordConfirm}
                            />
                            <i
                              className="tim-icons fa fa-eye-slash viewpass mr-4 text-muted"
                              onClick={ConfirmPasCloseEyeIcon}
                              id="toggleConfirmPassword"
                            ></i>
                            {errorMessage.passErrorRep && (
                              <div className="error">
                                {errorMessage.passErrorRep}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <FormGroup className="text-right">
                            <label>رشته</label>
                            <br />

                            <Select
                              options={subjectOptions}
                              styles={SelectStyles}
                              isRtl
                              placeholder="انتخاب کنید "
                              name="subject"
                              onChange={handleSubject}
                            />

                            {errorMessage.subjectError && (
                              <div className="select-error">
                                {errorMessage.subjectError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                        <Col lg="5" className="offset-lg-1">
                          <FormGroup className="text-right">
                            <label>جنسیت</label>
                            <br />

                            <Select
                              options={genderOptions}
                              styles={SelectStyles}
                              isRtl
                              placeholder="انتخاب کنید "
                              name="gender"
                              onChange={handleGender}
                            />

                            {errorMessage.genderError && (
                              <div className="select-error" style={{whiteSpace: 'nowrap'}}>
                                {errorMessage.genderError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <Container>
                      <Row>
                        <Col className="text-center pt-md-2" md="12">
                          <Link to="/login" color="primary">
                            ورود به حساب کاربری
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      onClick={handleSubmit}
                      className="btn-fill"
                      color="primary"
                      type="submit"
                    >
                      ثبت نام
                    </Button>
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

export default SignUp;
