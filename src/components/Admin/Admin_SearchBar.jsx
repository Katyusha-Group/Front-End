import React, { useState, useEffect } from "react";
import styles from "../../assets/css/admin/Admin_Searchbar.module.css";
import Admin_SearchField from "../../components/Admin/Admin_SearchField"
import {Link} from 'react-router-dom'
import { useAllProfiles } from "../../hooks/useSearchprofile";
import { useSearchTweet } from "../../hooks/useSearchTweet";
import User from "./User";
import Tweet from '../../views/TimeLine/Tweet';

const Admin_Searchbar = ({IsUser}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  const { filteredTweets, loading2 } = useSearchTweet(searchQuery);
  const [open, setOpen] = useState(false);
  useEffect(() => {}, [searchQuery]);

  return (
    <>
      <Admin_SearchField setSearchQuery={setSearchQuery} />

      <div className={styles.searchBox}>
        {loading ? (
          <div></div>
        ) : 
        
        IsUser ?
        (
            filteredProfiles.length != 0 ?
            (
              filteredProfiles.map((prof) => (
                <Link to={"/profile/" + prof.username}>
                    <User key={prof.id}
                      User_data={prof}
                    />
                </Link>
              ))
            ):
            (
              <p className={styles.Nothing_Found}>کاربری یافت نشد</p>
            )
        ):
        (
            filteredTweets.length != 0 ?
            (filteredTweets.results.map((tweet) => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                setOpenComment={setOpen}
              />
            ))):
            (
              <p className={styles.Nothing_Found}>پستی یافت نشد</p>
            )
        )}
      </div>
    </>
  );
};

export default Admin_Searchbar;
