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
    // const Following_Follower = !IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    const Title = IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    console.log("Followers in InstructorAll: " , Followers);
    return (
        <div>
            {IsModal ? (
                Following_Component(Followings, Title)
            ) : (
                IsFollowing ? Following_Component(Followings, Title) : Follower_Component(Followers, Title)
            )}
        </div>
    );
}

export default Instructorall;

function Following_Component (Followings, Title) {
    return (
        Followings && Followings.length > 0 ? 
        Followings.map ( (entry, index) => (
            <Instructor key={index} User={entry}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>
    )
}
function Follower_Component (Followers, Title) {
    return (
        Followers && Followers.length > 0 ? 
        Followers.map ( (entry, index) => (
            <Instructor key={index} User={entry}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>   
    )
}