import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from '../../assets/css/UsersListModal.module.css';
import { showLoading, closeLoading } from '../../components/LoadingAlert/LoadingAlert';
const Notification = ({ showModal, handleClose, notification }) => {
    const [show, setShow] = React.useState(showModal);

    // const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    React.useEffect(() => {
        showLoading();
        setShow(showModal);
        closeLoading();
    }, [showModal]);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };
    console.log(notification)
    // console.log("Username in userlist modal is: " , username);
    return (
        <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
            <div className={styles.ModalContents}>
                <Modal.Header closeButton className={styles.ModalHeader}>
                    <h2 className={styles.ModalTitle}>پیام ها</h2>
                    <button className="close" onClick={handleCloseModal}>
                        <span>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.ModalBody}>
                    <div className={styles.eachcard}>
                        <img className={styles.eachProfile} src={notification.actor.image} alt="" />
                        <p className={styles.eachText}>{notification.message.split(".")[0]}. </p>
                        <span className={styles.eachTime}>
                            {notification.delta_time}
                        </span>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default Notification;
