import React from 'react';
import Instructor from './Instructor';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';

function Instructorall({ username, IsFollowing, IsModal
    // , Followings, Followers 
}) {
    const {Followings, setFollowings} = userFollowings(username);
    const {Followers, setFollowers} = userFollowers(username);
    const Title = IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    console.log("Followers in InstructorAll: " , Followers);
    return (
        <div>
            {!IsModal ? (
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