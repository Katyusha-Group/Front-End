import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment'


export default function ProfileHeader({profile}) {
  const DateStart="18 فروردبن1402"
  const a=28
  // const gregorianDate = moment(profile.created_at, 'YYYY-MM-DD');
  // console.log("mmd2:",gregorianDate)
  // const persianDate = gregorianDate.locale('fa').format('YYYY/MM/DD');
  // console.log("mmd",persianDate)
  // const mmd =moment(profile.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  console.log("date", profile)
  const dateObj = new Date(profile.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  console.log("mmd", formattedDate )
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
        <div className={styles.rightUpper}>
          <img className={styles.ProfileImage} src={profile.image} alt="" />
          <p className={styles.p_name}>{profile.name}</p>
          <p className={styles.myusername}> @{profile.username} </p>
          <div className={styles.Follow}>
            <p> دنبال میشود:{a}</p>
            <p> دنبال کننده:{a}</p>
          </div>
          <p className={styles.DateStart}> تاریخ شروع فعالیت {date}</p>
          <button className={styles.followbutton}> دنبال کردن</button>
        </div>
    )
}