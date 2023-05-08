import React from "react";
import "../../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// reactstrap components
import {Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";

const ModalLessons = (props) => {

  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal
        show={props.show.flag}
        cancel={props.close}
        // centered
      >
        <div className="loginLmsModal">
          <Modal.Header className="ModalHeader">
            <button
              type="button"
              class="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="" aria-hidden="true" onClick={props.close}>
                &times;
              </span>
            </button>
          </Modal.Header>
          <Modal.Body className="loginLmsModalBody">
            <CardHeader>
              {props.show.data.name}
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="text-right" md="12">
                    ظرفیت: {props.show.data.capacity}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right" md="12">
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit">
                تایید
              </Button>
            </CardFooter>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ModalLessons;

