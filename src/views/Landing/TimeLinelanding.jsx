import React from 'react'
import styles from "../../assets/css/landing/mainpart.module.css";
import image from "../../assets/img/timelineeg.png";

const TimeLinelanding = () => {
  return (
    <div className={styles.SecondType}>
        <div>
          <img className={styles.timelineImage} src={image} alt="" />
      </div>
      <div className={styles.SecondTypeText}>
        <h3>اینجا پیامتو درباره درسا و استادا بنویس <br></br>نظر بقییه هم بخون </h3>
        <h5>می توی اینجا پیام بذار هر پیامی که دوست داری رفیقات بخونن </h5>
      </div>
    </div>
  )
}

export default TimeLinelanding