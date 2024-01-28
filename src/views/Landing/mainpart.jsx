import React from 'react'
import styles from "../../assets/css/Landing/mainpart.module.css";
import image from "../../assets/img/Dark_olive1_cropped.jpg";
import { useNavigate } from "react-router-dom";





const Mainpart = () => {
  const navigate =useNavigate()
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
        <h1 className={styles.header1}>کاتیوشا</h1>
        <h4 className={styles.header}>
          بهترین دستیار انتخاب واحد
          <br />
          ویژه دانشجویان دانشگاه علم و صنعت
        </h4>
        <div className={styles.buttons}>
          <button onClick={e=>navigate("/signup")} className={styles.registerButton}>ثبت نام</button>
          <button onClick={e=>navigate("/login")} className={styles.signinBut}>ورود</button>
        </div>
        <div className={styles.MainButtomPart}>
          <p className={styles.Authorsgroup}>کاری از دانشجویان ورودی 99 دانشکده کامپیوتر</p>
          <div className={styles.callUs}>
            <p>پیشنهادات و انتقادات : </p>
            <p className={styles.email}> katyushaiust@gmail.com</p>
            <p className={styles.email}> v0.0</p>
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