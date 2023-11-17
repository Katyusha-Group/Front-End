import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Instructorall from "./Instructorall";
import * as styles from '../../assets/css/UsersListModal.module.css';
import { GETUsername } from '../../hooks/GETUsername';
const UsersListModal = ({ showModal, handleClose, IsFollowing }) => {
    const [show, setShow] = React.useState(showModal);
    const {username, setUsername} = GETUsername();
    React.useEffect(() => {
        setShow(showModal);
      }, [showModal]);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };
    const Title = IsFollowing ? "دنبال میشود"  : "دنبال کننده";
    return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton className={styles.ModalHeader}>
        <h2 className={styles.ModalTitle}>{Title}</h2>
      </Modal.Header>
      <Modal.Body className={styles.ModalBody}>
        <Instructorall username={username} IsFollowing={IsFollowing} IsModal={true}/>
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
