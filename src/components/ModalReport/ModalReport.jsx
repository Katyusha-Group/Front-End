import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
                    <Form className="d-flex justify-content-center">
                        <FormGroup className={styles.shopping_label} check>
                            <Label check className={styles.shopping_label}>
                                <Input
                                    // onChange={() => {
                                    //     if (props.order.contain_email != "O") {
                                    //         setEmail(!email);
                                    //     }
                                    // }}
                                    // checked={
                                    //     props.order.contain_email == "O" ? true : email
                                    // }
                                    type="checkbox"
                                />
                                <span className="form-check-sign">
                                    <span className="check" />
                                </span>
                                ایمیل
                            </Label>
                        </FormGroup>
                        <FormGroup
                            className={styles.shopping_label}
                            check
                            disabled
                        >
                            <Label check className={styles.shopping_label}>
                                <Input checked={false} type="checkbox" />
                                <span className="form-check-sign">
                                    <span className="check" />
                                </span>
                                sms
                            </Label>
                        </FormGroup>
                        <FormGroup className={styles.shopping_label} check>
                            <Label check className={styles.shopping_label}>
                                <Input
                                    // checked={
                                    //     props.order.contain_telegram == "O"
                                    //         ? true
                                    //         : telegram
                                    // }
                                    type="checkbox"
                                // onChange={() => {
                                //     if (props.order.contain_telegram != "O") {
                                //         setTelegram(!telegram);
                                //     }
                                // }}
                                />
                                <span className="form-check-sign">
                                    <span className="check" />
                                </span>
                                تلگرام
                            </Label>
                        </FormGroup>
                    </Form>
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
            </div >
        </Modal >
    );
};

export default ModalReport;
