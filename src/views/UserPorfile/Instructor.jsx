import React from 'react';
import * as styles from "../../assets/css/instructor.module.css"
import { POSTFollow } from '../../hooks/POSTFollow';
function Instructor(
        { User, handleButtonClick }
    ) {
    return (
        <div className={styles.eachcard}>
            <img className={styles.eachProfile} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" />
            <p className={styles.p_name}>{User.username}</p>
            <button 
                className={User.is_followed ? styles.delButton : styles.delButton}
                onClick={() => {
                    POSTFollow(User.username, !User.is_followed);
                    handleButtonClick();
                }}
            >
                    {User.is_followed ? "حذف" : "دنبال کردن"}
            </button>
        </div>
    );
}

export default Instructor;
