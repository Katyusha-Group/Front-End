import React from 'react'
import * as styles from "../../assets/css/admin/People_Table.module.css";
export default function User({User_data}) {
  return (
    <div className={styles.Person_Container}>
        {/* <img className={styles.Person_img} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" />
        <p className={styles.Person_name}>{User_data.username} @{User_data.id}</p>
        <div className={styles.Person_Follows}>
            {User_data.Follower_Count}
            دنبال کننده
            <br/>
            {User_data.id}
            دنبال شونده
        </div>
        <p className={styles.Person_Date}>{User_data.Date}</p> */}
        <img className={styles.Person_img} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" />
        <p className={styles.Person_name}>عارف @aref</p>
        <div className={styles.Person_Follows}>
            100
            دنبال کننده
            <br/>
            100
            دنبال شونده
        </div>
        <p className={styles.Person_Date}>1400/2/3</p>
    </div>
  )
}
