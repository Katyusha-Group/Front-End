import React from 'react';
import { useState } from "react";
// import SearchBox from '../SearchBox/SearchBox'
import { Input } from "reactstrap";
import * as styles from "../../assets/css/admin/People_Table.module.css";
import User from './User';
import { useTweets } from "../../hooks/Twitter/useTweets";
import Tweet from '../../views/TimeLine/Tweet';
import Admin_Searchbar from './Admin_SearchBar.jsx';
import { useAllProfiles } from '../../hooks/useSearchprofile.jsx';
let tabsList = [
  ["Users", "کاربرها"],
  ["Posts", "پست ها"],
];

export default function PeopleTable() {
  const [activeTab, setActiveTab] = useState("Users");
  const { filteredProfiles, loading2 } = useAllProfiles("");
  
  const [IsUser, setIsUser] = useState(true);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab == "Users") {
      setIsUser(true);
    }
    else {
      setIsUser(false);
    }
  };
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
  const [open, setOpen] = useState(false);
  
  return (
    // <div>PeopleTable</div>
    <>
      <div className={styles.Users_List}>
      {/* <Input className={styles.Search}/> */}
        <div className={styles.tabs}>
          {tabsList.map((entry, index) => (
            <button
              key={index}
              className={activeTab === entry[0] ? styles.activeTab : styles.tab}
              onClick={() => handleTabClick(entry[0])}
            >
              {entry[1]}
            </button>
          ))}
        </div>
        
        {/* {activeTab === "Users" && (
          <div className={styles.Users_Container}>
            {filteredProfiles.map((prof) => (
              <User key={prof.id}
              User_data={prof}/>
            ))}
          </div>
        )}
        {activeTab === "Posts" && (
          <div className={styles.Users_Container}>
            {tweets.results.map((tweet) => (
              <Tweet
                // className={styles.Tweets_Admin}
                key={tweet.id}
                tweet={tweet}
                setOpenComment={setOpen}
                // setTweets={setTweets}
                // style={{ color: 'red', fontSize: '16px' }}
              />
            ))}
          </div>
        )}*/}
        <Admin_Searchbar IsUser={IsUser}/> 
      </div>
    </>
  )
}
