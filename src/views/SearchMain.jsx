import React from "react";
import Styles from "../assets/css/Search/Searchmain.module.css";
import UserSearchResponce from "./SearchResponce.jsx";
import SearchFieldofSearchpage from './SearchFieldofSearchpage.jsx'


const SearchMain = () => {
  const sampleUser = {
    username: "john_doe",
    name: "John Doe",
    image: "https://example.com/john_doe.jpg", // URL to the user's image
  };
  return (
    <div className={Styles.bg}>
      <SearchFieldofSearchpage/>
      <div className={Styles.Responce}>
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
        <UserSearchResponce res={sampleUser} />
      </div>
    </div>
  );
};

export default SearchMain;
