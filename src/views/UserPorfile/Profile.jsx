import React from "react";
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import Instructorall from "./Instructorall";
import { apis } from "../../assets/apis";
import { usesProfileMe } from "../../hooks/useProfileMe";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Timeline from "../../views/TimeLine/Timeline.jsx";
import { useState } from 'react';
import { GETUsername } from '../../hooks/GETUsername';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';
export default function Profile() {
  const {profile, setProfile, loading} = usesProfileMe();
  const {username, setUsername} = GETUsername();
  const {Followings, setFollowings} = userFollowings(username);
  const {Followers, setFollowers} = userFollowers(username);
  // var profile_temp = [
  //   {
  //     username: 'username1',
  //     name: 'user',
  //     image: '',
  //     created_at: '2022-11-15 23:22',
  //   }
  // ];
  // setProfile(profile_temp);
  // let [tabs, setTabs] = useState([]);
  const tabs = [
    ["Main", "صفحه اصلی"],
    ["Tweets", "پست ها"],
    ["Likes", "پسندیده ها"],
    ["Comments", "نظرات"]
  ];
  // setTabs(tempTab);
  console.log("Tabs: " + tabs[0][0]);
  if(loading){
    return <></>
  }
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.rightpart}>
        {/* {console.log("Profile checking in profile page: " + profile.name)} */}
        <ProfileHeader username={username} profile={profile}/>
        <div className={styles.rightBottom}>
          <Instructorall 
            username={username} 
            IsModal={false}
            IsFollowing={false}
            Followings={Followings} 
            Followers={Followers}
          />
        </div>
      </div>
      <div className={styles.leftpart}>
        {/* <div className={styles.table}>برنامه هفتگی </div> */}
        <div><Timeline tabsList={tabs}/></div>
        {/* <div className={styles.div}></div>
        <div className={styles.div}></div> */}
      </div>
    </div>
  );
}
