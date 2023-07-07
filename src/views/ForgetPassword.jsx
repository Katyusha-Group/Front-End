import React from "react";
//import "../assets/css/Login.css";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { closeLoading, showLoading } from "../components/LoadingAlert/LoadingAlert";
import Swal from "sweetalert2";
import ContextInfo, { useInfo } from "../contexts/InfoContext";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
// import { conforms } from "lodash";

function ForgetPassword() {
  const { info, changeInfo } = useInfo();
  ////////////////////////////// Input errors ///////////////////////
  const [formData, setFormData] = useState({
    email: ""
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    setErrorMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  
 
  const Navigate = useNavigate();
  // localStorage.clear();
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
    if (!isValidEmail(formData.email) && !errors.emailError) {
      errors.emailError = "!قالب ایمیل قابل قبول نیست";
    }
    
    setErrorMessage({
      emailError: errors.emailError,
      
    });
    if (errors.emailError || errors.passError) {
      return;
    }
    
    showLoading();
    const response = await fetch("https://katyushaiust.ir/accounts/reset-password/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
    });
    const data = await response.json();
    console.log("response",response);
    closeLoading();
    if (response.status === 200) {
      // console.log("خوش آمدید");
      // console.log(info.link);
      localStorage.setItem('link', data.link);
      // ContextInfo.changeInfo("link",data.link)
      // setInfo((info) => ({ ...info, [link]: data.link }))
  
      console.log(info.link);
      console.log(data.link);
      Swal.fire({
        icon: 'success',
        title: 'کد تایید ارسال شد.',
        html:'لطفا ایمیلتان را چک کنید',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
        confirmButtonText:"باشه"
      }).then((result) => {
        console.log(result);
        if(result) {
          window.location="/verificationForgetPassword";
          // ok click
        } else {
          // not clicked
        }
      });
    //   setAuthTokens(data.token);
    //   console.log(authTokens);
    //   setShop_caller(true);
    //   console.log("shop_caller: ", shop_caller)
    //   localStorage.setItem("authTokens", JSON.stringify(data));
    //   // localStorage.getItem("authTokens");
    //   const tokenClass = JSON.parse(JSON.stringify(data));
    //   const token = tokenClass.token.access;
    //   const shopId = await fetch("https://katyushaiust.ir/carts/", {
    //     method: "POST",
    //     headers: { 
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //      },
    //   })
    //   // console.log("shopId", shopId.json())
    //   idShop = await shopId.json();
    //   console.log("shopId_data",idShop);
    //   if (shopId.status == 201 || shopId.status == 200) {
    //     console.log("shopId.json()",idShop)
    //     localStorage.setItem("shopId", JSON.stringify(idShop))
    //     console.log("shopId localstorage ",localStorage.getItem("shopId"))
    //     let test = localStorage.getItem("shopId")
    //     console.log("test", JSON.parse(test)[0])
    Navigate("/verificationForgetPassword")
      }
     else{
    //     console.error("shopId error", shopId.status)
    //   }
    //   console.log("shopId: ",shopId)
    //   Navigate("/admin/page");
    // } else {
    //   console.log(data.error);
    if (response.status === 429){
      errors.backError = ". حداکثر تعداد درخواست فراموشی رمز عبور ۵ بار است . شما بیش از ۵ بار درخواست ایمیل کرده اید ";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
    }else{
      errors.backError = "!ایمیل وارد شده اشتباه است و یا حساب کاربری ندارید";
      setErrorMessage({
        ...errorMessage,
        backError: errors.backError,
      });
    }
      
    //   // if (data.error === "Invalid credentials") {
    //   //   //show pop up
    //   //   swal("Error!", "Invalid credentials!", "error");
    //   // }
    //   // if (data.error === "email is not verified") {
    //   //   swal("Error!", "check your mailbox for verification", "error");
    //   //   //show pop up with  check your mailbox for verification
    //   // }
    }
    
  }
  //////////////////////////// End of input errors //////////////////
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content contentLogin">
            <Row className="just-center">
              <Col className="text-right" md="5">
                {errorMessage.backError && (
                  <div className="back-error" style={{direction: 'ltr'}}>{errorMessage.backError}</div>
                )}
                <Card>
                  <CardHeader>
                    <h5 className="title text-center"> فراموشی رمز عبور </h5>
                    
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Form>                   
                      <Row style={{justifyContent: 'center'}}>
                        <Col md="12">
                          <FormGroup className="text-right">
                            <label htmlFor="exampleInputEmail1">ایمیل</label>
                            <Input
                              className="text-right"
                              placeholder="ایمیل خود را وارد کنید"
                              type="email"
                              name="email"
                              // autoComplete="off"
                              onChange={handleChange}
                              value={formData.email}
                            />
                            {errorMessage.emailError && (
                              <div className="error" style={{direction: 'ltr'}}>
                                {errorMessage.emailError}
                              </div>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <br></br>
                    <Container>
                      <Row style={{justifyContent: 'center'}}>
                      <Col className="text-center pt-md-2" md="10">
                          بازگشت به صفحه ی  
                          <Link to="../login" color="primary">
                            &nbsp;ورود به حساب کاربری&nbsp;
                          </Link>
                          
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <Row style={{justifyContent: 'center'}}>
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
                      color="info"
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
