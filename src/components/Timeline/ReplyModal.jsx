import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CardHeader, CardBody, CardFooter, Input } from "reactstrap";
import * as shopStyle from "../../assets/css/Shopping.module.css";
import { useSendTweets } from "../../hooks/Twitter/sendTweets";
import style from "../../assets/css/Timeline/ReplyModal.module.css";
import { useState } from "react";
import Tweet from "../../views/TimeLine/Tweet";
import { getReplies } from "../../Functions/Timeline/getReplies";
import { useGetReplies } from "../../hooks/Twitter/useGetReplies";
import Spinner from "react-bootstrap/Spinner";
const Replies = ({ open, setOpen, link }) => {
  const { data, setData, loading } = useGetReplies(open, link);
  return (
    <>
      <Modal
        show={open}
        cancel={setOpen}
        onHide={setOpen}
        style={{ background: "rgba(0,0,0,0.2)", margin: "-5rem auto" }}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
        size="lg"
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
            <CardHeader>پاسخ ها</CardHeader>
            <CardBody className={style.replyBody}>
              {loading ? (
                <div style={{display:'flex', justifyContent:"center", alignItems:"center", height:"100%"}}>
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                data.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                    setTweets={setData}
                  />
                ))
              )}
            </CardBody>
            <CardFooter></CardFooter>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default Replies;
