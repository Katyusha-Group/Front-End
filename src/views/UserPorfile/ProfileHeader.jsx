import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"
import moment from 'jalali-moment'
import { ModalHeader } from 'react-bootstrap';
import UsersListModal from './UsersListModal';
// import { userFollowings } from '../../hooks/userFollowings';
// import { userFollowers } from '../../hooks/userFollowers';
import { GETProfileData } from '../../hooks/GETProfileData';
import { POSTFollow } from '../../hooks/POSTFollow';
import { useNavigate } from 'react-router-dom';
export default function ProfileHeader({profile, username, IsThisMe}) {
  const [showModal, setShowModal] = React.useState(false);
  const [IsFollowing, setIsFollowing] = React.useState(false);
  // const {Followings, setFollowings} = userFollowings(username);
  // const {Followers, setFollowers} = userFollowers(username);
  const handleOpenModal_Following = () => {
    // console.log("Modal Clicked!")
    setIsFollowing(true);
    setShowModal(true);
  };

  const handleOpenModal_Followers = () => {
    setIsFollowing(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // console.log("Profile checking in profile header: " + profile.name);
  const DateStart="18 فروردبن1402";
  const a=28
  const dateObj = new Date(profile.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  // console.log("mmd", formattedDate )
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  // console.log("Is this me in profile header: ", IsThisMe);
  let Button_Data = IsThisMe ? "ویرایش پروفایل" : "دنبال کردن";
  // console.log("Button Data is: ", Button_Data);
  const navigate = useNavigate();
  function Profile_Button () {
    if (IsThisMe)
    {
      navigate('/user');
    }
    else 
    {
      POSTFollow(username, !profile.is_followed);
    }
  }
  return (
        <div className={styles.rightUpper}>
          <div className={styles.ProfileHeader_Content}>
            <img className={styles.ProfileImage} 
              src={profile.image} 
              // src="https://www.katyushaiust.ir/media/images/profile_pics/male_default.png"
              alt="" />
            <p className={styles.myusername}> @{profile.username} </p>
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
                IsFollowing={IsFollowing} 
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