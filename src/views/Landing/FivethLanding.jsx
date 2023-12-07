import React from 'react'
import image from "../../assets/img/5.png";
import styles from "../../assets/css/Landing/mainpart.module.css";

const FivethLanding = () => {
  return (
    <div className={styles.SecondType}>
      <div className={styles.SecondTypeText}>
        <h3 className={styles.textlanding1}>برو تو پنل دروس تا بگم چه خبره</h3>
        <h5 className={styles.textlanding2}>اگر تداخلی داشته باشی می تونی اینجا ببینی می تونی تمام درسای دانشکده خودتو بقییه رو انتخاب کنی تا تمام تداخلارو ببینی.</h5>
      </div>
      <div className={styles.timelineImage}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default FivethLanding