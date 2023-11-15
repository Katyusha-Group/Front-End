import React from 'react';
import Instructor from './Instructor';
import { userFollowings } from '../../hooks/userFollowings';

function Instructorall() {
    // const {Following, setFollowings, loading} = userFollowings();
    var Following = [
        {
          username: 'username1',
          name: 'user1',
          image: '',
          created_at: '2022-11-15 23:22',
        },
        {
            username: 'username2',
            name: 'user2',
            image: '',
            created_at: '2022-09-15 23:22',
        },
        {
            username: 'username3',
            name: 'user3',
            image: '',
            created_at: '2022-10-15 23:22',
        },  
    ];
    return (
        <div>
            {/* <Instructor/>
            <Instructor/>
            <Instructor/> */}
            {
                Following.map ( (entry, index) => (
                    <Instructor key={index} User={entry}/>
                ))
            }
        </div>
    );
}

export default Instructorall;
