import React from 'react'
import styles from "../../assets/css/Landing/mainpart.module.css";
import image from "../../assets/img/Timeline_landing.png";

const TimeLinelanding = () => {
  return (
    <div className={styles.SecondType_1}>
        <div>
          <img className={styles.timelineImage} src={image} alt="" />
      </div>
      <div className={styles.SecondTypeText_1}>
        <h3 className={styles.textlanding1}>اینجا پیامتو درباره درسا و استادا بنویس <br></br>نظر بقییه هم بخون </h3>
        <h5 className={styles.textlanding2}>می توی اینجا پیام بذار هر پیامی که دوست داری رفیقات بخونن </h5>
      </div>
    </div>
  )
}

export default TimeLinelanding