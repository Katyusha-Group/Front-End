import React from "react";
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Timeline from "../TimeLine/Timeline_Profile.jsx";
import { useParams } from "react-router-dom";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";
import IsThisMe_Function from "./IsThisMe_Function.jsx";
import Spinner from "react-bootstrap/Spinner";
export default function Profile() {
  const { chart, id } = useParams();
  const { profileData, setProfileData, loading } = GETProfileData(id);
  let IsThisMe = IsThisMe_Function(id);

  const username = id;
  const tabs = [
    ["Main", "صفحه اصلی"],
    ["Tweets", "پست ها"],
    ["Likes", "پسندیده ها"],
    ["Comments", "نظرات"]
  ];

  // if (loading) {
  //   return <>
  //     <Spinner animation="border" variant="primary" className={styles.ProfileSpinner}/>
  //   </>
  // }
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.rightpart}>
        {
          loading ? (
            <Spinner animation="border" variant="primary" className={styles.ProfileSpinner}/>
          ) :
          (
            <Timeline
              tabsList={tabs}
              profileData={profileData}
              profileData_loading={loading}
              username={username}
              setProfileData={setProfileData}
              IsThisMe={IsThisMe}
            />
          )
        }
      </div>
      <div className={styles.leftpart} style={loading ? {width: "20vw"} : {}}>
        {
          loading ? (
            <Spinner animation="border" variant="primary" className={styles.ProfileSpinner} style={loading ? {margin: "auto"} : {}}/>
          ) :
          (
            <ProfileHeader
              username={username}
              profile={profileData}
              setProfileData={setProfileData}
              IsThisMe={IsThisMe}
              profileData_loading={loading}
            />
          )
        }
      </div>
    </div>
  );
}