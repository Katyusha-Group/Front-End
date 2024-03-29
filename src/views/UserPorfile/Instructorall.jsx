import React from 'react';
import Instructor from './Instructor';
// import { userFollowings } from '../../hooks/userFollowings';
// import { userFollowers } from '../../hooks/userFollowers';
// import { render } from '@testing-library/react';

function Instructorall({ username, IsFollowing, IsModal
    , Followings, Followers
    , handleButtonClick,
    handleCloseModal
}) {
    // const {Followings, setFollowings} = userFollowings(username);
    // const {Followers, setFollowers} = userFollowers(username);
    const Title = IsFollowing ? "دنبال شونده"  : "دنبال کننده";
    
    // console.log("Followers in InstructorAll: " , Followers);
    // const [rerender, setRerender] = React.useState(false); // State variable to trigger rerender
    // Callback function to be triggered when the button is clicked
    // const handleButtonClick = () => {
    //     // Update the state variable to trigger rerender
    //     // setRerender(!rerender);
    //     console.log("Button clicked!");
    // };

    // React.useEffect (() => {
        
    // }, [rerender]);

    return (
        <div>
            {
                IsFollowing ?   Following_Component(Followings, Title, handleButtonClick, handleCloseModal) : 
                                Follower_Component(Followers, Title, handleButtonClick, handleCloseModal)
            }
        </div>
    );
}

export default Instructorall;

function Following_Component (Followings, Title, handleButtonClick, handleCloseModal) {
    return (
        Followings && Followings.length > 0 ? 
        Followings.map ( (entry, index) => (
            <Instructor key={index} User={entry} handleButtonClick={handleButtonClick} handleCloseModal={handleCloseModal}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>
    )
}
function Follower_Component (Followers, Title, handleButtonClick, handleCloseModal) {
    return (
        Followers && Followers.length > 0 ? 
        Followers.map ( (entry, index) => (
                <Instructor key={index} User={entry} handleButtonClick={handleButtonClick} handleCloseModal={handleCloseModal}/>
        )) :
        <p>هیج {Title} ای یافت نشد</p>   
    )
}