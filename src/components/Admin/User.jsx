import React from 'react'
import * as styles from "../../assets/css/admin/People_Table.module.css";
export default function User({User_data}) {
  console.log("User_data: ", User_data.followers_count);
  return (
    <div className={styles.User_Container}>
        {/* <img className={styles.User_img} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" /> */}
        <img className={styles.User_img} src={User_data.image} alt="" />
        <p className={styles.User_name}>{User_data.username}@{User_data.id}</p>
        <div className={styles.User_Follows}>
            دنبال کننده: 
            {User_data.followers_count}
            <br/>
            دنبال شونده:
            {User_data.following_count}
        </div>
        <p className={styles.User_Date}>{User_data.Date}</p>
        {/* <img className={styles.User_img} src="http://37.32.13.62//media/images/profile_pics/male_default.png" alt="" />
        <p className={styles.User_name}>عارف @aref</p>
        <div className={styles.User_Follows}>
            100
            دنبال کننده
            <br/>
            100
            دنبال شونده
        </div>
        <p className={styles.User_Date}>1400/2/3</p> */}
    </div>
  )
}
