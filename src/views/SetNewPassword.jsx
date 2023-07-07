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

function SetNewPassword() {
  // const { info, changeInfo } = useInfo();
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });
  

  const [subjectOptions, setSubjectOptions] = useState();
  // const subjects = [];
 

  // this.setState({selectOptions: options})
  // const subs = {};
 
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
  

 
  const [errorMessage, setErrorMessage] = useState({
    
    passError: "",
    passErrorRep: "",
    backError: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();

    const errors = [
      {      
        passError: "",
        passErrorRep: "",
        backError: "",
      },
    ];
    
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

    setErrorMessage({
      emailError: errors.emailError,
      passError: errors.passError,
      passErrorRep: errors.passErrorRep,
      genderError: errors.genderError,
      subjectError: errors.subjectError,
    });
    if (
      errors.passError ||
      errors.passErrorRep 
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
  
    const response = await fetch(`${localStorage.getItem("link")}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        new_password:formData.password ,
        confirm_password: formData.passwordConfirm
        // email: formData.email,
        // password: ,
        // password2: ,
        // department: subject,
        // gender: gender,
      }),
    });
    const data = await response.json();
    console.log(data);
    Swal.close()
    if ( data.detail==="Password successfully changed."){

    // // if ( data.message.includes("created successfully")){
      
    //   changeInfo("token",data.token)
    //   // console.log(info.token);
    //   // console.log(data.token)

    //   console.log("خوش آمدید");
    //   // console.log(info.token)
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'رمز عبور با موفقیت تغیر کرد   ',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
        confirmButtonText:"باشه"
      })
    //   Navigate("/verification");
    // } else {
    //   if (data.email) errors.backError = "!این ایمیل پیش از این ثبت شده است";
    //   if (data.password) errors.backError = "!رمز عبور قابل قبول نیست";
    //   setErrorMessage({
    //     ...errorMessage,
    //     backError: errors.backError,
    //   });
    Navigate("/login")
    }
    else {
        
        errors.backError = "!رمز عبور قابل قبول نیست";
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
                    <h5 className="title text-center"> تغیر رمز عبور</h5>
                  </CardHeader>
                  <CardBody>
                    <Form >
                      <Row>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label>رمز عبور جدید</label>
                            <Input
                              className="text-right"
                              placeholder="رمز عبور جدید را وارد کنید"
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
                              placeholder=" رمز عبور جدید را دوباره وارد کنید"
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

                      
                    </Form>
                    
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      onClick={handleSubmit}
                      className="btn-fill"
                      color="primary"
                      type="submit"
                    >
                      ثبت رمز
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

export default SetNewPassword;
