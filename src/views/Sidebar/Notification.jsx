import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import * as styles from '../../assets/css/UsersListModal.module.css';
import { showLoading, closeLoading } from '../../components/LoadingAlert/LoadingAlert';
const Notification = ({ showModal, handleClose }) => {
    const [show, setShow] = React.useState(showModal);
    const notificationData1 = []
    const notificationData = [
        {
            "actor": {
                "name": "1آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
        }, {
            "actor": {
                "name": "1آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
        }, {
            "actor": {
                "name": "1آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
        }, {
            "actor": {
                "name": "1آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
        },
        {
            "actor": {
                "name": "2آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7468/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون تعداد لیست انتظار به مقدار 2 تغییر کرد."
        },
        {
            "actor": {
                "name": "3آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7467/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون تعداد ثبت نام شده به مقدار 13 تغییر کرد."
        },
        {
            "actor": {
                "name": "4آزمایشگاه مدارهای منطقی",
                "username": "C_1211012",
                "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
                "profile_type": "C",
                "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
            },
            "notification_type": "P",
            "read": true,
            "delta_time": "17 روز پیش",
            "tweet_link": "http://127.0.0.1:8000/twittes/7466/",
            "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون ظر فیت به مقدار 13 تغییر کرد."
        }
    ]
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
                    <div className={styles.bodyContent}>
                        {notificationData && notificationData.length > 0 ?
                            notificationData.map((notification, index) => (
                                <div key={index} className={styles.eachcard}>
                                    <img className={styles.eachProfile} src={notification.actor.image} alt="" />
                                    <p className={styles.eachText}>{notification.message.split(".")[0]}. </p>
                                    <span className={styles.eachTime}>
                                        {notification.delta_time}
                                    </span>
                                </div>
                            )) :
                            <p>پیامی برای نمایش موجود نمی‌باشد</p>
                        }
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default Notification;
