import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment'
import { ModalHeader } from 'react-bootstrap';
import UsersListModal from './UsersListModal';
// import { userFollowings } from '../../hooks/userFollowings';
// import { userFollowers } from '../../hooks/userFollowers';
import { GETProfileData } from '../../hooks/GETProfileData';

export default function ProfileHeader({profile, username}) {
  const [showModal, setShowModal] = React.useState(false);
  const [IsFollowing, setIsFollowing] = React.useState(false);
  // const {Followings, setFollowings} = userFollowings(username);
  // const {Followers, setFollowers} = userFollowers(username);
  const handleOpenModal_Following = () => {
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
  const DateStart="18 فروردبن1402";
  const a=28
  const dateObj = new Date(profile.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  // console.log("mmd", formattedDate )
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
        <div className={styles.rightUpper}>
          <img className={styles.ProfileImage} 
            src={profile.image} 
            // src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png"
            alt="" />
          <p className={styles.p_name}>{profile.name}</p>
          <p className={styles.myusername}> @{profile.username} </p>
          <div className={styles.Follow}>
            {/* Followings */}
            <p
              onClick={handleOpenModal_Following}
            >
               دنبال میشود:&nbsp;
               {
                  // !(Followings ===  null) ?
                  // Object.values(Followings).length :
                  // 0
                  profile.following_count
               }  
            </p>
            {/* Followers */}
            <p
              onClick={handleOpenModal_Followers}
            > 
                دنبال کننده:&nbsp;
               {
                  // !(Followers ===  null) ?
                  // Object.values(Followers).length :
                  // 0
                  profile.followers_count
               }             
            </p>
            <UsersListModal 
              showModal={showModal} 
              handleClose={handleCloseModal} 
              IsFollowing={IsFollowing} 
              // Followings={Followings} 
              // Followers={Followers}
              username={username}
            />
          </div>
          <p className={styles.DateStart}> تاریخ شروع فعالیت {date}</p>
          <button className={styles.followbutton}> دنبال کردن</button>
        </div>
    )
}