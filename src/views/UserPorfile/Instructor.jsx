import React from 'react';
import * as styles from "../../assets/css/instructor.module.css"
import { POSTFollow } from '../../hooks/POSTFollow';
import IsThisMe_Function from './IsThisMe_Function';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
function Instructor(
    { User, handleButtonClick, handleCloseModal }
) {
    const [loading, setLoading] = React.useState(false);
    // let Is_Followed = User.is_followed;
    const [IsFollowed, setIsFollowed] = React.useState(User.is_followed);
    function Follow_Button_Clicked() {
        setIsFollowed(prev => !prev);
    }
    const navigate = useNavigate();
    const ProfileOnClick = () => {
        navigate(`/profile/${User.username}`);
        handleCloseModal();
    }
    let IsThisMe = IsThisMe_Function(User.username);
    let Button_Data = IsThisMe ?
        "پروفایل" :
        IsFollowed ?
            "حذف" :
            "دنبال کردن";
    return (
        <div className={styles.eachcard} style={{ margin: "0px", paddingLeft: "20px" }}>
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
            <div className={styles.NameImage} onClick={ProfileOnClick}>
                <img className={styles.eachProfile} src={User.image} alt="" />
                <p className={styles.p_name}>{User.username}</p>
            </div>
            {loading ? (<Spinner animation="border" variant="primary"></Spinner>) : 
                (<button
                    className={IsFollowed ? styles.delButton : styles.deleteButton}
                    onClick={() => {
                        if (IsThisMe)
                        {
                            navigate('/user');
                        }
                        else if (IsFollowed)
                        {
                            // setIsFollowed(prev => !prev);
                            // POSTFollow(username, !IsFollowed); // unfollow
                            setLoading(true);
                            POSTFollow(User.username, !IsFollowed, setLoading);
                            handleButtonClick();
                            Follow_Button_Clicked();
                        }
                        else 
                        {
                            // setIsFollowed(prev => !prev);
                            // POSTFollow(username, !IsFollowed); // follow
                            setLoading(true);
                            POSTFollow(User.username, !IsFollowed, setLoading);
                            handleButtonClick();
                            Follow_Button_Clicked();
                        }
                    }}
                >
                    {Button_Data}
                </button>)
            }
        </div>
    );
}

export default Instructor;
