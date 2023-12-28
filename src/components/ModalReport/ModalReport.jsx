import React, { useState } from "react";
import { FormText, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
import * as styles from '../../assets/css/ModalReport.module.css';
import { apis } from "../../assets/apis";

import {
    showLoading,
    closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

const ModalReport = ({ showModal, handleClose }) => {
    const [show, setShow] = React.useState(showModal);
    const [report, setReport] = React.useState();
    const handleClickReport = (value) => {
        setReport(value);
    };

    // const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

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
    async function handleSubmit(event) {
        event.preventDefault();
        if (report.trim().length === 0) {
            // errors.profileNameError = "!وارد کردن نام پروفایل الزامی است";
        }
        else {
            // handleSignUp(formData, subject, gender);
        }
    }
    return (
        <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
            <div className={styles.ModalContents}>
                <Modal.Header closeButton className={styles.ModalHeader}>
                    <h3 className={styles.ModalTitle}>دلیل ریپورت؟</h3>
                    <button className="close" onClick={handleCloseModal}>
                        <span>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.ModalBody}>
                    <Row>
                        <Col md="6">
                            <div
                                className={styles.eachItem}
                            >
                                <p
                                    value={"S"}
                                    name={"spam"}
                                    onClick={handleClickReport}
                                    className={styles.eachItemText}>مطالب نامرتبط</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div
                                className={styles.eachItem}
                            >
                                <p className={styles.eachItemText}>اهانت و فحاشی</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <div
                                className={styles.eachItem}
                            >
                                <p className={styles.eachItemText}>پورنوگرافی</p>
                            </div>
                        </Col>
                        <Col md="6">

                            {/* <label className={styles.eachLabel}>غیره</label> */}
                            <Input
                                className={styles.eachInput}
                                value="سایر موارد"
                                type="button"
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row className={styles.reportFooter}>
                        <Col md="12">
                            <Button
                                onClick={handleSubmit}
                                className="btn-fill"
                                color="primary"
                                type="submit"
                            >
                                ثبت
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body >
            </div >
        </Modal >
    );
};

export default ModalReport;
