import React from "react";
import styles from "../assets/css/landing/newLanding.module.css";
import { Col, Row } from "reactstrap";
import Mainpart from "./Landing/mainpart.jsx";
import PlanningInLanding from "./Landing/PlanningInLanding.jsx";
import TimeLinelanding from "./Landing/TimeLinelanding.jsx";
import ThirdLanding from "./Landing/ThirdLanding.jsx";
import Fourthlanding from "./Landing/Fourthlanding.jsx";
import FivethLanding from "./Landing/FivethLanding.jsx";

const NewLandingpage = () => {
  return (
    <div className={styles.landingpage}>
      <Mainpart />
      <PlanningInLanding />
      <TimeLinelanding />
      <ThirdLanding/>
      <Fourthlanding/>
      <FivethLanding/>
    </div>
  );
};

export default NewLandingpage;
