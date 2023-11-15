import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Instructorall from "./Instructorall";
import * as styles from '../../assets/css/UsersListModal.module.css'
const UsersListModal = ({ showModal, handleClose, ModalTitle }) => {
    const [show, setShow] = React.useState(showModal);
    
    React.useEffect(() => {
        setShow(showModal);
      }, [showModal]);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };

    return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton className={styles.ModalHeader}>
        <h2 className={styles.ModalTitle}>دنبال کننده</h2>
      </Modal.Header>
      <Modal.Body className={styles.ModalBody}>
        <Instructorall/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UsersListModal;
