import React, { useEffect } from "react";
import { useState } from "react";
import * as style from "../assets/css/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { apis } from "../assets/apis";
import { TextFormGroup } from "../assets/FormGroups/TextFormGroup";
import { EmailFormGroup } from "../assets/FormGroups/EmailFormGroup";
import { PasswordFormGroup } from "../assets/FormGroups/PasswordFormGroup";
import { ConfirmPasswordFormGroup } from "../assets/FormGroups/ConfirmPasswordFormGroup";
import { SelectBoxFormGroup } from "../assets/FormGroups/SelectBoxFormGroup";
import { IsValidEmail } from "../Functions/IsValidEmail"
import { PasCloseEyeIcon } from "../Functions/PasCloseEyeIcon"
import { ConfirmPasCloseEyeIcon } from "../Functions/ConfirmPasCloseEyeIcon"
import { postSignUp } from "../Functions/postData/postSignUp";
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

function SignUp() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    profileName: "",
    username: "",
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
    profileNameError: "",
    usernameError: "",
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
        profileNameError: "",
        usernameError: "",
        emailError: "",
        passError: "",
        passErrorRep: "",
        genderError: "",
        subjectError: "",
        backError: "",
      },
    ];

    if (formData.profileName.trim().length === 0) {
      errors.profileNameError = "!وارد کردن نام پروفایل الزامی است";
    }
    if (formData.username.trim().length === 0) {
      errors.usernameError = "!وارد کردن نام کاربری الزامی است";
    }
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
      profileNameError: errors.profileNameError,
      usernameError: errors.usernameError,
      emailError: errors.emailError,
      passError: errors.passError,
      passErrorRep: errors.passErrorRep,
      genderError: errors.genderError,
      subjectError: errors.subjectError,
    });
    if (
      errors.profileName ||
      errors.usernameError ||
      errors.emailError ||
      errors.passError ||
      errors.passErrorRep ||
      errors.genderError ||
      errors.subjectError
    ) {
      return;
    }

    postSignUp(formData, subject, gender);
  }
  return (
    <>
      <div className="wrapper">
        <div className={style.signUpContainer}>
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="4" >
                {errorMessage.backError && (
                  <div className={style.backError}>{errorMessage.backError}</div>
                )}
                <Card className={style.cardStyle}>
                  <CardHeader>
                    <h5 className="title text-center">ثبت نام</h5>
                  </CardHeader>
                  <CardBody>
                    <Form >
                      <Row>
                        <Col md="12">
                          <TextFormGroup
                            label={"نام پروفایل"}
                            placeHolder={"نام پروفایل خود را وارد کنید"}
                            value={formData.profileName}
                            name={"profileName"}
                            onChange={handleChange}
                            error={errorMessage.profileNameError}>
                          </TextFormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <TextFormGroup
                            label={"نام کاربری"}
                            placeHolder={"نام کاربری خود را وارد کنید"}
                            value={formData.username}
                            name={"username"}
                            onChange={handleChange}
                            error={errorMessage.usernameError}>
                          </TextFormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <EmailFormGroup
                            placeHolder={"ایمیل خود را وارد کنید"}
                            value={formData.email}
                            onChange={handleChange}
                            error={errorMessage.emailError}>
                          </EmailFormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <PasswordFormGroup
                            value={formData.password}
                            onChange={handleChange}
                            error={errorMessage.passError}
                            onClick={PasCloseEyeIcon}>
                          </PasswordFormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <ConfirmPasswordFormGroup
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                            error={errorMessage.passErrorRep}
                            onClick={ConfirmPasCloseEyeIcon}>
                          </ConfirmPasswordFormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <SelectBoxFormGroup
                            label={"رشته"}
                            options={subjectOptions}
                            name={subject}
                            onChange={handleSubject}
                            error={errorMessage.subjectError}
                          >
                          </SelectBoxFormGroup>
                        </Col>
                        <Col lg="5" className="offset-lg-1">
                          <SelectBoxFormGroup
                            label={"جنسیت"}
                            options={genderOptions}
                            name={gender}
                            onChange={handleGender}
                            error={errorMessage.genderError}
                          >
                          </SelectBoxFormGroup>
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
      </div >
    </>
  );
}

export default SignUp;
