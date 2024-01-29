import React, { useState, useEffect } from "react";
import styles from "../../assets/css/admin/Admin_Searchbar.module.css";
import Admin_SearchField from "../../components/Admin/Admin_SearchField";
import { Link } from "react-router-dom";
import { useAllProfiles } from "../../hooks/useSearchprofile";
import { useSearchTweet } from "../../hooks/useSearchTweet";
import User from "./User";
import Tweet from "../../views/TimeLine/Tweet";
import Spinner from "react-bootstrap/Spinner";

const Admin_Searchbar = ({ IsUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  const { filteredTweets, setFilteredTweets,loading: loading2 } = useSearchTweet(searchQuery);
  const [open, setOpen] = useState(false);
  useEffect(() => {}, [searchQuery]);

  return (
    <>
      <Admin_SearchField setSearchQuery={setSearchQuery} />

      <div className={styles.searchBox}>
        {loading && loading2 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : IsUser ? (
          filteredProfiles.length != 0 ? (
            filteredProfiles.map((prof, index) => (
              <Link to={"/profile/" + prof.username} key={index}>
                <User User_data={prof} />
              </Link>
            ))
          ) : (
            <p className={styles.Nothing_Found}>کاربری یافت نشد</p>
          )
        ) : loading2 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : filteredTweets.length != 0 ? (
          filteredTweets.results.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} setTweets={setFilteredTweets} setOpenComment={setOpen} />
          ))
        ) : (
          <p className={styles.Nothing_Found}>پستی یافت نشد</p>
        )}
      </div>
    </>
  );
};

export default Admin_Searchbar;
