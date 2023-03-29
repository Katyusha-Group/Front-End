import React from "react";
import routes from "../route.jsx";
import { useInfo } from "../contexts/InfoContext.jsx";
import "../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";
import CloseButton from "react-bootstrap/CloseButton";
// function LoginLms() {
//   return (
//     <>
      
        // <Row className="loginLmsRow">
        //   <Col>
        //     <Card className="loginLmsCard">
        //       <CardHeader>
        //         <h4 className="title text-right">lms ورود به سامانه </h4>
        //       </CardHeader>
        //       <CardBody>
        //         <Form>
        //           <Row>
        //             <Col className="text-right" md="12">
        //               <FormGroup>
        //                 <label htmlFor="exampleInputEmail1">
        //                   نام کاربری
        //                 </label>
        //                 <Input placeholder="username" type="username" />
        //               </FormGroup>
        //             </Col>
        //           </Row>
        //           <Row >
        //             <Col className="text-right" md="12">
        //               <FormGroup>
        //                 <label>گذرواژه</label>
        //                 <Input
        //                   placeholder="Password"
        //                   type="password"
        //                 />
        //               </FormGroup>
        //             </Col>
        //           </Row>
        //         </Form>
        //       </CardBody>
        //       <CardFooter>
        //         <Button className="btn-fill" color="primary" type="submit">
        //           ورود
        //         </Button>
        //       </CardFooter>
        //     </Card>
        //   </Col>
        // </Row>
      
//     </>
//   );
// }

// export default LoginLms;

const LoginModal = (props) => {
  // const [loginModalShow, setLoginModalShow] = useState(props.showModal);

  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal
        className="Modal"
        show={props.show}
        cancel={props.close}
        //size="lg"
        //aria-labelledby="contained-modal-title-vcenter"
        //centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-left">Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to Logout?</h4>
        </Modal.Body> */}
        
        <div className="Modaldiv">
          <Modal.Header className="ModalHeader"> 
            <CloseButton onClick={props.close}> </CloseButton>
          </Modal.Header>
          <Modal.Body className="ModalBody">
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
          </Modal.Body>
          <Modal.Footer className="ModalFooter">
            <Button onClick={props.close}>Cancel</Button>
          </Modal.Footer>
        </div>
        
        {/* <Row className="loginLmsRow">
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
        </Row> */}
      </Modal>
    </>
  );
};

export default LoginModal;
