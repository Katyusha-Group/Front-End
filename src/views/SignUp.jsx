import React from "react";
import { useState } from "react";
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
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [frequency, setFrequency] = useState({ frequency: "xyz" });

  function handleSelect(e) {
    setFrequency((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
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
                              className="text-left"
                              placeholder="JohnDoe@gmail.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>رمز عبور</label>
                            <Input
                              className="text-left"
                              //   defaultValue="Mike"
                              placeholder="Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>تکرار رمز عبور</label>
                            <Input
                              className="text-left"
                              //   defaultValue="Mike"
                              placeholder="Confirm Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>رشته</label>
                            <br />

                            <Input
                              type="select"
                              name="frequency"
                              id="frequency"
                              value={frequency.frequency}
                              onChange={handleSelect}
                            >
                              <option>انتخاب کنید</option>
                              <option>مهندسی کامپیوتر</option>
                              <option>مهندسی برق</option>
                              <option>مهندسی مکانیک</option>
                              <option>مهندسی شیمی</option>
                              <option>مهندسی عمران</option>
                              <option>مهندسی راه آهن</option>
                              <option>مهندسی صنایع</option>
                              <option>مهندسی معماری</option>
                              <option>مهندسی مواد</option>
                              <option>علوم کامپیوتر</option>
                              <option>ریاضی</option>
                              <option>فیزیک</option>
                            </Input>
                            {/* <Input
                              className="text-left"
                              placeholder="Select Options"
                              type="password"
                            /> */}
                            {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                              <DropdownToggle caret> llm</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem>Option 3</DropdownItem>
                              </DropdownMenu>
                            </Dropdown> */}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>جنسیت</label>
                            {/* <Input
                              className="text-left"
                              //   defaultValue="Mike"
                              placeholder="ُSelect Options"
                              type="password"
                            /> */}
                            <br />

                            <Input
                              type="select"
                              name="frequency"
                              id="frequency"
                              value={frequency.frequency}
                              onChange={handleSelect}
                            >
                              <option>زن</option>
                              <option>مرد</option>
                            </Input>
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
