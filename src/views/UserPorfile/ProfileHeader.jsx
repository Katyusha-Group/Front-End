import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment';
import UsersListModal from './UsersListModal';
import { POSTFollow } from '../../hooks/POSTFollow';
import { useNavigate } from 'react-router-dom';
import { apis } from '../../assets/apis';
import Spinner from "react-bootstrap/Spinner";
export default function ProfileHeader({profile, setProfileData, username, IsThisMe, profileData_loading}) {
  // console.log("Profile in profile header: ", profile);
  const [showModal, setShowModal] = React.useState(false);
  const [IsFollowing, setIsFollowing] = React.useState(false); // Which Modal
  // const [profileData_Here, setProfileData_Here] = React.useState(profile);
  const [IsFollowed, setIsFollowed] = React.useState(profile.is_followed);
  const [loading, setLoading] = React.useState(false);
  if (profileData_loading) {
    return (
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  
  const handleOpenModal_Following = () => {
    setIsFollowing(true);
    setShowModal(true);
  };

  const handleOpenModal_Followers = () => {
    setIsFollowing(false);
    setShowModal(true);
  };

  function handleCloseModal() {
    setShowModal(false);
  };

  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  React.useEffect(() => {
    // console.log("Fetching profile in profile header");
    fetch((apis["profiles"]["view_profile"] + `${username}`), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        return response.json().then((data) => {
          setProfileData(data);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showModal, IsFollowed, username]);

  React.useEffect(() => {
    // console.log("Fetching profile in profile header");
    fetch((apis["profiles"]["view_profile"] + `${username}`), {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
      return response.json().then((data) => {
        setProfileData(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  

  const dateObj = new Date(profile.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');

  // let Button_Data = IsThisMe ? 
  //                   "ویرایش پروفایل" :
  //                   IsFollowed ?
  //                     "حذف" :
  //                     "دنبال کردن";

  const navigate = useNavigate();
  function Profile_Button () {
    if (IsThisMe)
    {
      navigate('/user');
    }
    else if (IsFollowed) {
      // console.log("Is followed & wanting to unfollow!");
      setLoading(true);
      setIsFollowed(prev => !prev);
      POSTFollow(username, !IsFollowed, setLoading); // unfollow
      // setLoading(false);
      // console.log("Loading is: " + loading + " Unfollowed!");
    }
    else {
      // console.log("Is unfollowed & wanting to follow!");
      setLoading(true);
      setIsFollowed(prev => !prev);
      POSTFollow(username, !IsFollowed, setLoading); // follow
      // setLoading(false);
      // console.log("Loading is: " + loading + " Followed!");
    }
  }

  // React.useEffect(() => {
  //   console.log("Loading has become: ", loading);
  // }, [loading]);

  return (
    <div className={styles.rightUpper}>
      <div className={styles.ProfileHeader_Content}>
        <img className={styles.ProfileImage}
          src={profile.image}
          // src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png"
          alt="" />
        <p className={styles.myusername}>
          @{profile.username}
          <a href={"/chat/" + username} className={styles.chatIcon}>
            <i className='tim-icons icon-chat-33'></i>
          </a>
        </p>

        <div className={styles.Followes}>
          <div onClick={handleOpenModal_Following} className={styles.Following_Follower}>
            <i className='tim-icons icon-single-02'></i>
            <span className={styles.Followes_Count}>{profile.following_count}</span>
            <p>دنبال میشود</p>
          </div>
          <div onClick={handleOpenModal_Followers} className={styles.Following_Follower}>
            <i className='tim-icons icon-single-02'></i>
            <span className={styles.Followes_Count}>{profile.followers_count}</span>
            <p>دنبال کننده</p>
          </div>
          <UsersListModal
            showModal={showModal}
            handleClose={handleCloseModal}
            IsFollowing={IsFollowing}  // Is it Following or Follower Modal
            // Followings={Followings} 
            // Followers={Followers}
            username={username}
            IsThisMe={IsThisMe}
          />
        </div>
        {loading ? (
          <Spinner animation="border" variant="primary"></Spinner>
        ):
        (
          <button className={styles.followbutton} onClick={Profile_Button}>
            {IsThisMe ?
              "ویرایش پروفایل" :
              profile.is_followed ?
                "حذف" :
                "دنبال کردن"}
          </button>
        )}
      </div>

      <div className={styles.ProfileHeader_Other}>
        <div className={styles.ProfileHeader_Other_Item}>
          <p>نام</p>
          <p>{profile.name}</p>
        </div>
        <div className={styles.ProfileHeader_Other_Item}>
          <p>نام کاربری</p>
          <p>{profile.username}@</p>
        </div>
        <div className={styles.ProfileHeader_Other_Item}>
          <p>تاریخ شروع فعالیت</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}