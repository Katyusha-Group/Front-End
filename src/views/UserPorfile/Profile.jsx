import React from "react";
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Timeline from "../TimeLine/Timeline_Profile.jsx";
import { useParams } from "react-router-dom";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";
import IsThisMe_Function from "./IsThisMe_Function.jsx";
export default function Profile() {
  const { chart, id } = useParams();
  const {profileData, setProfileData, loading} = GETProfileData(id);
  console.log("Profile in Profile page: ", profileData);
  let IsThisMe = IsThisMe_Function(id);
  console.log("Is this me: ", IsThisMe);

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
        <Timeline tabsList={tabs} profileData={profileData} profileData_loading={loading}/>
      </div>
      <div className={styles.leftpart}>
        <ProfileHeader username={username} profile={profileData} setProfile={setProfileData} IsThisMe={IsThisMe} profileData_loading={loading}/>
      </div>
    </div>
  );
}