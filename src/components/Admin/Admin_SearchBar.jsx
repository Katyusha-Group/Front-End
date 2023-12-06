import React, { useState, useEffect } from "react";
import styles from "../../assets/css/Admin/Admin_Searchbar.module.css";
import Searchfield from "../../views/Searchfield"
import UserSearchResponce from "../../views/UserSearchResponce";
import { Card } from "reactstrap";
import { useAllProfiles } from "../../hooks/useSearchprofile";
import { useSearchTweet } from "../../hooks/useSearchTweet";
import axios from "axios";
import { set } from "lodash";
import { use } from "chai";
import User from "./User";
import Tweet from '../../views/TimeLine/Tweet';

const Admin_Searchbar = ({IsUser}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  const { filteredTweets, loading2 } = useSearchTweet(searchQuery);
  useEffect(() => {}, [searchQuery]);
  console.log("Filtered Profiles: ", filteredProfiles);
  return (
    <>
    {/* <Card className={styles.main}> */}
      <Searchfield setSearchQuery={setSearchQuery} />

      <div className={styles.searchBox}>
        {loading ? (
          <div></div>
        ) : 
        
        IsUser ?
        (
        //   filteredProfiles.map((item, index) => {
        //     return <UserSearchResponce res={item} key={index} />;
        //   })
            filteredProfiles.map((prof) => (
                <User key={prof.id}
                User_data={prof}/>
            ))
        ):
        (
            // filteredTweets.results.map((tweet) => (
            //   <Tweet
            //     // className={styles.Tweets_Admin}
            //     key={tweet.id}
            //     tweet={tweet}
            //     setOpenComment={setOpen}
            //     // setTweets={setTweets}
            //     // style={{ color: 'red', fontSize: '16px' }}
            //   />
            // ))
            <div></div>
        )}
      </div>
    {/* </Card> */}
    </>
  );
};

export default Admin_Searchbar;
