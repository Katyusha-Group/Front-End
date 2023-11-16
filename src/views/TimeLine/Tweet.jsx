import React from "react";
import styles from "../../assets/css/Timeline/Tweet.module.css";
import { Card } from "reactstrap";

function Tweet({ tweet }) {
  return (
    <Card className={styles.tweet}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.name}>{tweet.name}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{tweet.text}</div>
      </div>
      
    </Card>
  );
}

export default Tweet;
