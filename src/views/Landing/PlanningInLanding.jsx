import React from "react";
import styles from "./../../assets/css/Landing/mainpart.module.css";
import image from "./../../assets/img/imgdarkolive.jpg";
const PlanningInLanding = () => {
  return (
    <div className={styles.FirstType}>
      <div className={styles.image}>
        <div className={styles.mainimg2}>
          <img className={styles.image1} src={image} alt="mmd" />
        </div>
      </div>
      <div className={styles.FirstTypeText}>
        <h3 className={styles.textlanding1} >حاجی با این راحت تره انتخاب واحد </h3>
        <h5>برنامه ریزی درس هاتو ببین، تداخل هارو ببین، استادارو بشناس</h5>
      </div>
    </div>
  );
};

export default PlanningInLanding;
