import React from 'react';
import { useState } from "react";
// import SearchBox from '../SearchBox/SearchBox'
import { Input } from "reactstrap";
import * as styles from "../../assets/css/admin/People_Table.module.css";
import { useTweets } from "../../hooks/Twitter/useTweets";
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
    <>
      <div className={styles.Users_List}>
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
        <Admin_Searchbar IsUser={IsUser}/> 
      </div>
    </>
  )
}
