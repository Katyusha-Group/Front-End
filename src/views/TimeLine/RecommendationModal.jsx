import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import * as styles from '../../assets/css/UsersListModal.module.css';

const RecommendationModal = ({ showModal, handleClose, TweetID}) => {
  const [show, setShow] = React.useState(showModal);

  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  React.useEffect(() => {
    setShow(showModal);
    // showLoading();
  }, [showModal]);

  const handleCloseModal = () => {
    setShow(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
      <div className={styles.ModalContents}>
        <Modal.Header closeButton className={styles.ModalHeader}>
          <button className="close" onClick={handleCloseModal}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <div className={styles.bodyContent}>
            Tweet ID is: {TweetID}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} >
            بستن
          </Button>
        </Modal.Footer> */}
      </div>
    </Modal>
  );
};

export default RecommendationModal;
