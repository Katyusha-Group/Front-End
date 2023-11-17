import React from "react";
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Instructorall from "./Instructorall";
import { apis } from "../../assets/apis";
import { usesProfileMe } from "../../hooks/useProfileMe";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Timeline from "../../views/TimeLine/Timeline.jsx";
import { useState } from 'react';
import { GETUsername } from '../../hooks/GETUsername';
export default function Profile() {
  const {profile, setProfile, loading} = usesProfileMe();
  const {username, setUsername} = GETUsername();
  
  const tabs = [
    ["Main", "صفحه اصلی"],
    ["Tweets", "پست ها"],
    ["Likes", "پسندیده ها"],
    ["Comments", "نظرات"]
  ];

  console.log("Tabs: " + tabs[0][0]);
  if(loading){
    return <></>
  }
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.rightpart}>
        <ProfileHeader username={username} profile={profile}/>
        <div className={styles.rightBottom}>
          <Instructorall username={username} IsModal={false}/>
        </div>
      </div>
      <div className={styles.leftpart}>
        <div><Timeline tabsList={tabs}/></div>
      </div>
    </div>
  );
}
