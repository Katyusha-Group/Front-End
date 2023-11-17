import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import { apis } from "../../assets/apis";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import * as style from "../../assets/css/UserPage.module.css";
import * as shopStyle from "../../assets/css/Shopping.module.css";
import { useSendTweets } from "../../hooks/Twitter/sendTweets";
import { useState } from "react";
const CommentModal = ({open,setOpen,data}) => {
    const [comment, setComment] = useState("")
  return (
    <>
      <Modal
        show={open}
        cancel={setOpen}
        onHide={setOpen}
        style={{ background: "rgba(0,0,0,0.2)" }}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
      >
        <div className={shopStyle.loginLmsModal}>
          <Modal.Header className="ModalHeader">
            <button
              type="button"
              class="close close-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="" aria-hidden="true" onClick={setOpen}>
                &times;
              </span>
            </button>
          </Modal.Header>
          <Modal.Body className={shopStyle.loginLmsModalBody}>
            <CardHeader>نظرات</CardHeader>
            <CardBody>
              نظر خود را در این قسمت وارد کنید
              <Input bsSize="lg" type="textarea" name="text" id="exampleText" onChange={(x)=>{setComment(x.target.value)}} />
            </CardBody>
            <CardFooter>
              <Button
                className="btn-fill"
                color="primary"
                type="submit"
                onClick={() => {
                  useSendTweets(comment, (x)=>{} ,data.id)
                }}
              >
                ارسال
              </Button>
            </CardFooter>
          </Modal.Body>
        </div>
      </Modal>

    </>
  );
};

export default CommentModal;
