import React from "react";
import * as style from "../assets/css/SignUp.module.css";
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
} from "reactstrap";
import {
  closeLoading,
  showLoading,
} from "../components/LoadingAlert/LoadingAlert.jsx";
import { useState } from "react";
import Swal from "sweetalert2";
import { apis } from "../assets/apis.js";
import { PasCloseEyeIcon } from "../Functions/PasCloseEyeIcon.jsx";
import { ConfirmPasCloseEyeIcon } from "../Functions/ConfirmPasCloseEyeIcon.jsx";
import { PasswordFormGroup } from "../assets/FormGroups/PasswordFormGroup";
import { ConfirmPasswordFormGroup } from "../assets/FormGroups/ConfirmPasswordFormGroup";
import { OldPasCloseEyeIcon } from "../Functions/OldPasCloseEyeIcon.jsx";
function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
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
      oldPassError: errors.oldPassError,
      passError: errors.passError,
      passErrorRep: errors.passErrorRep,
    });
    if (errors.passError || errors.passErrorRep || errors.oldPassError) {
      return;
    }
    showLoading();
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;

    const response = await fetch(apis["accounts"]["changepassword"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },

      body: JSON.stringify({
        new_password1: formData.passwordConfirm,
        old_password: formData.oldPassword,
        new_password: formData.password,
      }),
    });
    const data = await response.json();
    closeLoading();
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "رمز عبور با موفقیت تغیر کرد   ",
        background: "#3c3e5d",
        color: "#ceccc0",
        width: "25rem",
        confirmButtonText: "باشه",
      });
    } else {
      errors.backError = "!رمز عبور قابل قبول نیست";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
    }
  }
  return (
    <>
      <Card>
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
                    id="old_password_field"
                    onChange={handleChange}
                    value={formData.oldPassword}
                  />
                  <i
                    className={`tim-icons fa fa-eye-slash ${style.viewpass} mr-4 text-muted`}
                    onClick={OldPasCloseEyeIcon}
                    id="oldTogglePassword"
                  ></i>
                  {errorMessage.oldPassError && (
                    <div className="error">{errorMessage.oldPassError}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Button
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    تغییر رمز عبور
                  </Button>
                </FormGroup>
              </Col>
              <Col className="text-right" md="6">
                <PasswordFormGroup
                  value={formData.password}
                  onChange={handleChange}
                  error={errorMessage.passError}
                  onClick={PasCloseEyeIcon}>
                </PasswordFormGroup>

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
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
export default ChangePassword;
