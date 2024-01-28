import React from "react";
import Tweet from "../../views/TimeLine/Tweet";
import styles from "../../assets/css/Timeline/Reply.module.css";
import { useState } from "react";
import { Card } from "reactstrap";
import SendMessage from "../Tweet/SendMessage";
import { useParams } from "react-router-dom";
function Reply() {
  const [activeTab, setActiveTab] = useState("tweets");
  // const { data: tweets, setData: setTweets, loading } = useReplies("get", true);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Card className={styles.timeline}>
        <div className={styles.content}>
          <Tweet tweet={tweet} setOpenComment={setOpen} setTweets={setTweets} />
        </div>
        <div className={styles.sendMessage}>
          <SendMessage setData={() => {}} />
        </div>
      </Card>
    </>
  );
}

export default Reply;
