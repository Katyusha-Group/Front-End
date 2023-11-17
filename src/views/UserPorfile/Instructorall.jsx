import React from 'react';
import Instructor from './Instructor';
// import { userFollowings } from '../../hooks/userFollowings';
// import { userFollowers } from '../../hooks/userFollowers';
function Instructorall({ username, IsFollowing, IsModal, Followings, Followers }) {
    // console.log("My username is: " + username);
    // const {Followings, setFollowings} = userFollowings(username);
    // const {Followers, setFollowers} = userFollowers(username);
    // var Following = [
    //     {
    //       username: 'username1',
    //       name: 'user1',
    //       image: '',
    //       created_at: '2022-11-15 23:22',
    //     },
    //     {
    //         username: 'username2',
    //         name: 'user2',
    //         image: '',
    //         created_at: '2022-09-15 23:22',
    //     },
    //     {
    //         username: 'username3',
    //         name: 'user3',
    //         image: '',
    //         created_at: '2022-10-15 23:22',
    //     },  
    // ];
    // console.log("Fetched followings: " + Followings);
    const Following_Follower = !IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    console.log("Followers in InstructorAll: " , Followers);
    return (
        <div>
            {/* <p>{IsModal}</p> */}
            {

                IsFollowing || !IsModal ?

                    Followings && Followings.length > 0 ? 
                    Followings.map ( (entry, index) => (
                        <Instructor key={index} User={entry}/>
                    )) :
                    <p>هیچ {Following_Follower} ای یافت نشد</p>

                    :

                    Followers && Followers.length > 0 ? 
                    Followers.map ( (entry, index) => (
                        <Instructor key={index} User={entry}/>
                    )) :
                    <p>هیچ {Following_Follower} ای یافت نشد</p>
            }
        </div>
    );
}

export default Instructorall;
