import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { useState } from "react";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { useTweets } from "../../hooks/Twitter/useTweets";
import CommentModal from "../../components/Modal/Comments";
import { useEffect } from "react";
function Timeline() {
  const [activeTab, setActiveTab] = useState("tweets");
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
  const [open, setOpen] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <Card className={styles.timeline}>
        <div className={styles.tabs}>
          <button
            className={activeTab === "tweets" ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick("tweets")}
          >
            دنبال کننده ها
          </button>
          <button
            className={activeTab === "media" ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick("media")}
          >
            برای شما
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === "tweets" && (
            <div className={styles.tweetsContainer}>
              {loading ? (
                <></>
              ) : (
                tweets.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                  />
                ))
              )}
            </div>
          )}
          {activeTab === "media" && (
            <div className={styles.tweetsContainer}></div>
          )}
        </div>
        <div className={styles.sendMessage}>
          <SendMessage setData={setTweets} />
        </div>
      </Card>
      {/* <CommentModal
        open={open}
        setOpen={() => {
          setOpen((x) => !x);
        }}
      ></CommentModal> */}
    </>
  );
}

export default Timeline;
