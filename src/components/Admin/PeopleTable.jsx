import React from 'react';
import { useState } from "react";
// import SearchBox from '../SearchBox/SearchBox'
import { Input } from "reactstrap";
import * as styles from "../../assets/css/admin/People_Table.module.css";
import User from './User';

let tabsList = [
  ["Users", "کاربرها"],
  ["Posts", "پست ها"],
];

export default function PeopleTable() {
  const [activeTab, setActiveTab] = useState("Users");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    // <div>PeopleTable</div>
    <>
      <div className={styles.Users_List}>
      <Input/>
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

        {activeTab === "Users" && (
          <div className={styles.Users_Container}>
            {/* {tweets.map((tweet) => (
              <Tweet key={tweet.id}
              tweet={tweet}
              setOpenComment={setOpen}
              setTweets={setTweets}/>
            ))} */}
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
          </div>
        )}
        {activeTab === "Posts" && (
          <div className={styles.tweetsContainer}>
            {/* {tweets.map((tweet) => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                setOpenComment={setOpen}
                setTweets={setTweets}
              />
            ))} */}
          </div>
        )}
      </div>
    </>
  )
}
