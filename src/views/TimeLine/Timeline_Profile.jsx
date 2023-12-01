import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline_Profile.module.css";
import * as style from "../../components/ModalLessons/ModalLesson.module.css";
import { useState } from "react";
import CourseTimeline from "../../components/Timeline/Timeline";
import TeacherTimeline from "../../components/TeacherTimeline/TeacherTimeline";
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
const Tweets = [
  // Add more tweets as needed
  {
    id: 8,
    text: "من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی",
    username: "white Jett",
    profile: { name: "وایت جت" },
  },
  // Add more tweets as needed
];
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
  const [mainData] = (profileData.username[0]);
  const username = profileData.username.split("_")[1];
  console.log("profile: ", username);
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
            <div className={styles.tweetsContainer}>
              {/* Render media content here */}
              <div
                style={{
                  display: mainData == "C" ? "block" : "none",
                }}
              >
                <CourseTimeline show={username} />
              </div>
              {/* <div
                style={{
                  display: mainData == "T" ? "block" : "none",
                }}
              >
                <TeacherTimeline show={props} />
              </div> */}
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
