import React from "react";
import "../../assets/css/LoginLms.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
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
  Label
} from "reactstrap";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const ModalShopping = (props) => {
  const { info, changeInfo } = useInfo();
  const [email, setEmail] = React.useState(true);
  const [telegram, setTelegram] = React.useState(true);
  const [sms, setSms] = React.useState(true);
  function addItemShop(num) {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(`https://katyushaiust.ir/carts/${shopId[0].id}/items/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete_course_number: num,
        contain_telegram: telegram,
        contain_sms: email,
        contain_email: sms,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`shop add ${num}`, data);
      })
      .catch((error) => {
        console.error(error);
        console.log("failed course complete", num);
      });
  }
  return (
    <>
      <Modal
        show={props.show.flag}
        cancel={props.close}
        // centered
      >
        <div className="loginLmsModal">
          <Modal.Header className="ModalHeader"
        >
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
            <CardHeader>{props.show.data.name}</CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="text-right" md="12">
                    گزینه های مورد نظر را انتخاب کنید
                  </Col>
                </Row>
                <Col className="m-auto text-center category">
                  <Form>
                    <FormGroup className="shopping_form_userpage" check>
                      <Label check className="shoping_label">
                        <Input
                          onChange={() => {
                            setEmail(!email);
                          }}
                          checked={email}
                          // checked={s}
                          type="checkbox"
                        />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                        ایمیل
                      </Label>
                      <Label check className="shoping_label">
                        <Input
                          checked={sms}
                          type="checkbox"
                          onChange={() => {
                            setSms(!sms);
                          }}
                        />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                        sms
                      </Label>
                      <Label check className="shoping_label">
                        <Input
                          checked={telegram}
                          type="checkbox"
                          onChange={() => {
                            setTelegram(!telegram);
                          }}
                        />
                        <span className="form-check-sign">
                          <span className="check" />
                        </span>
                        تلگرام
                      </Label>
                    </FormGroup>
                  </Form>
                </Col>
                <Col>
                </Col>
               
              </Form>
            </CardBody>
                  <Link to="/shopping">رفتن به سبد خرید</Link>
            <CardFooter>
                            
              <Button className="btn-fill" color="primary" type="submit" 
              onClick={()=>{
                addItemShop(props.show.data.complete_course_number);
                props.close();
                }}>
                تایید
              </Button>
            </CardFooter>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ModalShopping;
