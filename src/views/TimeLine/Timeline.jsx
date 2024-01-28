import React, { useState, useEffect, useRef } from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { fetchData, useTweets } from "../../hooks/Twitter/useTweets";
import Spinner from "react-bootstrap/Spinner";
import { useTweetsForYou } from "../../hooks/Twitter/useTweetsForYou";

import { useSendTweets } from "../../hooks/Twitter/sendTweets";
function Timeline() {
  const [activeTab, setActiveTab] = useState("tweets");
  const {
    data: tweets,
    setData: setTweets,
    loading,
    setLoading,
    info,
    setInfo,
  } = useTweets("get", true);
  const {
    data: tweetsForYou,
    setData: setTweetsForYou,
    loading: loadingForYou,
    setLoading: setLoadingForYou,
  } = useTweetsForYou("get", true);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0); // Track the current page for pagination
  const containerRef = useRef(null); // Reference to the tweets container div
  var number = 1;
  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;

    if (scrollTop + containerHeight > scrollHeight - 1) {
      loadMoreTweets();
    }
  };

  const loadMoreTweets = async () => {
    if (loading) return; // Prevent duplicate requests while loading

    fetchData(setLoading, setTweets, number, false, info, setInfo);
    number += 1;
    setPage((x) => x + 1);
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
        {activeTab === "tweets" && (
          <div
            className={`${styles.content} ${styles.tweetsContainer}`}
            ref={containerRef}
          >
            {tweets.results.map((tweet, index) => (
              <Tweet
                key={index}
                tweet={tweet}
                setOpenComment={setOpen}
                setTweets={setTweets}
              />
            ))}
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            )}
          </div>
        )}

        {activeTab === "media" && (
          <div className={styles.tweetsContainer} ref={containerRef}>
            {tweetsForYou.results.map((tweet, index) => (
              <Tweet
                key={index}
                tweet={tweet}
                setOpenComment={setOpen}
                setTweets={setTweets}
              />
            ))}
          </div>
        )}
        <div className={styles.sendMessage}>
          <SendMessage setData={setTweets} fetchData={useSendTweets} />
        </div>
      </Card>
    </>
  );
}

export default Timeline;
