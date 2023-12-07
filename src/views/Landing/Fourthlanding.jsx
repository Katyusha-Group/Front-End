import React from 'react'
import image from "../../assets/img/4.png";
import styles from "../../assets/css/Landing/mainpart.module.css";

const Fourthlanding = () => {
  return (
    <div className={styles.SecondType_1}>
      <div className={styles.timelineImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.SecondTypeText}>
        <h3 className={styles.textlanding1}>درسارو بگیر تا خبرت کنیم</h3>
        <h5 className={styles.textlanding2}>درسارو بگیر اگر خالی شد خودمون بهت خبر می دیم نمی خواد پشت سیستم بشینی</h5>
      </div>
    </div>
  )
}

export default Fourthlanding