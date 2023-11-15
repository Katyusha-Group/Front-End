import React from 'react';
import * as styles from "../../assets/css/instructor.module.css"

function Instructor(
        {User}
    ) {
    return (
        <div className={styles.eachcard}>
            <img className={styles.eachProfile} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" />
            {/* <p className={styles.p_name}>جت وایت</p>
            <button className={styles.delButton}>حذف</button> */}
            {/* <img className={styles.eachProfile} src={User.image} alt="" /> */}
            <p className={styles.p_name}>{User.username}</p>
            {/* <button className={User.is_followed ? styles.delButton : styles.FollowButton}>حذف</button> */}
            <button className={styles.delButton}>حذف</button>
        </div>
    );
}

export default Instructor;
