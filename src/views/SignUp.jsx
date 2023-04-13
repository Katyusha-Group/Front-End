import React from "react";
import { useState } from "react";
import Select from "react-select";
import "../assets/css/SignUp.css";
import axios from "axios";
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

// const costomA = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   timeout: 15000,
// });

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    subject: "",
    gender: "",
  });
  // const loginUser = async (e) => {
  //   e.preventDefault();

  //   costomA.post("account/signup", {
  //     username: "Erfan",
  //     email: formData.email,
  //     password1: formData.password1,
  //     password2: formData.password2,
  //     gender: "M",
  //   });

  //console.log("form submitted")
  // await axios.post(
  //   session_url,
  //   {},
  //   {
  //     auth: {
  //       username: "Erfan",
  //       email: formData.email,
  //       password1: formData.password1,
  //       password2: formData.password2,
  //       //Subject: formData.subject,
  //       gender: "M",
  //       //subject: formData.subject,
  //     },
  //   }
  // );
  // const response = await axios.post(
  //   REGISTER_URL,
  //   JSON.stringify({
  //     username: "Erfan",
  //     email: formData.email,
  //     password1: formData.password1,
  //     password2: formData.password2,
  //     //Subject: formData.subject,
  //     gender: "M",
  //   }),
  //   {
  //     headers: { "Content-Type": "application/json" },
  //     withCredentials: true,
  //   }
  // );
  // const response = await fetch("/accounts/signup/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     Email: e.target.formData.email,
  //     Password1: e.target.formData.password1,
  //     Password2: e.target.formData.password2,
  //     Subject: e.target.formData.subject,
  //     Gender: e.target.formData.gender,
  //   }),
  // });
  // const data = await response.json();
  // console.log(data);
  // if (response.status === 200) {
  //   setAuthTokens(data);
  //   setUser(jwt_decode(data.access));
  //   localStorage.setItem("authTokens", JSON.stringify(data));
  //   Navigate("/");
  // } else {
  //   console.log(data.error);
  //   if (data.error === "Invalid credentials") {
  //     //show pop up
  //     swal("Error!", "Invalid credentials!", "error");
  //   }
  //   if (data.error === "email is not verified") {
  //     swal("Error!", "check your mailbox for verification", "error");
  //     //show pop up with  check your mailbox for verification
  //   }
  // }
  // };
  ////////////////////////////// Select ///////////////////
  const genderOptions = [
    { value: "F", label: "زن" },
    { value: "M", label: "مرد" },
  ];
  const subjectOptions = [
    { value: "Computer Engineering", label: "مهندسی کامپیوتر" },
    { value: "Electrical Engineering", label: "مهندسی برق" },
    { value: "Mechanical Engineering", label: "مهندسی مکانیک" },
    { value: "Chemical Engineering", label: "مهندسی شیمی" },
    { value: "Industrial Engineering", label: "مهندسی صنایع" },
    { value: "Railway Engineering", label: "مهندسی راه‌آهن" },
    //{ value: "7", label: "مهندسی معماری" },
    //{ value: "7", label: "طراحی صنعتی" },
    { value: "Material Engineering", label: "مهندسی مواد" },
    { value: "Civil Engineering", label: "مهندسی عمران" },
    { value: "Computer Science", label: "علوم کامپیوتر" },
    { value: "Mathematics", label: "ریاضی" },
    { value: "Physics", label: "فیزیک" },
  ];
  // const [handleChange1] = useState(() => {
  //   console.log(selectedOption);
  //   return () => {
  //     setSelectedOption(selectedOption);
  //   };
  // });
  // const [selectHandleChange] = useState(() => {
  //   console.log(formData)
  //   return () => {
  //     setFormData(formData);
  //   };
  // });
  // selectHandleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //     console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };
  // const selectHandleChange = (event) => {
  //   setFormData(event.value);
  //   console.log(formData);
  // };
  const customStyles = {
    input: (defaultStyles) => ({
      ...defaultStyles,
      color: "transparent",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#9A9A9A",
      backgroundColor: state.isSelected ? "#ffffff" : "#ffffff",
      "&:hover": {
        backgroundColor: "rgba(222, 222, 222, 0.3)",
      },
      transition: "all 150ms linear",
      marginTop: "5px",
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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const [subject, setSubject] = useState();
  const [gender, setGender] = useState();

  function handleSubject(selectedOption) {
    setSubject(selectedOption.value);
  }
  function handleGender(selectedOption) {
    setGender(selectedOption.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://katyushaiust.ir/accounts/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: formData.email,
        password1: formData.password,
        password2: formData.passwordConfirm,
        department: "Mathematics",
        gender: "M",
      }),
    });
    const data = await response.json();
    console.log(data);
    // console.log(formData);
    if (formData.email.trim().length === 0) {
      console.log("وارد کردن ایمیل الزامی می‌باشد");
      return;
    }

    if (!isValidEmail(formData.email)) {
      console.log("قالب ایمیل قابل قبول نیست");
      return;
    }
    if (formData.password.trim().length === 0) {
      console.log("وارد کردن رمز عبور الزامی می‌باشد");
      return;
    }
    if (formData.passwordConfirm.trim().length === 0) {
      console.log("وارد کردن تکرار رمز عبور الزامی می‌باشد");
      return;
    }
    if (formData.password.trim().length === 0) {
      console.log("وارد کردن رمز عبور الزامی می‌باشد");
      return;
    }
    // if (formData.subject.trim().length === 0) {
    //   console.log("وارد کردن رشته الزامی می‌باشد");
    //   return;
    // }

    // if (formData.gender === "") {
    //   console.log("وارد کردن جنسیت الزامی می‌باشد");
    //   return;
    // }

    console.log("خوش آمدید");
  }
  //////////////////////////// End of input errors //////////////////

  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="4">
                <Card>
                  <CardHeader>
                    <h5 className="title text-center">ثبت نام</h5>
                  </CardHeader>
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
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
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
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label>رشته</label>
                            <br />

                            <Select
                              options={subjectOptions}
                              styles={customStyles}
                              isRtl
                              placeholder="انتخاب کنید "
                              name="subject"
                              onChange={handleGender}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="5" className="offset-lg-1">
                          <FormGroup>
                            <label>جنسیت</label>
                            <br />

                            <Select
                              options={genderOptions}
                              styles={customStyles}
                              isRtl
                              placeholder="انتخاب کنید "
                              name="gender"
                              onChange={handleSubject}
                            />
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
