import React, { useEffect } from "react";
import { useState } from "react";
import * as style from "../assets/css/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { PasCloseEyeIcon } from "../Functions/PasCloseEyeIcon";
import { ConfirmPasCloseEyeIcon } from "../Functions/ConfirmPasCloseEyeIcon";
import { PasswordFormGroup } from "../assets/FormGroups/PasswordFormGroup";
import { ConfirmPasswordFormGroup } from "../assets/FormGroups/ConfirmPasswordFormGroup";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Row,
  Col,
} from "reactstrap";

function SetNewPassword() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

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
      color: '#ceccc0',
      width: '25rem',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })

    const response = await fetch(`${localStorage.getItem("link")}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        new_password: formData.password,
        confirm_password: formData.passwordConfirm
      }),
    });
    const data = await response.json();
    Swal.close()
    if (data.detail === "Password successfully changed.") {
      Swal.fire({
        icon: 'success',
        title: 'رمز عبور با موفقیت تغیر کرد   ',
        background: '#3c3e5d',
        color: '#ceccc0',
        width: '25rem',
        confirmButtonText: "باشه"
      })
      Navigate("/login")
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
      <div className="wrapper">
        <div className={style.signUpContainer}>
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="4" >
                {errorMessage.backError && (
                  <div className={style.backError}>{errorMessage.backError}</div>
                )}
                <Card className="cardStyle">
                  <CardHeader>
                    <h5 className="title text-center"> تغیر رمز عبور</h5>
                  </CardHeader>
                  <CardBody>
                    <Form >
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
