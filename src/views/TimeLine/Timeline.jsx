import React, { useState, useEffect, useRef } from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { useTweets } from "../../hooks/Twitter/useTweets";

function Timeline() {
  const [activeTab, setActiveTab] = useState("tweets");
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
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

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;

    if (scrollTop + containerHeight === scrollHeight) {
      // When scrolled to the end, load more tweets
      loadMoreTweets();
    }
  };

  const loadMoreTweets = async () => {
    if (loading) return; // Prevent duplicate requests while loading

    try {
      const nextPage = page + 1;
      const { data } = await useTweets("get", true, nextPage);

      setPage(nextPage);
      setTweets((prevData) => ({
        ...prevData,
        results: [...prevData.results, ...data.results],
      }));
    } catch (error) {
      console.log("Error loading more tweets:", error);
    }
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
              {loading ? (
                <></>
              ) : (
                tweets.results.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                    setTweets={setTweets}
                  />
                ))
              )}
            </div>
          )}
          {activeTab === "media" && (
            <div className={styles.tweetsContainer} ref={containerRef}>
              {loading ? (
                <></>
              ) : (
                tweets.results.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                    setTweets={setTweets}
                  />
                ))
              )}
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
