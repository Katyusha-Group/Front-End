
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
  Col
} from "reactstrap";

function Login() {
  return (
    <>
      <div className="content" >
        <Row className="just-center">
          <Col className="text-right" md="4">
            <Card>
              <CardHeader>
                <h5 className="title text-center">ورود به سایت</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="12">
                    {/* <img
                      alt="..."
                      className=""
                      src={log.default}
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
                    <Col className="pr-md-1 " md="12">
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
              <CardFooter className="text-center">
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
