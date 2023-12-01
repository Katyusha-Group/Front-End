import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline_Profile.module.css";
import * as style from "../../components/ModalLessons/ModalLesson.module.css";
import { useState, useEffect } from "react";
import { apis } from "../../assets/apis";

// import { useInfo } from "../../contexts/InfoContext";
import CourseTimeline from "../../components/Timeline/Timeline";
import TeacherTimeline from "../../components/TeacherTimeline/TeacherTimeline";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert.jsx";
// src\views\UserPage\Lessons.jsx
import { lessons } from "../UserPage/Lessons";
import { GETTweets } from "../../hooks/GETTweets";
import {
  dayOfWeek,
  timeStringToFloat,
  sexTostring,
  convertTime,
} from "../../global/functions";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { useTweets } from "../../hooks/Twitter/useTweets";
import { useGetChartData } from "../../hooks/GetChartData.jsx";

// const { info, changeInfo } = useInfo();

const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
// const [Tweets, setTweets] = useState(null);
// const [loading, setLoading] = useState(true);

const x = {
  complete_course_number: "2211299_03",
  name: "ریز پردازنده و زبان اسمبلی",
  group_number: "03",
  total_unit: 3,
  practical_unit: 0,
  capacity: 50,
  registered_count: 36,
  waiting_count: 0,
  sex: "B",
  emergency_deletion: true,
  registration_limit:
    "مجاز برای مقطع کارشناسی، دانشکده مهندسی کامپیوتر، گروه آموزشی واحد آموزش کارشناسی، رشته مهندسی کامپیوتر،",
  description: "nan",
  presentation_type: "N",
  teachers: [
    {
      id: 3609,
      name: "هاشم مشحون",
      teacher_image:
        "http://37.32.13.62/var/www/media/images/teachers_image/13_Y6rbyvu.png",
    },
  ],
  exam_times: [
    {
      date: "1402-11-04",
      exam_start_time: "14:00:00",
      exam_end_time: "16:00:00",
    },
  ],
  course_times: [
    {
      course_day: "1",
      course_start_time: "14:30:00",
      course_end_time: "16:00:00",
      place: "دانشکده کامپیوتر کلاس شماره 116",
      course_time_representation: 7,
    },
    {
      course_day: "3",
      course_start_time: "14:30:00",
      course_end_time: "16:00:00",
      place: "دانشکده کامپیوتر کلاس شماره 116",
      course_time_representation: 7,
    },
  ],
  is_allowed: true,
  added_to_calendar_count: 1,
};
let tabsList = [
  ["tweets", "دنبال کننده ها"],
  ["media", "برای شما"],
];

function Timeline({ tabsList, profileData }) {
  const info = useGetChartData();
  console.log("inja:", info)
  // const us = "yazdan_mastery";
  // useEffect(() => {
  //   showLoading();
  //   fetch((apis["profiles"] + `${us}` + `/calendar`), {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setTweets(data);
  //       closeLoading();
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
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
  const [mainData] = (profileData.profile_type);
  const username = profileData.username.split("_")[1];
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
  // console.log("Tweets are: " , tweets);
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
        <div className={styles.content}>
          {activeTab === "Main" && (
            <div className={styles.mainContainer}>
              {mainData == "C" && (
                <div
                  style={{
                    display: mainData == "C" ? "block" : "none",
                  }}
                >
                  {/* <Row>
                    <Col md="12"
                      className={`${style.profImg} p-0 mt-1`}>
                      <img
                        className={style.ModalProfessorImage}
                        src={profileData.image}
                        alt="professorImage"
                      />
                      <p
                        style={{
                          fontWeight: "bold",
                          textAlign: "right",
                          fontSize: "20px",
                          color: "#c7c1c1",
                          paddingRight: "30px",
                        }}
                      >
                        {x.name} ({x.group_number})
                      </p>
                    </Col>
                  </Row> */}
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
              {mainData == "U" || mainData == "V" && (
                <div
                  style={{
                    display: mainData == "U" ? "block" : "none",
                  }}
                >
                  <div
                    className={style.chart}>
                    {lessons(
                      info.Chart,
                      changeInfo,
                      true,
                      null,
                      showLoading,
                      closeLoading,
                      setModalData,
                      setShowLesson
                    )}
                  </div>
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
