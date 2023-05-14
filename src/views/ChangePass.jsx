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
        <div className="ChangePassRow">
            <Card className="ChangePassCard">
              <CardHeader>
                <h5 className="title text-right">تغییر گذرواژه</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="text-right" md="12">
                      <FormGroup className="text-right">
                        <label>گذرواژه فعلی</label>
                        <Input
                        className="text-right"
                        placeholder="گذرواژه خود را وارد کنید"
                          // placeholder="Old Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    <Col className="text-right" md="12">
                      <FormGroup className="text-right">
                        <label>گذرواژه جدید</label>
                        <Input
                          placeholder="گذرواژه جدید را وارد کنید"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-right" md="12">
                      <FormGroup className="text-right">
                        <label>تکرار گذرواژه جدید</label>
                        <Input
                          placeholder="گذرواژه جدید را دوباره وارد کنید"
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
          
        </div>
    </>
  );
}
export default ChangePassword;


