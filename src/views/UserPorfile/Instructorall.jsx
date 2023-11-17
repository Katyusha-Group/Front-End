import React from 'react';
import Instructor from './Instructor';
import { userFollowings } from '../../hooks/userFollowings';

function Instructorall({username}) {
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
                Followings && Followings.length > 0 ? 
                Followings.map ( (entry, index) => (
                    <Instructor key={index} User={entry}/>
                )) :
                <p>No Following Found</p>
            }
        </div>
    );
}

export default Instructorall;
