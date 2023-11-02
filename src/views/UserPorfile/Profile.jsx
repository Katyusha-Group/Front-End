import React from "react";
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Instructorall from "./Instructorall";
import { apis } from "../../assets/apis";
import { usesProfileMe } from "../../hooks/useProfileMe";
export default function Profile() {
  const {profile, setProfile, loading} = usesProfileMe()
  if(loading){
    return <></>
  }
  return (
    <div className={styles.main}>
      <div className={styles.rightpart}>
        <ProfileHeader profile={profile}/>
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
