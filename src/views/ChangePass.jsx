import React from "react";
import routes from "../route.jsx";
import { useInfo } from "../contexts/InfoContext.jsx";
import "../assets/css/ChangePass.css";
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
  Col
} from "reactstrap";

function ChangePassword() {
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
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button className="btn-fill" color="primary" type="submit">
                  تغییر رمز عبور
                </Button>
                      </FormGroup>
                      
                    </Col>
                    <Col className="text-right" md="6">
                      <FormGroup>
                        <label>رمز عبور جدید</label>
                        <Input
                          placeholder="رمز عبور جدید را وارد کنید"
                          type="password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>تکرار رمز عبور جدید</label>
                        <Input
                          placeholder="رمز عبور جدید را دوباره وارد کنید"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    
                  </Row>
                  <Row>
                    <Col className="text-right" md="12">
                      
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
    </>
  );
}
export default ChangePassword;


