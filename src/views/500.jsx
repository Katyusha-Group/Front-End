import React from "react";
import styles from "../assets/css/500.module.css";
import { ReactSVG } from "react-svg";
import mine from "../assets/img/400-error-bad-request-animate.svg";
const InternalServerError = () => {
  return (
    <div className={styles.main + " main-div main"} data-testid="main-div">
      <ReactSVG
        className={styles.svg + " svg"}
        src={mine}
        data-testid="svg-component"
      ></ReactSVG>
      <div className={styles.main2 + " main2"} data-testid="main2-div">
        <h2 className={styles.text500}> ارور 500</h2>
        <h4 className={styles.text50}>ارور داخلی سرور</h4>
      </div>
    </div>
  );
};

export default InternalServerError;
