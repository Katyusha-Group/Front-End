import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment'
import { ModalHeader } from 'react-bootstrap';
import UsersListModal from './UsersListModal';
// import { followProfile } from '../../hooks/POSTFollow';
import { POSTFollow } from '../../hooks/POSTFollow';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';
export default function ProfileHeader({profile, username}) {
  const [showModal, setShowModal] = React.useState(false);
  const [IsFollowing, setIsFollowing] = React.useState(false);
  const {Followings, setFollowings} = userFollowings(username);
  const {Followers, setFollowers} = userFollowers(username);
  const handleOpenModal_Following = () => {
    // console.log("Modal is clicked!");
    // let response = POSTFollow("username1");
    // console.log("response is: " + response);
    // const followProfile = async () => {
    //   try {
    //     const response = await POSTFollow("username1");
    //     console.log("Response data:", response);
    //   } catch (error) {
    //     console.error("An error occurred:", error);
    //   }
    // };
    
    // followProfile();
    // followProfile("username1");
    // POSTFollow("username2");
    setIsFollowing(true);
    setShowModal(true);
  };

  const handleOpenModal_Followers = () => {
    setIsFollowing(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // console.log("Profile checking in profile header: " + profile.name);
  const DateStart="18 فروردبن1402"
  const a=28;
  // const gregorianDate = moment(profile.created_at, 'YYYY-MM-DD');
  // console.log("mmd2:",gregorianDate)
  // const persianDate = gregorianDate.locale('fa').format('YYYY/MM/DD');
  // console.log("mmd",persianDate)
  // const mmd =moment(profile.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  // console.log("date", profile)
  const dateObj = new Date(profile.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  // console.log("mmd", formattedDate )
  // console.log("Type of followers is: " , typeof(Followers);)
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
        <div className={styles.rightUpper}>
          <img className={styles.ProfileImage} src={profile.image} alt="" />
          <p className={styles.p_name}>{profile.name}</p>
          <p className={styles.myusername}> @{profile.username} </p>
          <div className={styles.Follow}>
            {/* Followings */}
            <p
              onClick={handleOpenModal_Following}
            >
               دنبال میشود:&nbsp;
               {
                  !(Followings ===  null) ?
                  Object.values(Followings).length :
                  0
               } 
            </p>
            {/* Followers */}
            <p
              onClick={handleOpenModal_Followers}
            > 
              دنبال کننده:&nbsp;
               {
                  !(Followers ===  null) ?
                  Object.values(Followers).length :
                  0
               } 
            </p>
            <UsersListModal 
              showModal={showModal} 
              handleClose={handleCloseModal} 
              IsFollowing={IsFollowing} 
              Followings={Followings} 
              Followers={Followers}
            />
          </div>
          <p className={styles.DateStart}> تاریخ شروع فعالیت {date}</p>
          <button className={styles.followbutton}> دنبال کردن</button>
        </div>
    )
}