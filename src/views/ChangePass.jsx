import React from "react";
import routes from "../route.jsx";
import { useInfo } from "../contexts/InfoContext.jsx";
import "../assets/css/SignUp.css"
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
  Col
} from "reactstrap";
import { closeLoading, showLoading } from "../components/LoadingAlert/LoadingAlert.jsx";
import { useState } from "react";
import Swal from "sweetalert2"; 

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

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
  function newPasCloseEyeIcon() {
    // toggle the type attribute
    const togglePassword = document.querySelector("#newtogglePassword");
    const passwordV = document.querySelector("#newpassword_field");
    const type =
      passwordV.getAttribute("type") === "password" ? "text" : "password";

    togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("newtogglePassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("newtogglePassword").className =
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
  
  function isValidPassword(pass) {
    // console.log(/[a-zA-Z]/.test(pass));
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
  const [errorMessage, setErrorMessage] = useState({
    
    oldPassError: "",
    passError: "",
    passErrorRep: "",
    backError: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = [
      {      
        oldPassError: "",
        passError: "",
        passErrorRep: "",
        backError: "",
      },
    ];
    
    if (formData.oldPassword.trim().length === 0) {
      errors.oldPassError = "!وارد کردن رمز عبور الزامی است";
    }
    if (formData.newPassword.length < 8 && formData.newPassword) {
      errors.passError = "!رمز عبور باید حداقل شامل هشت کاراکتر باشد";
    }
    if (formData.newPasswordConfirm.trim().length === 0) {
      errors.passErrorRep = "!وارد کردن تکرار رمز عبور الزامی است";
    }
    if (
      formData.newPassword !== formData.newPasswordConfirm &&
      !errors.passError &&
      !errors.passErrorRep
    ) {
      errors.passErrorRep = "!تکرار رمز عبور و رمز عبور یکسان نیست";
    }

    setErrorMessage({
      oldPassError: errors.oldPassError,
      passError: errors.passError,
      passErrorRep: errors.passErrorRep,
      
    });
    if (
      errors.passError ||
      errors.passErrorRep ||
      errors.oldPassError
    ) {
      return;
    }
    showLoading();
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
  
    const response = await fetch(`https://www.katyushaiust.ir/accounts/changepassword/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Accept: "application/json",
        "Content-Type": "application/json",
        "accept": "application/json"
      },

      body: JSON.stringify({
        new_password1: formData.newPasswordConfirm,
        old_password:formData.oldPassword ,
        new_password: formData.newPassword,
        
      }),
    });
    const data = await response.json();
    // console.log(data);
    closeLoading();
    if ( response.status===200){

      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'رمز عبور با موفقیت تغیر کرد   ',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
        confirmButtonText:"باشه"
      })
    }
    else {
        
        errors.backError = "!رمز عبور قابل قبول نیست";
        setErrorMessage({
          ...errorMessage,
          backError: errors.backError,
        });
        }   
  }
  return (
    <>
            <Card >
              <CardHeader>
                <h5 className="title">تغییر رمز عبور</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="text-right" md="6">
                      <FormGroup>
                        <label>رمز عبور فعلی</label>
                        <Input
                          placeholder="رمز عبور فعلی را وارد کنید"
                          type="password"
                          name="oldPassword"
                          id="password_field"
                          onChange={handleChange}
                          value={formData.oldPassword}
                        />
                        <i
                              className="tim-icons fa fa-eye-slash viewpass mr-4 text-muted"
                              onClick={PasCloseEyeIcon}
                              id="togglePassword"
                            ></i>
                            {errorMessage.oldPassError && (
                              <div className="error" >
                                {errorMessage.oldPassError}
                              </div>
                            )}
                      </FormGroup>
                      <FormGroup>
                        <Button className="btn-fill" color="primary" type="submit"
                        onClick={handleSubmit}
                        >
                  تغییر رمز عبور
                </Button>
                      </FormGroup>
                      
                    </Col>
                    <Col className="text-right" md="6">
                      <FormGroup>
                        <label>رمز عبور جدید</label>
                        <Input
                          placeholder="رمز عبور جدید را وارد کنید"
                          type="password"
                          name="newPassword"
                              id="newpassword_field"
                              onChange={handleChange}
                              value={formData.newPassword}
                        />
                        <i
                              className="tim-icons fa fa-eye-slash viewpass mr-4 text-muted"
                              onClick={newPasCloseEyeIcon}
                              id="newtogglePassword"
                            ></i>
                            {errorMessage.passError && (
                              <div className="error">
                                {errorMessage.passError}
                              </div>
                            )}
                      </FormGroup>
                      <FormGroup>
                        <label>تکرار رمز عبور جدید</label>
                        <Input
                          placeholder="رمز عبور جدید را دوباره وارد کنید"
                          type="password"
                          name="newPasswordConfirm"
                              id="confirm_password_field"
                              onChange={handleChange}
                              value={formData.newPasswordConfirm}
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
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
    </>
  );
}
export default ChangePassword;


