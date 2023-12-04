import React, { useState, useEffect } from "react";
import styles from "../../assets/css/Admin/Admin_Searchbar.module.css";
import Admin_SearchField from "../../components/Admin/Admin_SearchField"
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
  console.log("Filtered Tweets are: ", filteredTweets);
  useEffect(() => {}, [searchQuery]);
  // console.log("Filtered Profiles: ", filteredProfiles);
  return (
    <>
    {/* <Card className={styles.main}> */}
      <Admin_SearchField setSearchQuery={setSearchQuery} />

      <div className={styles.searchBox}>
        {loading ? (
          <div></div>
        ) : 
        
        IsUser ?
        (
        //   filteredProfiles.map((item, index) => {
        //     return <UserSearchResponce res={item} key={index} />;
        //   })
            // filteredProfiles.length != 0 &&
            // filteredProfiles.map((prof) => (
            //     <User key={prof.id}
            //     User_data={prof}/>
            // ))
            filteredProfiles.length != 0 ?
            (
              filteredProfiles.map((prof) => (
              <User key={prof.id}
              User_data={prof}/>
              ))
            ):
            (
              <p className={styles.Nothing_Found}>کاربری یافت نشد</p>
            )
        ):
        (
            // filteredTweets.length != 0 &&
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
            // <div></div>
            filteredTweets.length != 0 ?
            (filteredTweets.results.map((tweet) => (
              <Tweet
                // className={styles.Tweets_Admin}
                key={tweet.id}
                tweet={tweet}
                setOpenComment={setOpen}
                // setTweets={setTweets}
                // style={{ color: 'red', fontSize: '16px' }}
              />
            ))):
            (
              <p className={styles.Nothing_Found}>پستی یافت نشد</p>
            )
        )}
      </div>
    {/* </Card> */}
    </>
  );
};

export default Admin_Searchbar;
