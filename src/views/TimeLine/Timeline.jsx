import React, { useState, useEffect, useRef } from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { fetchData, useTweets } from "../../hooks/Twitter/useTweets";
import Spinner from "react-bootstrap/Spinner";

function Timeline() {
  const [activeTab, setActiveTab] = useState("tweets");
  const {
    data: tweets,
    setData: setTweets,
    loading,
    setLoading,
  } = useTweets("get", true);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1); // Track the current page for pagination
  const containerRef = useRef(null); // Reference to the tweets container div

  useEffect(() => {
    // Add scroll event listener on mount
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener on unmount
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: Timeline.jsx:28 ~ Timeline ~ loading:", loading);
  }, [loading]);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;

    console.log("🚀 ~ file: Timeline.jsx:42 ~ handleScroll ~ scrollTop + containerHeight === scrollHeight:", scrollTop + containerHeight)
    console.log("🚀 ~ file: Timeline.jsx:42 ~ handleScroll ~ scrollHeigh:", scrollHeight)
    if (scrollTop + containerHeight > scrollHeight-1) {
      loadMoreTweets();
    }
  };

  const loadMoreTweets = async () => {
    console.log(
      "🚀 ~ file: Timeline.jsx:45 ~ loadMoreTweets ~ loading:",
      loading
    );
    if (loading) return; // Prevent duplicate requests while loading
    fetchData(setLoading, setTweets, 1, false);
  };

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
            <div className={styles.tweetsContainer} ref={containerRef}>
              {tweets.map((tweet,index) => (
                <Tweet
                  key={index}
                  tweet={tweet}
                  setOpenComment={setOpen}
                  setTweets={setTweets}
                />
              ))}
              {loading && (
                <div>
                  <Spinner animation="border" variant="primary" />
                </div>
              )}
            </div>
          )}
          {activeTab === "media" && (
            <div className={styles.tweetsContainer} ref={containerRef}>
              {tweets.map((tweet,index) => (
                <Tweet
                  key={index}
                  tweet={tweet}
                  setOpenComment={setOpen}
                  setTweets={setTweets}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.sendMessage}>
          <SendMessage setData={setTweets} />
        </div>
      </Card>
    </>
  );
}

export default Timeline;
