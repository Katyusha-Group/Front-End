import React, { useState } from "react";
import { FormText, Modal, Spinner } from "react-bootstrap";
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



const ModalReport = ({ showModal, handleClose, id }) => {
    const [show, setShow] = React.useState(showModal);
    const [report, setReport] = React.useState("");

    const handleClickReport = (value) => {
        setReport(value);
    };

    React.useEffect(() => {
        setShow(showModal);
    }, [showModal]);

    const [loading, setLoading] = useState(null);

    const handleCloseModal = () => {
        setShow(false);
        setReport("");
        handleClose();
    };
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setShow(false);
            Swal.fire({
                title: 'کمی صبر کنید',
                html: 'در حال بررسی درخواست',
                allowOutsideClick: false,
                timerProgressBar: true,
                showConfirmButton: false,
                background: 'rgb(50, 55, 80)',
                color: '#ceccc0',
                width: '25rem',
                timerProgressBar: true,
                didOpen: () => {
                },
                
                
            });
            // <Spinner animation="border" variant="primary" />
            const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
            let formdata = new FormData()
            formdata.append("twitte", id)
            formdata.append("reason", report)
            const response = await fetch(apis["reportTwitte"]["reportTwitte"], {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formdata,
            });

            const data = await response.json();
            console.log(data)
            Swal.close();
            if (response.status === 201) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("verificationLink", data.url);
                Swal.fire({
                    icon: 'success',
                    title: 'پست مورد نظر با موفقیت ریپورت شد',
                    background: 'rgb(50, 55, 80)',
                    color: '#ceccc0',
                    width: '25rem',
                    timer: 1700,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
                
            }
            
            else {
                // console.log(data.detail)
                if (data.detail == "you can not report your own twitte.") {
                    Swal.fire({
                        icon: "error",
                        title: "شما قبلا این توییت را ریپورت کرده‌اید!",
                        background: "rgb(50, 55, 80)",
                        color: "#ceccc0",
                        width: "25rem",
                        direction: "rtl",
                        timer: 1700,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                }
                if (data.detail == "you have already reported this twitte.") {
                    Swal.fire({
                        icon: "error",
                        title: "شما قبلا این توییت را ریپورت کرده‌اید!",
                        background: "rgb(50, 55, 80)",
                        color: "#ceccc0",
                        width: "25rem",
                        direction: "rtl",
                        timer: 1700,
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "دوباره تلاش کنید!",
                        background: "rgb(50, 55, 80)",
                        color: "#ceccc0",
                        width: "25rem",
                        direction: "rtl",
                        timer: 1700,
                        showCancelButton: false,
                        showConfirmButton: false,
                        

                    });
                }
                handleClose();
            }
            return response;
        } catch (error) {
            console.error(error);
        }
        

        // handleSignUp(formData, subject, gender);
    }
    return (
        <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
            <div className={styles.ModalContents}>
                <Modal.Header className={styles.ModalHeader}>
                    <h4 className={styles.ModalTitle}>دلیل ریپورت؟</h4>
                    <button className="close" onClick={handleCloseModal}>
                        <span>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className={styles.ModalBody}>
                    <Row>
                        <Col md="6">
                            <Input
                                className={styles.eachInput}
                                value="مطالب نامرتبط"
                                type="button"
                                onClick={() => handleClickReport("S")}
                                style={{ opacity: report === "S" ? "1" : "0.6" }}
                            >
                            </Input>
                        </Col>
                        <Col md="6">
                            <Input
                                className={styles.eachInput}
                                value="اهانت و فحاشی"
                                type="button"
                                onClick={() => handleClickReport("V")}
                                style={{ opacity: report === "V" ? "1" : "0.6" }}
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Input
                                className={styles.eachInput}
                                value="پورنوگرافی"
                                type="button"
                                onClick={() => handleClickReport("P")}
                                style={{ opacity: report === "P" ? "1" : "0.6" }}
                            >
                            </Input>
                        </Col>
                        <Col md="6">
                            <Input
                                className={styles.eachInput}
                                value="سایر موارد"
                                type="button"
                                onClick={() => handleClickReport("O")}
                                style={{ opacity: report === "O" ? "1" : "0.6" }}
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row className={styles.reportFooter}>
                        <Col md="12">
                            <Button
                                disabled={report !== "S" && report !== "O" && report !== "P" && report !== "V"}
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
