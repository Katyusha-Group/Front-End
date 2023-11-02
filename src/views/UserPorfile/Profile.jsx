import React from "react";
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Instructorall from "./Instructorall";
import { apis } from "../../assets/apis";
export default function Profile() {
  
  return (
    <div className={styles.main}>
      <div className={styles.rightpart}>
        <ProfileHeader />
        <div className={styles.rightBottom}>
          <Instructorall />
        </div>
      </div>
      <div className={styles.leftpart}>
        <div className={styles.table}>برنامه هفتگی </div>
        <div className={styles.div}></div>
        <div className={styles.div}></div>
      </div>
    </div>
  );
}
