import React from "react";
import image from "../../assets/img/3.png";
import styles from "../../assets/css/Landing/mainpart.module.css";

const ThirdLanding = () => {
  return (
    <div className={styles.SecondType}>
      <div className={styles.SecondTypeText}>
        <h3 className={styles.textlanding1}>اینجا برو درساتو برنامه ریزی کن</h3>
        <h5 className={styles.textlanding2}>برنامه درساتو اینجا درست کن همین جا هم برنامه درسی و امتحاناتو ببین استادارو نگاه کن اگر خوب بود انتخابش کن.</h5>
      </div>
      <div className={styles.timelineImage}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ThirdLanding;
