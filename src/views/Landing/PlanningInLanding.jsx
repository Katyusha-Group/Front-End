import React from "react";
import styles from "../../assets/css/landing/mainpart.module.css";
import image from "../../assets/img/Dark_olive1_cropped.jpg";


const PlanningInLanding = () => {
  return (
    <div className={styles.FirstType}>
      <div className={styles.image}>
        <div className={styles.mainimg}>
          <img className={styles.image1} src={image} alt="mmd" />
        </div>
      </div>
    </div>
  );
};

export default PlanningInLanding;
