import React from "react";
import Tweet from "../../views/TimeLine/Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { useState } from "react";
import { Card } from "reactstrap";
import SendMessage from "../Tweet/SendMessage";
import { useTweets } from "../../hooks/Twitter/useTweets";
function Reply() {
  const [activeTab, setActiveTab] = useState("tweets");
  // const { data: tweets, setData: setTweets, loading } = useReplies("get", true);
  const [open, setOpen] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Card className={styles.timeline}>
        <div className={styles.content}></div>
        <div className={styles.sendMessage}>
          <SendMessage setData={() => {}} />
        </div>
      </Card>
    </>
  );
}

export default Reply;
