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
                    <h3 className={styles.ModalTitle}>به چه دلیل می‌خواهید ریپورت کنید؟</h3>
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
                            <div
                                className={styles.eachItem}
                            >
                                <p className={styles.eachItemText}>غیره</p>
                            </div>
                        </Col>
                    </Row>
                    {/* <Form className={styles.d_grid}>
                        <FormGroup
                            className={styles.fgroup}
                        >
                            <Input type="checkbox" />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                            <Label check className={styles.fgroup}>اهانت و فحاشی</Label>
                        </FormGroup>
                        <FormGroup
                            className={styles.fgroup}
                        >
                            <Input type="checkbox" />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                            <Label check className={styles.fgroup}>کلمات مستهجن</Label>
                        </FormGroup>
                        <FormGroup className={styles.fgroup}>

                            <Input type="checkbox" />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                            <Label check className={styles.fgroup}>نامرتبط</Label>
                        </FormGroup>
                        <FormGroup className={styles.fgroup}>

                            <Input type="checkbox" />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                            <Label check className={styles.fgroup}>غیره</Label>
                        </FormGroup>
                    </Form> */}
                    {/* <div className={styles.bodyContent}>

                        <div className={styles.eachnotif}>
                            <img className={styles.eachProfile} alt="" />
                            < p className={styles.eachText} >
                                <i
                                    style={{ fontSize: "14px", fontWeight: "bold" }}
                                    className={`${styles.unreadNotifs} tim-icons icon-bell-55 text-muted pl-1`}
                                >
                                </i></p>
                            <span className={styles.eachTime}>
                            </span>
                        </div>
                        <p>پیامی برای نمایش موجود نمی‌باشد</p>
                    </div> */}
                </Modal.Body >
                <Modal.Footer className={styles.footer}>
                    <Button
                        onClick={handleSubmit}
                        className="btn-fill"
                        color="primary"
                        type="submit"
                    >
                        ثبت
                    </Button>
                </Modal.Footer>
            </div >
        </Modal >
    );
};

export default ModalReport;
