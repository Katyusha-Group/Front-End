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
        <Row className="ChangePassRow">
          <Col>
            <Card>
              <CardHeader>
                <h5 className="title text-right">تغییر گذرواژه</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="text-right" md="12">
                      <FormGroup>
                        <label>گذرواژه فعلی</label>
                        <Input
                          placeholder="Old Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    <Col className="text-right" md="12">
                      <FormGroup>
                        <label>گذرواژه جدید</label>
                        <Input
                          placeholder="New Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-right" md="12">
                      <FormGroup>
                        <label>تکرار گذرواژه جدید</label>
                        <Input
                          placeholder="Confirm new Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  تغییر گذرواژه
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
    </>
  );
}
export default ChangePassword;


