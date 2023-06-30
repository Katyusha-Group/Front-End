import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import "../assets/css/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../contexts/InfoContext";
import Swal from 'sweetalert2';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  // const subjects = [];
  React.useEffect(() => {
    fetch("https://www.katyushaiust.ir/departments/names")
      .then((response) => response.json())
      .then((subjectOptions) => {
        // console.log(subjectOptions);
        setSubjectOptions(subjectOptions);
      });
  }, []);

  // this.setState({selectOptions: options})
  // const subs = {};
  // subs = subject.map()
  const customStyles = {
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: "transparent",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#9A9A9A",
      backgroundColor: state.isSelected ? "#27293d" : "#27293d",
      "&:hover": {
        backgroundColor: "rgba(222, 222, 222, 0.3)",
      },
      transition: "all 150ms linear",
      margin: "-4px 0px",
      padding: "0.6rem 24px",
      fontSize: "0.75rem",
      fontWeight: "400",
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,

      "&:hover": {
        borderColor: "#e14eca",
      },
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "rgba(255, 255, 255, 0.8)",
      borderColor: state.isFocused ? "#e14eca" : "#2b3553",
      borderRadius: "0.4285rem",
      fontSize: "0.75rem",
      marginTop: "5px",
      fontWeight: "400",
      transition:
        "color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };
  /////////////////////////////// End of Select //////////////////////

  /////////////////////////////// Close eye Icon /////////////////////

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

  function ConfirmPasCloseEyeIcon() {
    // toggle the type attribute
    const toggleConfirmPassword = document.querySelector(
      "#toggleConfirmPassword"
    );
    const confirmPasswordV = document.querySelector("#confirm_password_field");
    const type =
      confirmPasswordV.getAttribute("type") === "password"
        ? "text"
        : "password";

    toggleConfirmPassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("toggleConfirmPassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("toggleConfirmPassword").className =
          "fa fa-eye viewpass mr-4 text-muted");
    confirmPasswordV.setAttribute("type", type);
  }
  //////////////////////////// End of Close eye Icon //////////////////

  //////////////////////////// Input errors //////////////////

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidPassword(pass) {
    console.log(/[a-zA-Z]/.test(pass));
    return /[a-zA-Z]/.test(pass);
  }

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  // function handleError(event) {
  //   console.log(event);
  //   console.log(event.target);
  //   // const { name, value } = event.target;
  //   // setFormData((prevFormData) => ({
  //   //   ...prevFormData,
  //   //   [name]: value,
  //   // }));
  // }

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
    if (!isValidEmail(formData.email) && !errors.emailError) {
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

    // if (formData.subject.trim().length === 0) {
    //   console.log("وارد کردن رشته الزامی می‌باشد");
    //   return;
    // }
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
        console.log('I was closed by the timer')
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
    // console.log(data);
    Swal.close()
    if ( response.status===201){

    // if ( data.message.includes("created successfully")){
      
      changeInfo("token",data.token)
      // console.log(info.token);
      // console.log(data.token)

      console.log("خوش آمدید");
      // console.log(info.token)
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: ' کد تایید ارسال شد',
        html:'لطفا ایمیلتان را چک کنید',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
      
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
    // console.log(formData);
  }

  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="5" >
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
                              styles={customStyles}
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
                              styles={customStyles}
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
                            ورود به حساب کابری
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
