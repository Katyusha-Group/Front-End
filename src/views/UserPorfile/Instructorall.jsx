import React from 'react';
import Instructor from './Instructor';
import { userFollowings } from '../../hooks/userFollowings';
import { GETUsername } from '../../hooks/GETUsername';
function Instructorall() {
    const {username, setUsername} = GETUsername();
    // console.log("My username is: " + username);
    const {Followings, setFollowings} = userFollowings(username);
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
    return (
        <div>
            {
                Followings && 
                Followings.map ( (entry, index) => (
                    <Instructor key={index} User={entry}/>
                ))
            }
        </div>
    );
}

export default Instructorall;
