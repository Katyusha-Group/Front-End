import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";

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
      <Modal.Header closeButton>
        <Modal.Title>Hello</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal content goes here...</p>
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
