import React from "react";
import * as log from "../assets/img/Login.jpg";
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

function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content contentLogin">
            <Row className="just-center">
              <Col className="text-right" md="4">
                <Card>
                  <CardHeader>
                    <h5 className="title text-center">ورود به سایت</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="12">
                          {/* <img
                      alt="..."
                      className=""
                      src={log.default}
                    /> */}
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
                    </Form>
                    <Container>
                      <Row>
                        <Col className="text-center" md="12">
                          <Link href="#" color="primary">
                            فراموشی رمز عبور
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <Row>
                        <Col className="text-center pt-md-2" md="12">
                          در صورت نداشتن حساب کاربری
                          <Link href="#" color="primary">
                            &nbsp;ثبت‌نام&nbsp;
                          </Link>
                          کنید
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-fill" color="primary" type="submit">
                      ورود
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

export default Login;
