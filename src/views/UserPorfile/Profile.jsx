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
  // const {profile, setProfile, loading} = GETProfileData("username3");
  // console.log("PFSFDSFSDF" , profile);
  // const {username, setUsername} = GETUsername();
  // setUsername(id);
  const username = id;
  const tabs = [
    ["Main", "صفحه اصلی"],
    ["Tweets", "پست ها"],
    ["Likes", "پسندیده ها"],
    ["Comments", "نظرات"]
  ];

  // console.log("Tabs: " + tabs[0][0]);
  if(loading){
    return <></>
  }
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.rightpart}>
        <div><Timeline tabsList={tabs}/></div>
      </div>
      <div className={styles.leftpart}>
        <ProfileHeader username={username} profile={profile}/>
        {/* <div className={styles.rightBottom}>
          <Instructorall username={username} IsModal={false}/>
        </div> */}
      </div>
    </div>
  );
}


// .rightUpper::before {
//   content: "";
//   position: absolute;
//   top: -50px; /* Adjust the value to position the ribbon */
//   left: -50px; /* Adjust the value to position the ribbon */
//   width: calc(100% + 100px); /* Make the ribbon wider or narrower by adjusting the value */
//   height: 200%; /* Increase or decrease the value to adjust the height of the ribbon */
//   transform: rotate(-45deg) translateY(-50%); /* Adjust the rotation and vertical position */
//   background-color: rgba(143, 62, 140, 0.5);
//   z-index: -1; /* Set the z-index to -1 to ensure the ribbon stays behind other components */
// }