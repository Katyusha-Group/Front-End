import React from "react";
import styles from "../assets/css/500.module.css";
import { ReactSVG } from "react-svg";
import mine from "../assets/img/400-error-bad-request-animate.svg";
const InternalServerError = () => {
  return (
    <div className={styles.main}>
      <ReactSVG className={styles.svg} src={mine}></ReactSVG>
      <div className={styles.main2}>
        <h2 class={styles.text500}> ارور 500</h2>
        <h4 class={styles.text50}>ارور داخلی سرور</h4>
      </div>
    </div>
  );
};

export default InternalServerError;
