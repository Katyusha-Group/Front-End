import React from "react";
import styles from "../../assets/css/Timeline/Tweet.module.css";

function Tweet({ tweet }) {
  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.name}>{tweet.name}</div>
        {/* <div className={styles.username}>@{tweet.username}</div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{tweet.text}</div>
      </div>
    </div>
  );
}

export default Tweet;