
import React, { useState, useRef ,useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { forgetPasswordVerificationApi } from "../../components/LessonSidebar/ApiCalls";
import * as style from "./Verification.module.css"
import { useInfo } from "../../contexts/InfoContext";
import { closeLoading, showLoading } from "../../components/LoadingAlert/LoadingAlert";
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

function VerificationForgetPassword() {
const [formData, setFormData] = useState({
    code: ""
  });

const Navigate = useNavigate();
const { info, changeInfo } = useInfo();
  const [errorMessage, setErrorMessage] = useState({
    codeError: ""
  });
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


   const values = formData.code.split("");
const [code, setCode] = useState("");
const [showAlert, setShowAlert] = useState(false);
  const codeInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleCodeChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value !== "") {
      if (index < codeInputRefs.length - 1) {
        document.getElementById(index+1).focus();
      }
    }
    const newCode = [...code];
    newCode[index] = value.charAt(value.length - 1);
    setCode(newCode.join(""));
  };

function isValidCode(code) {
    return /\S+@\S+\.\S+/.test(code);
  }

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  
  
  async function handleSubmit(event) {
    event.preventDefault();
    showLoading();
    closeLoading();
    const errors = [
      {
        codeError: ""
      }
    ];
    if (code.trim().length != 4) {
      errors.codeError = "لطفا کد ۴ رقمی وارد کنید";
    }

    setErrorMessage({
      codeError: errors.codeError
    });
    if (
      errors.codeError
    ) {
      return;
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className={style.signUpContainer}>
          <div className="content contentLogin">
            <Row className="justify-content-center">
              <Col className="text-right" md="4">
                <Card>
                  <CardHeader>
                    <h4 className="title text-center"> تایید ایمیل</h4>
                  </CardHeader>
                  <CardBody style={{ padding: '40px' }}>
                    <Form >
                      {showAlert &&
                    <div class="alert alert-primary alert-dismissible fade show" role="alert" >
                      <strong>.کد با موفقیت ثبت شد</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      </button>
                    </div>}
                      <Row>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label style={{"fontSize":"0.9375rem"}}>لطفا کد ارسال شده به ایمیل تان را وارد کنید:</label>
                          </FormGroup>
                          <Row>
                          <div className={style.verification_code_box}>
                            {codeInputRefs.map((ref, i) => (
                                <Input
                                id={i}
                                className={style.codeSpot}
                                key={i}
                                type="text"
                                maxLength="1"
                                ref={ref}
                                value={code[i] || ""}
                                onChange={(e) => handleCodeChange(e, i)}
                                placeholder={i+1}
                                />
                            ))}
                            </div>
                            {errorMessage.codeError && (
                              <div className="error">
                                {errorMessage.codeError}
                              </div>
                            )}
                          
                          </Row>
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
                      ثبت کد
                    </Button>
                  </CardFooter>
                  <CardBody>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerificationForgetPassword;
