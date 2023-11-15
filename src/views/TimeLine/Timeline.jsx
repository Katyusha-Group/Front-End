import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { useState } from "react";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { useTweets } from "../../hooks/Twitter/useTweets";
const tweets = [
  {
    id: 1,
    text: "عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.",
    username: "jett White",
    name: "جت وایت",
  },
];

function Timeline() {
  const [activeTab, setActiveTab] = useState("tweets");
  const {data: tweets, loading} = useTweets("get", true)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if(loading){
    return <></>
  }

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
              {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </div>
          )}
          {activeTab === "media" && (
            <div className={styles.tweetsContainer}>
            </div>
          )}
        </div>
        <div className={styles.sendMessage}>
          <SendMessage/>
        </div>
      </Card>
    </>
  );
}

export default Timeline;
