import React from "react";
import Styles from "../assets/css/Search/Searchmain.module.css";
import UserSearchResponce from "./SearchResponce.jsx";
import SearchFieldofSearchpage from './SearchFieldofSearchpage.jsx'
import { useAllProfiles } from "../hooks/useSearchprofile";
import { useState, useEffect } from "react";



const SearchMain = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  useEffect(() => {}, [searchQuery]);
  const sampleUser = {
    username: "john_doe",
    name: "John Doe",
    image: "https://example.com/john_doe.jpg", // URL to the user's image
  };
  return (
    <div className={Styles.bg}>
      <SearchFieldofSearchpage setSearchQuery={setSearchQuery}/>
      <div className={Styles.Responce}>
        {loading ? (
          <div></div>
        ) : (
          filteredProfiles.map((item, index) => {
            return <UserSearchResponce res={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchMain;
