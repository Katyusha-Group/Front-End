import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment'
import { ModalHeader } from 'react-bootstrap';
import UsersListModal from './UsersListModal';

export default function ProfileHeader({profile}) {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpenModal = () => {
    // console.log("Modal is clicked!");
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
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
        <div className={styles.rightUpper}>
          <img className={styles.ProfileImage} src={profile.image} alt="" />
          <p className={styles.p_name}>{profile.name}</p>
          <p className={styles.myusername}> @{profile.username} </p>
          <div className={styles.Follow}>
            {/* Followings */}
            <p
              onClick={handleOpenModal}
            >
               دنبال میشود:{a} 
            </p>
            {/* Followers */}
            <p> دنبال کننده:{a}</p>
            <UsersListModal showModal={showModal} handleClose={handleCloseModal}/>
          </div>
          <p className={styles.DateStart}> تاریخ شروع فعالیت {date}</p>
          <button className={styles.followbutton}> دنبال کردن</button>
        </div>
    )
}