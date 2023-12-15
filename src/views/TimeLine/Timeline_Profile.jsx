import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline_Profile.module.css";
import * as style from "../../components/ModalLessons/ModalLesson.module.css";
import { useState, useEffect } from "react";
import { apis } from "../../assets/apis";

// import { useInfo } from "../../contexts/InfoContext";
import CourseTimeline from "../../components/Timeline/Timeline";
import TeacherTimeline from "../../components/TeacherTimeline/TeacherTimeline";
import StudentTimeline from "./StudentTimeline.jsx";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert.jsx";
// src\views\UserPage\Lessons.jsx
import { lessons } from "../UserPage/Lessons";
import { GETTweets } from "../../hooks/GETTweets";
import { useTweets } from "../../hooks/Twitter/useTweets";
import { useGetChartData } from "../../hooks/GetChartData.jsx";


const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

function Timeline({ tabsList, profileData }) {
  const username = profileData.username.split("_")[1];
  const [mainData] = (profileData.profile_type);
  const username1 = profileData.username;
  const { courseChoosed } = useGetChartData(username1);
  const [activeTab, setActiveTab] = useState("Main");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (tabsList == undefined) {
    tabsList = [
      ["Tweets", "دنبال کننده ها"],
      ["media", "برای شما"],
    ];
  }
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.tabs}>
          {tabsList.map((entry, index) => (
            <button
              key={index}
              className={activeTab === entry[0] ? styles.activeTab : styles.tab}
              onClick={() => handleTabClick(entry[0])}
            >
              {entry[1]}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {activeTab === "Tweets" && (
            <div className={styles.tweetsContainer}>
              {tweets.results.map((tweet) => (
                <Tweet key={tweet.id}
                  tweet={tweet}
                  setOpenComment={setOpen}
                  setTweets={setTweets} />
              ))}
            </div>
          )}
          {activeTab === "Main" && (
            <div className={styles.mainContainer}>
              {mainData == "C" && (
                <div
                  style={{
                    display: mainData == "C" ? "block" : "none",
                  }}
                >
                  <CourseTimeline show={username} />
                </div>
              )}
              {mainData == "T" && (
                <div
                  style={{
                    display: mainData == "T" ? "block" : "none",
                  }}
                >
                  <TeacherTimeline show={username} />
                </div>)}
              {mainData == "U" && (
                <div
                  style={{
                    display: mainData == "U" ? "block" : "none",
                  }}
                >
                  <StudentTimeline
                    courseChoosed={courseChoosed}
                    showLoading={showLoading}
                    closeLoading={closeLoading}
                  />
                  {/* <TeacherTimeline show={username} /> */}
                </div>)}
            </div>
          )}
          {activeTab === "Likes" && (
            <div className={styles.tweetsContainer}>
              {tweets.results.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  setOpenComment={setOpen}
                  setTweets={setTweets}
                />
              ))}
            </div>
          )}
          {activeTab === "Comments" && (
            <div className={styles.tweetsContainer}>
              {tweets.results.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  setOpenComment={setOpen}
                  setTweets={setTweets}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Timeline;