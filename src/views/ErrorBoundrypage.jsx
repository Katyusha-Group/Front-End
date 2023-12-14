import React from "react";
import styles from "../assets/css/Errorboundrypage.module.css";
import image from "../assets/img/Robot.jpg";

const ErrorBoundrypage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <img className={styles.img} src={image} alt="" />
        
          <p className={styles.texts}>اوه اوه مشکل فنی پیش آمده
        <br />با پشتیبانی تماس بگیرید
        </p>
       
      </div>
    </div>
  );
};

export default ErrorBoundrypage;
