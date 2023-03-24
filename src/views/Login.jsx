

import React from "react";
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
  Col
} from "reactstrap";

function Login() {
  return (
    <>
      <div className="content" >
        <Row>
          <Col className="text-right" md="8">
            <Card>
              <CardHeader>
                <h5 className="title">ورود به سایت</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="6">
                    {/* <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/Login.jpg")}
                    /> */}
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          ایمیل
                        </label>
                        <Input className="text-left" placeholder="JohnDoe@gmail.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    <Col className="pr-md-1 " md="6">
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
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  ورود
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;


