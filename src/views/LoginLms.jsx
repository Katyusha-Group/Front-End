import React from "react";
import routes from "../route.jsx";
import { useInfo } from "../contexts/InfoContext.jsx";
import "../assets/css/LoginLms.css";

// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";

function LoginLms() {
  return (
    <>
      
        <Row className="loginLmsRow">
          <Col>
            <Card className="loginLmsCard">
              <CardHeader>
                <h4 className="title text-right">lms ورود به سامانه </h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="text-right" md="12">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          نام کاربری
                        </label>
                        <Input placeholder="username" type="username" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    <Col className="text-right" md="12">
                      <FormGroup>
                        <label>گذرواژه</label>
                        <Input
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
      
    </>
  );
}

export default LoginLms;
