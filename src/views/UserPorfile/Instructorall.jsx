import React from 'react';
import Instructor from './Instructor';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';
import { render } from '@testing-library/react';

function Instructorall({ username, IsFollowing, IsModal
    , Followings, Followers 
}) {
    // const {Followings, setFollowings} = userFollowings(username);
    // const {Followers, setFollowers} = userFollowers(username);
    const Title = IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    // console.log("Followers in InstructorAll: " , Followers);
    const [rerender, setRerender] = React.useState(false); // State variable to trigger rerender
    // Callback function to be triggered when the button is clicked
    const handleButtonClick = () => {
        // Update the state variable to trigger rerender
        setRerender(!rerender);
    };

    // React.useEffect (() => {
        
    // }, [rerender]);

    return (
        <div>
            {!IsModal ? (
                Following_Component(Followings, Title)
            ) : (
                IsFollowing ? Following_Component(Followings, Title, handleButtonClick) : Follower_Component(Followers, Title, handleButtonClick)
            )}
        </div>
    );
}

export default Instructorall;

function Following_Component (Followings, Title, handleButtonClick) {
    return (
        Followings && Followings.length > 0 ? 
        Followings.map ( (entry, index) => (
            <Instructor key={index} User={entry} handleButtonClick={handleButtonClick}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>
    )
}
function Follower_Component (Followers, Title, handleButtonClick) {
    return (
        Followers && Followers.length > 0 ? 
        Followers.map ( (entry, index) => (
            <Instructor key={index} User={entry} handleButtonClick={handleButtonClick}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>   
    )
}