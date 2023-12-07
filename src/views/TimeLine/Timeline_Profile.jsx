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

import { useInfo } from "../../contexts/InfoContext";
import { useTweets } from "../../hooks/Twitter/useTweets";
import { useGetChartData } from "../../hooks/GetChartData.jsx";



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
  const { courseChoosed } = useGetChartData();
  const infio = {
    "name": "John Doe",
    "age": 30,
    "email": "JohnDeo@gmail.com",
    "phone": "1234567890",
    "address": "1234 Main St, Anytown, USA",
    "token": "",
    "courseGroupID": "0",
    "courseGroupsListInContext": [],
    "courseChoosed": [
      {
        "complete_course_number": "2211037_02",
        "name": "آزمایشگاه سیستم عامل",
        "group_number": "02",
        "total_unit": 1,
        "practical_unit": 1,
        "capacity": 20,
        "registered_count": 17,
        "waiting_count": 0,
        "sex": "B",
        "emergency_deletion": false,
        "registration_limit": "مجاز برای مقطع کارشناسی، دانشکده مهندسی کامپیوتر، گروه آموزشی واحد آموزش کارشناسی، رشته مهندسی کامپیوتر،",
        "description": "nan",
        "presentation_type": "N",
        "teachers": [
          {
            "id": 4768,
            "name": "مرضیه شیخی",
            "teacher_image": "http://37.32.13.62/var/www/media/images/teachers_image/8414_LM4zdJq.png"
          }
        ],
        "exam_times": [
          {
            "date": "1402-10-20",
            "exam_start_time": "10:30:00",
            "exam_end_time": "12:30:00"
          }
        ],
        "course_times": [
          {
            "course_day": "4",
            "course_start_time": "10:30:00",
            "course_end_time": "12:30:00",
            "place": "دانشکده کامپیوتر کلاس شماره 121-",
            "course_time_representation": 2
          }
        ],
        "is_allowed": true,
        "added_to_calendar_count": 1
      },
      {
        "complete_course_number": "2211297_01",
        "name": "روش پژوهش و ارائه",
        "group_number": "01",
        "total_unit": 2,
        "practical_unit": 0,
        "capacity": 40,
        "registered_count": 38,
        "waiting_count": 0,
        "sex": "B",
        "emergency_deletion": true,
        "registration_limit": "مجاز برای مقطع کارشناسی، دانشکده مهندسی کامپیوتر، گروه آموزشی واحد آموزش کارشناسی، رشته مهندسی کامپیوتر،",
        "description": "nan",
        "presentation_type": "N",
        "teachers": [
          {
            "id": 4704,
            "name": "محمد عبداللهی ازگمی",
            "teacher_image": "http://37.32.13.62/var/www/media/images/teachers_image/6206_bmNTWu8.png"
          }
        ],
        "exam_times": [
          {
            "date": "1402-11-04",
            "exam_start_time": "14:00:00",
            "exam_end_time": "16:00:00"
          }
        ],
        "course_times": [
          {
            "course_day": "0",
            "course_start_time": "14:30:00",
            "course_end_time": "16:00:00",
            "place": "دانشکده کامپیوتر کلاس شماره 113",
            "course_time_representation": 7
          }
        ],
        "is_allowed": true,
        "added_to_calendar_count": 1
      }
    ],
    "shop": [],
    "loading": 0
  }
  console.log("inja:", courseChoosed)
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
                  <div
                    className={styles.chart}>
                    {lessons(
                      courseChoosed,
                      true,
                      null,
                      showLoading,
                      closeLoading
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
