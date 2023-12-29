import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment';
import UsersListModal from './UsersListModal';
import { POSTFollow } from '../../hooks/POSTFollow';
import { useNavigate } from 'react-router-dom';
import { apis } from '../../assets/apis';
import { showLoading, closeLoading } from '../../components/LoadingAlert/LoadingAlert';
export default function ProfileHeader({profile, username, IsThisMe, profileData_loading}) {
  console.log("Profile in profile header: ", profile);
  const [showModal, setShowModal] = React.useState(false);
  const [IsFollowing, setIsFollowing] = React.useState(false); // Which Modal
  const [profileData_Here, setProfileData_Here] = React.useState(profile);
  const [IsFollowed, setIsFollowed] = React.useState(profileData_Here.is_followed);

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
    console.log("Fetching profile in profile header");
    showLoading();
    fetch((apis["profiles"]["view_profile"] + `${username}`), {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
      return response.json().then((data) => {
        setProfileData_Here(data);
        closeLoading();
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }, [showModal, IsFollowed]);


  const dateObj = new Date(profileData_Here.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');

  let Button_Data = IsThisMe ? 
                    "ویرایش پروفایل" :
                    IsFollowed ?
                      "حذف" :
                      "دنبال کردن";

  const navigate = useNavigate();
  function Profile_Button () {
    if (IsThisMe)
    {
      navigate('/user');
    }
    else if (IsFollowed)
    {
      setIsFollowed(prev => !prev);
      POSTFollow(username, !IsFollowed); // unfollow
    }
    else 
    {
      setIsFollowed(prev => !prev);
      POSTFollow(username, !IsFollowed); // follow
    }
  }
  return (
        <div className={styles.rightUpper}>
          <div className={styles.ProfileHeader_Content}>
            <img className={styles.ProfileImage} 
              src={profileData_Here.image} 
              // src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png"
              alt="" />
            <p className={styles.myusername}> @{profileData_Here.username} </p>
            <div className={styles.Followes}>
              <div onClick={handleOpenModal_Following} className={styles.Following_Follower}>
                <i className='tim-icons icon-single-02'></i>
                <span className={styles.Followes_Count}>{profileData_Here.following_count}</span> 
                <p>دنبال میشود</p>
              </div>
              <div onClick={handleOpenModal_Followers} className={styles.Following_Follower}>
                <i className='tim-icons icon-single-02'></i>
                <span className={styles.Followes_Count}>{profileData_Here.followers_count}</span> 
                <p>دنبال کننده</p>
              </div>
              <UsersListModal 
                showModal={showModal} 
                handleClose={handleCloseModal} 
                IsFollowing={IsFollowing}  // Is it Following or Follower Modal
                // Followings={Followings} 
                // Followers={Followers}
                username={username}
              />
            </div>
            <button className={styles.followbutton} onClick={Profile_Button}> {Button_Data}</button>
          </div>
          
          <div className={styles.ProfileHeader_Other}>
              <div className={styles.ProfileHeader_Other_Item}>
                <p>نام</p>
                <p>{profileData_Here.name}</p> 
              </div>
              <div className={styles.ProfileHeader_Other_Item}>
                <p>نام کاربری</p>
                <p>{profileData_Here.username}@</p>  
              </div>
              <div className={styles.ProfileHeader_Other_Item}>
                <p>تاریخ شروع فعالیت</p>
                <p>{date}</p>  
              </div>
          </div>
        </div>
    )
}