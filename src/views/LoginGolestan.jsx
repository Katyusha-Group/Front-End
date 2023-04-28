import React from "react";
import routes from "../route.jsx";
import { useInfo } from "../contexts/InfoContext.jsx";
import "../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";
import CloseButton from "react-bootstrap/CloseButton";

const LoginModalGolestan = (props) => {
  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal 
        show={props.show}cancel={props.close}
        // centered
        className="loginLmsModal"
        style={{ background: "#27293d" }}
        >
        <div className="loginLmsModal">
          <Modal.Header className="ModalHeader"> 
            <button type="button" class="close close-btn" data-dismiss="modal" aria-label="Close"><span class="" aria-hidden="true" onClick={props.close}>&times;</span></button>
          </Modal.Header>
          <Modal.Body className="loginLmsModalBody">
                    <CardHeader>
                      <h4 className="title text-right">ورود به سامانه گلستان</h4>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="text-right" md="12">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                نام کاربری (شماره دانشجویی)
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
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LoginModalGolestan;