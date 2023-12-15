import React from "react";
import { lessons } from "../UserPage/Lessons";
import styles from "../../assets/css/Timeline/Timeline_Profile.module.css";

function StudentTimeline({ courseChoosed, showLoading, closeLoading }) {
  return (
    <div className={styles.chart}>
      { lessons(courseChoosed, true, null, showLoading, closeLoading)}
    </div>
  );
}

export default StudentTimeline;