import React from "react";
import styles from "../../assets/css/Timeline/Tweet.module.css";
import { Button, ButtonGroup, Card } from "reactstrap";
import { Card } from "reactstrap";
function Tweet({ tweet }) {
  return (
    <Card className={styles.tweet}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.name}>{tweet.name}</div>
      </div>
      <div className={styles.reply}>
        سلام
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{tweet.text}</div>
      </div>
      <div>
        <ButtonGroup orientation="vertical" variant="text" color="primary" aria-label="" className={styles.buttonContainer}>
          <button className={styles.button}><span className={styles.icon_text}>500</span><i className={`tim-icons icon-heart-2 ${styles.icon }`}></i></button>
          <button className={styles.button}><span className={styles.icon_text}>500</span><i className={`far fa-comment ${styles.icon }`}></i></button>
        </ButtonGroup>
      </div>
    </Card>
  );
}

export default Tweet;
