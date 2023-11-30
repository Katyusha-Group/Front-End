import React from 'react'
import styles from "../../assets/css/Landing/mainpart.module.css";
import image from "../../assets/img/Dark_olive1_cropped.jpg";



const Mainpart = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <h1 className={styles.header}>کاتیوشا</h1>
        <h4 className={styles.header}>
          بهترین دستیار انتخاب واحد
          <br />
          ویژه دانشجویان دانشگاه علم و صنعت
        </h4>
        <div className={styles.buttons}>
          <button className={styles.registerButton}>ثبت نام</button>
          <button className={styles.signinBut}>ورود</button>
        </div>
        <div className={styles.MainButtomPart}>
          <p>کاری از دانشجویان ورودی 99 دانشکده کامپیوتر</p>
          <div className={styles.callUs}>
            <p>پیشنهادات و انتقادات : </p>
            <p className={styles.email}> katyushaiust@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.mainimg}>
          <img className={styles.image1} src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mainpart