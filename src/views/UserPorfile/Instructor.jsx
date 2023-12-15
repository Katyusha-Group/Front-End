import React from 'react';
import * as styles from "../../assets/css/instructor.module.css"
import { POSTFollow } from '../../hooks/POSTFollow';
function Instructor(
    { User, handleButtonClick }
) {
    // let Is_Followed = User.is_followed;
    const [IsFollowed, setIsFollowed] = React.useState(User.is_followed);
    function Follow_Button_Clicked() {
        setIsFollowed(prev => !prev);
    }
    return (
        <div className={styles.eachcard}>
            {/* <div className="author">
                <div className="block block-one" />
                <div className="block block-two" />
                <div className="block block-three" />
                <div className="block block-four" />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                    alt="..."
                    className="avatar"
                    src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png"
                />
                </a>
            </div> */}
            {/* <img className={styles.eachProfile} src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png" alt="" /> */}
            <img className={styles.eachProfile} src={User.image} alt="" />
            <p className={styles.p_name}>{User.username}</p>
            <button
                className={IsFollowed ? styles.delButton : styles.delButton}
                onClick={() => {
                    POSTFollow(User.username, !IsFollowed);
                    handleButtonClick();
                    Follow_Button_Clicked();
                }}
            >
                {IsFollowed ? "حذف" : "دنبال کردن"}
            </button>
        </div>
    );
}

export default Instructor;
