import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import * as styles from '../../assets/css/UsersListModal.module.css';
import { useGetNotification } from "../../hooks/useGetNotification";
import { apis } from "../../assets/apis";

import {
    showLoading,
    closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

const Notification = ({ showModal, handleClose }) => {
    const [show, setShow] = React.useState(showModal);
    // const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

    React.useEffect(() => {
        showLoading();
        setShow(showModal);
        closeLoading();
    }, [showModal]);

    const { notificationData, setNotificationData } = useGetNotification(showModal);
    const [loading, setLoading] = useState(null);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };

    // console.log("Username in userlist modal is: " , username);
    return (
        <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
            <div className={styles.ModalContents}>
                <Modal.Header className={styles.ModalHeader}>
                    <h2 className={styles.ModalTitle}>پیام ها</h2>
                    <button className="close" onClick={handleCloseModal}>
                        <span>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.ModalBody}>
                    <div className={styles.bodyContent}>
                        {notificationData && notificationData.length > 0 ?
                            notificationData.map((notification, index) => (
                                <div key={index} className={styles.eachnotif}>
                                    <img className={styles.eachProfile} src={notification.actor.image} alt="" />
                                    < p className={styles.eachText} >
                                        {!notification.read && <i
                                            style={{ fontSize: "14px", fontWeight: "bold" }}
                                            className={`${styles.unreadNotifs} tim-icons icon-bell-55 text-muted pl-1`}
                                        >
                                        </i>}
                                        {notification.message}</p>
                                    <span className={styles.eachTime}>
                                        {notification.delta_time}
                                    </span>
                                </div>
                            )) :
                            <p>پیامی برای نمایش موجود نمی‌باشد</p>
                        }
                    </div>
                </Modal.Body >
            </div >
        </Modal >
    );
};

export default Notification;
