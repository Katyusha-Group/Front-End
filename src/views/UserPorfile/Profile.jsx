import React from "react";
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Instructorall from "./Instructorall";
import { apis } from "../../assets/apis";
import { usesProfileMe } from "../../hooks/useProfileMe";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Timeline from "../TimeLine/Timeline_Profile.jsx";
import { useState } from 'react';
import { GETUsername } from '../../hooks/GETUsername';
import { Navigate, useParams } from "react-router-dom";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";
export default function Profile() {
  const { chart, id } = useParams();
  // console.log("ID is: " , id);
  
  const {profile, setProfile, loading} = usesProfileMe();
  const {profileData, setProfileData, loading2} = GETProfileData(id);

  let IsThisMe = false;
  if (profileData != null && profile != null) {
    IsThisMe = (profile.username == profileData.username);
  }
  
  const username = id;
  const tabs = [
    ["Main", "صفحه اصلی"],
    ["Tweets", "پست ها"],
    ["Likes", "پسندیده ها"],
    ["Comments", "نظرات"]
  ];

  if(loading){
    return <></>
  }
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.rightpart}>
        <div><Timeline tabsList={tabs} profileData={profileData}/></div>
      </div>
      <div className={styles.leftpart}>
        <ProfileHeader username={username} profile={profileData} setProfile={setProfileData} IsThisMe={IsThisMe}/>
      </div>
    </div>
  );
}