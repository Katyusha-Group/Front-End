import React from "react";
import { useState } from "react";
import Select from "react-Select";
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
  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  // const [error, setError] = useState({
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  ////////////////////////////// Select ///////////////////
  const genderOptions = [
    { value: "زن", label: "زن" },
    { value: "مرد", label: "مرد" },
  ];
  const subjectOptions = [
    { value: "1", label: "مهندسی کامپیوتر" },
    { value: "2", label: "مهندسی برق" },
    { value: "3", label: "مهندسی مکانیک" },
    { value: "4", label: "مهندسی شیمی" },
    { value: "5", label: "مهندسی صنایع" },
    { value: "6", label: "مهندسی راه‌آهن" },
    { value: "7", label: "مهندسی معماری" },
    { value: "8", label: "مهندسی مواد" },
    { value: "9", label: "مهندسی عمران" },
    { value: "10", label: "علوم کامپیوتر" },
    { value: "11", label: "ریاضی" },
    { value: "12", label: "فیزیک" },
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
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

  const [frequency, setFrequency] = useState({ frequency: "xyz" });
  function handleSelect(e) {
    setFrequency((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  /////////////////////////////// End of Select //////////////////////
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
                              // onChange={onInputChange}
                              // value={formData.email}
                              // onBlur={validateInput}
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
                              // onChange={onInputChange}
                              // value={formData.password}
                              // onBlur={validateInput}
                            />
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
                              // onChange={onInputChange}
                              // value={formData.passwordConfirm}
                              // onBlur={validateInput}
                            />
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <Container>
                      <Row>
                        <Col className="text-center pt-md-2" md="12">
                          <Link href="#" color="primary">
                            ورود به حساب کابری
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-fill" color="primary" type="submit">
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
