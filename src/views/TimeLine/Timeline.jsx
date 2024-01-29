import React, { useState, useEffect, useRef } from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { Card } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage";
import { fetchData, useTweets } from "../../hooks/Twitter/useTweets";
import Spinner from "react-bootstrap/Spinner";
import {
  fetchData as getForYou,
  useTweetsForYou,
} from "../../hooks/Twitter/useTweetsForYou";
import { useSendTweets } from "../../hooks/Twitter/sendTweets";
const fetchNormalTweets = "FETCH_NORMAL_TWEETS";
const fetchForYouTweets = "FETCH_FOR_YOU_TWEETS";
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
  const containerRef = useRef(null); // Reference to the tweets container div
  const containerAboutYou = useRef(null); // Reference to the tweets container div
  useEffect(() => {
    console.log("🚀 ~ CommentModal ~ data:", tweets)
  }, [tweets])
  var number = 2;
  var forYouNum = 2;
  var loadingScroll = false;
  var loadingScrollForYou = false;
  useEffect(() => {
    containerRef.current.addEventListener("scroll", () => {
      handleScroll(fetchNormalTweets, containerRef);
    });
    containerAboutYou.current.addEventListener("scroll", () => {
      handleScroll(fetchForYouTweets, containerAboutYou);
    });

    return () => { };
  }, []);

  const handleScroll = (funcCaller, containerRefIn) => {
    const container = containerRefIn.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;

    if (scrollTop + containerHeight > scrollHeight - 1) {
      if (funcCaller === fetchNormalTweets) loadMoreTweets();
      if (funcCaller === fetchForYouTweets) loadMoreForYouTweets();
    }
  };

  const loadMoreTweets = async () => {
    if (loadingScroll) return; // Prevent duplicate requests while loading
    loadingScroll = true;
    var data = await fetchData(
      setLoading,
      setTweets,
      number,
      false,
      info,
      setInfo
    );
    loadingScroll = false;
    number += 1;
  };

  const loadMoreForYouTweets = async () => {
    if (loadingScroll) return; // Prevent duplicate requests while loading
    loadingScrollForYou = true;
    var data = await getForYou(
      setLoadingForYou,
      setTweetsForYou,
      forYouNum,
      false
    );
    loadingScrollForYou = false;
    forYouNum += 1;
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

        <div
          className={`${styles.content} ${styles.tweetsContainer}`}
          ref={containerRef}
          style={{ display: activeTab === "tweets" ? "flex" : "none" }}
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

        <div
          className={`${styles.content} ${styles.tweetsContainer}`}
          ref={containerAboutYou}
          style={{ display: activeTab === "media" ? "flex" : "none" }}
        >
          {tweetsForYou.results.map((tweet, index) => (
            <Tweet
              key={index}
              tweet={tweet}
              setOpenComment={setOpen}
              setTweets={setTweets}
            />
          ))}
          {loadingForYou && (
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

        <div className={styles.sendMessage}>
          <SendMessage setData={setTweets} fetchData={useSendTweets} />
        </div>
      </Card>
    </>
  );
}

export default Timeline;
