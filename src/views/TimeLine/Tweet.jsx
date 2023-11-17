import React from "react";
import styles from "../../assets/css/Timeline/Tweet.module.css";
import { Button, ButtonGroup, Card } from "reactstrap";
import CommentModal from "../../components/Modal/Comments"
import { useState } from "react";
function Tweet({ tweet, setOpenComment }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className={styles.tweet}>
        <div className={styles.header}>
          <div className={styles.avatar}>{tweet.image}</div>
          <div className={styles.name}>{tweet.profile.name}</div>
        </div>
        {/* <div className={styles.reply}>
        سلام
      </div> */}
        <div className={styles.content}>
          <div className={styles.text}>{tweet.content}</div>
        </div>
        <div>
          <ButtonGroup
            orientation="vertical"
            variant="text"
            color="primary"
            aria-label=""
            className={styles.buttonContainer}
          >
            <button className={styles.button}>
              <span className={styles.icon_text}>{tweet.likes_count}</span>
              <i className={`tim-icons icon-heart-2 ${styles.icon}`}></i>
            </button>
            <button
              onClick={() => setOpen((x) => !x)}
              className={styles.button}
            >
              <span className={styles.icon_text}>{tweet.replies_count - 1}</span>
              <i className={`far fa-comment ${styles.icon}`}></i>
            </button>
          </ButtonGroup>
        </div>
      </Card>
      <CommentModal
        open={open}
        setOpen={() => {
          setOpen((x) => !x);
        }}
        data = {tweet}
      ></CommentModal>
    </>
  );
}

export default Tweet;
