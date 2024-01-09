import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileHeader from "./ProfileHeader";

import Swal from 'sweetalert2';
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
    Label,
    ModalFooter,
} from "reactstrap";
import * as styles from '../../assets/css/ModalProfileHeader.module.css';

import {
    showLoading,
    closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

const ModalProfileHeader = ({ showModal, handleClose, profileData, profileData_loading, setProfileData, username, IsThisMe }) => {
    const [show, setShow] = React.useState(showModal);

    if (profileData_loading) {
        return <></>
    }
    React.useEffect(() => {
        showLoading();
        setShow(showModal);
        closeLoading();
    }, [showModal]);

    const [loading, setLoading] = useState(null);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };
    return (
        <Modal show={show} onHide={handleCloseModal}
            style={{}} className={styles.Modal}>
            <div className={styles.modalContent}>
                <Modal.Header className={styles.ModalHeader}>
                    <button className="close" onClick={handleCloseModal}>
                        <span>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <div className={styles.profile}>
                        <ProfileHeader
                            username={username}
                            profile={profileData}
                            setProfile={setProfileData}
                            IsThisMe={IsThisMe}
                            profileData_loading={profileData_loading}
                        />
                    </div>
                </Modal.Body>
            </div >
        </Modal >
    );
};

export default ModalProfileHeader;
