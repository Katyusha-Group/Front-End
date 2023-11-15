import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline.module.css";
import { useState } from "react";
import { Card } from "reactstrap";

const tweets = [
  {
    id: 1,
    text: "عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.",
    username: "jett White",
    name: "جت وایت",
  },
];

let tabsList = [
  ["tweets", "دنبال کننده ها"],
  ["media", "برای شما"]
];

function Timeline({tabsList}) {
  console.log("Tabs are: " + tabsList);
  const [activeTab, setActiveTab] = useState('tweets');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (tabsList == undefined)
  {
    tabsList = [
      ["Tweets", "دنبال کننده ها"],
      ["media", "برای شما"]
    ];
  }

  return (
    <>
    <div className={styles.timeline}>
      <div className={styles.tabs}>
        {/* <button
          className={activeTab === 'Main' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('Main')}
        >
          صفحه اصلی
        </button>
        <button
          className={activeTab === 'Tweets' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('Tweets')}
        >
          پست ها
        </button>
        <button
          className={activeTab === 'Likes' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('Likes')}
        >
          Likes
        </button>
        <button
          className={activeTab === 'Comments' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('Comments')}
        >
          Comments
        </button> */}
        {tabsList.map ( (entry, index) => (
            <button
              key={index}
              className={activeTab === entry[0] ? styles.activeTab : styles.tab}
              onClick={() => handleTabClick(entry[0])}
            >
              {entry[1]}
            </button>
          ))
        }
      </div>
      <div className={styles.content}>
        {activeTab === 'Main' && (
          <div className={styles.tweetsContainer}>
            {/* Render media content here */}
          </div>
        )}
        {activeTab === 'Tweets' && (
          <div className={styles.tweetsContainer}>
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        )}
        {activeTab === 'Likes' && (
          <div className={styles.tweetsContainer}>
            {/* Render media content here */}
          </div>
        )}
        {activeTab === 'Comments' && (
          <div className={styles.tweetsContainer}>
            {/* Render media content here */}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Timeline;
