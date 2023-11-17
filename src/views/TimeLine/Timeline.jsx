import React from 'react';
import Tweet from './Tweet';
import styles from '../../assets/css/Timeline/Timeline.module.css';
import * as style from "../../components/ModalLessons/ModalLesson.module.css";
import { useState } from 'react';
import { GETTweets } from '../../hooks/GETTweets';
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
const Tweets = [
  { id: 1, text: 'عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.', username: 'jett White', name: 'جت وایت' },
  { id: 2, text: 'من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی', username: 'white Jett', name: 'وایت جت' },
  // Add more tweets as needed
  { id: 3, text: 'عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.', username: 'jett White', name: 'جت وایت' },
  { id: 4, text: 'من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی', username: 'white Jett', name: 'وایت جت' },
  // Add more tweets as needed
  { id: 5, text: 'عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.', username: 'jett White', name: 'جت وایت' },
  { id: 6, text: 'من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی', username: 'white Jett', name: 'وایت جت' },
  // Add more tweets as needed
  { id: 7, text: 'عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.', username: 'jett White', name: 'جت وایت' },
  { id: 8, text: 'من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی', username: 'white Jett', name: 'وایت جت' },
  // Add more tweets as needed
];
const x = {
  "complete_course_number": "2211299_03",
  "name": "ریز پردازنده و زبان اسمبلی",
  "group_number": "03",
  "total_unit": 3,
  "practical_unit": 0,
  "capacity": 50,
  "registered_count": 36,
  "waiting_count": 0,
  "sex": "B",
  "emergency_deletion": true,
  "registration_limit": "مجاز برای مقطع کارشناسی، دانشکده مهندسی کامپیوتر، گروه آموزشی واحد آموزش کارشناسی، رشته مهندسی کامپیوتر،",
  "description": "nan",
  "presentation_type": "N",
  "teachers": [
    {
      "id": 3609,
      "name": "هاشم مشحون",
      "teacher_image": "http://37.32.13.62/var/www/media/images/teachers_image/13_Y6rbyvu.png"
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
      "course_day": "1",
      "course_start_time": "14:30:00",
      "course_end_time": "16:00:00",
      "place": "دانشکده کامپیوتر کلاس شماره 116",
      "course_time_representation": 7
    },
    {
      "course_day": "3",
      "course_start_time": "14:30:00",
      "course_end_time": "16:00:00",
      "place": "دانشکده کامپیوتر کلاس شماره 116",
      "course_time_representation": 7
    }
  ],
  "is_allowed": true,
  "added_to_calendar_count": 1
}
let tabsList = [
  ["tweets", "دنبال کننده ها"],
  ["media", "برای شما"]
];

function Timeline({ tabsList }) {
  // console.log("Tabs are: " + tabsList);
  const [activeTab, setActiveTab] = useState('Main');
  // const {Tweets, setTweets, loading} = GETTweets();
  // setTweets(tweets);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (tabsList == undefined) {
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
          {tabsList.map((entry, index) => (
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

        {activeTab === 'Tweets' && (
          <div className={styles.tweetsContainer}>
            {Tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        )}
        <div className={styles.content}>
          {activeTab === 'Main' && (
            <div className={styles.tweetsContainer}>
              {/* Render media content here */}
              <div>
                <Row>
                  <Col md="5">
                    <Card className={style.ModalLessonDataCard1}>
                      <Row>
                        <Col md="4"
                          className="p-0">
                          <img
                            className={style.ModalProfessorImage}
                            src={x.teachers[0].teacher_image}
                            alt="professorImage"
                          />
                        </Col>
                        <Col md="8"
                          className="text-right p-0 mr-0"
                        >
                          <p className={style.courseTitle}>استاد&nbsp;
                            <span className={style.courseText}>
                              {x.teachers.map((y) => y.name).join(" , ")}</span>
                          </p>

                          <p className={`${style.courseTitle}`}
                            style={{ display: "flex" }}>کد درس&nbsp;
                            <span
                              className={style.courseText}
                              style={{ direction: "ltr" }}
                            >
                              {x.complete_course_number}
                            </span>
                          </p>
                          <p className={style.courseTitle}>
                            جنسیت&nbsp;
                            <span className={style.courseText}>
                              {sexTostring(x.sex)}
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Card>

                    <Card className={style.ModalLessonDataCard2}>
                      <Col className="text-right">
                        <p className={style.courseTitleNotInline}>زمان برگزاری</p>
                        <span className={style.courseText}>
                          {x.course_times.map((t) => (
                            <text>{dayOfWeek(t.course_day)} </text>
                          ))}

                          {" / "}
                        </span>
                        <text className={style.courseText}>
                          {convertTime(x.course_times[0].course_start_time)}{" "}
                          تا{" "}
                          {convertTime(x.course_times[0].course_end_time)}
                        </text>
                      </Col>
                      {x.exam_times.length === 0 ? null : (
                        <Col className="text-right">
                          <p className={style.courseTitleNotInline}>
                            زمان آزمون پایانی
                          </p>
                          <text dir="ltr" className={style.courseText}>
                            {"تاریخ"}
                          </text>{" "}
                          <text className={style.courseText}
                            style={{ direction: "ltr" }}>
                            {x.exam_times[0].date}
                          </text>
                          <text className={style.courseText}>
                            {" / "}
                            {convertTime(
                              x.exam_times[0].exam_start_time
                            )}{" "}
                            تا {convertTime(x.exam_times[0].exam_end_time)}
                          </text>
                        </Col>
                      )}
                    </Card>
                  </Col>
                  <Col md="7">
                    <Card className={`${style.ModalLessonDataCard3} text-right`}>
                      <p className={style.courseTitle}>
                        ثبت نام
                        شده&nbsp;
                        <text className={style.courseText}>
                          {x.registered_count} از {x.capacity}
                        </text>
                      </p>
                      <p className={style.courseTitle}>
                        تعداد در صف
                        انتظار&nbsp;
                        <text className={style.courseText}>
                          {x.waiting_count} {"نفر"}
                        </text>
                      </p>
                      <p className={style.courseTitle}>
                        تعداد اخذ شده در کاتیوشا&nbsp;
                        <text className={style.courseText}>
                          {x.added_to_calendar_count} {"نفر"}
                        </text>
                      </p>
                      <p className={style.courseTitle}>
                        تعداد کل واحد ها&nbsp;
                        <text className={style.courseText}>
                          {x.total_unit} {"واحد"}</text>
                      </p>
                      <p className={style.courseTitle}>
                        تعداد واحد های عملی&nbsp;
                        <text className={style.courseText}>
                          {x.practical_unit}&nbsp;{"واحد"}
                        </text>
                      </p>
                      <p className={style.courseTitle}>
                        قابل اخذ بودن این درس برای
                        شما&nbsp;
                        <text className={style.courseText}>
                          {x.is_allowed ? "بله" : "خیر"}
                        </text>
                      </p>

                      {x.description === "nan" ? null : (
                        <Row>
                          <Col className="text-right" md="10">
                            <p className={style.courseTitle}>
                              توضیحات&nbsp;
                              <text className={style.courseText}>
                                {x.description}
                              </text>
                            </p>
                          </Col>
                        </Row>
                      )}
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          )}
          {activeTab === 'Tweets' && (
            <div className={styles.tweetsContainer}>
              {Tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </div>
          )}
          {activeTab === 'Likes' && (
            <div className={styles.tweetsContainer}>
              {Tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </div>
          )}
          {activeTab === 'Comments' && (
            <div className={styles.tweetsContainer}>
              {Tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Timeline;