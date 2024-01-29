import React from "react";
import Tweet from "./Tweet";
import styles from "../../assets/css/Timeline/Timeline_Profile.module.css";
import { useState, useEffect } from "react";
import ModalProfileHeader from "../UserPorfile/ModalProfileHeader.jsx";
import CourseTimeline from "../../components/Timeline/Timeline";
import TeacherTimeline from "../../components/TeacherTimeline/TeacherTimeline";
import StudentTimeline from "./StudentTimeline.jsx";
import { useTweets } from "../../hooks/Twitter/useTweets";
import { useGetChartData } from "../../hooks/GetChartData.jsx";
import { useTweetBy } from "../../hooks/useTweetBy.jsx";
import { useLikedBy } from "../../hooks/useLikedBy.jsx";
import { useRepliedBy } from "../../hooks/useRepliedBy.jsx";
import { Spinner } from "reactstrap";
function Timeline({
  tabsList,
  profileData,
  profileData_loading,
  setProfileData,
  username,
  IsThisMe,
}) {
  if (profileData_loading) {
    return <></>;
  }
  const [mainData] = profileData.profile_type;
  const { courseChoosed } = useGetChartData(profileData.username);
  const { data: tweets, setData: setTweets, loading } = useTweets("get", true);
  const { filteredTweets, loading: tweetLoading } = useTweetBy(
    profileData.username
  );
  const { likedTweets, likedLoading } = useLikedBy(profileData.username);
  const { repliedTweets, replyLoading } = useRepliedBy(profileData.username);
  const [activeTab, setActiveTab] = useState("Main");
  const [showModal, setShowModal] = React.useState(false);
  const handleOpenModal_ProfileHeader = () => {
    setShowModal(true);
  };
  function handleCloseModal() {
    setShowModal(false);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (tabsList == undefined) {
    tabsList = [
      ["Tweets", "دنبال کننده ها"],
      ["media", "برای شما"],
    ];
  }
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
          <i
            className={`tim-icons icon-badge ${styles.profileIcon}`}
            onClick={handleOpenModal_ProfileHeader}
          />
        </div>

        <div className={`${styles.content} ${activeTab === "Main" ? styles.mainContent: ""}`}>
          {activeTab === "Tweets" &&
            (tweetLoading ? (
              <div className={styles.spinner}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div className={styles.tweetsContainer}>
                {filteredTweets.results.length == 0 && (
                  <div className={styles.notFound}>هیچ پستی یافت نشد.</div>
                )}
                {filteredTweets.results?.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                    setTweets={setTweets}
                  />
                ))}
              </div>
            ))}
          {activeTab === "Main" && (
            <div className={styles.mainContainer}>
              {mainData == "C" && (
                <div
                  style={{
                    display: mainData == "C" ? "block" : "none",
                    minWidth: "48rem",
                  }}
                >
                  <CourseTimeline show={profileData.username.split("_")[1]} />
                </div>
              )}
              {mainData == "T" && (
                <div
                  style={{
                    display: mainData == "T" ? "block" : "none",
                    minWidth: "48rem",
                  }}
                >
                  <TeacherTimeline show={profileData.username.split("_")[1]} />
                </div>
              )}
              {mainData == "U" && (
                <div
                  style={{
                    display: mainData == "U" ? "block" : "none",
                  }}
                >
                  <StudentTimeline courseChoosed={courseChoosed} />
                </div>
              )}
            </div>
          )}

          {activeTab === "Likes" &&
            (likedLoading ? (
              <div className={styles.spinner}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div className={styles.tweetsContainer}>
                {likedTweets.results == undefined ||
                  likedTweets.results == null ||
                  (likedTweets.results.length == 0 && (
                    <div className={styles.notFound}>هیچ پستی یافت نشد.</div>
                  ))}
                {likedTweets.results?.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    setOpenComment={setOpen}
                    setTweets={setTweets}
                  />
                ))}
              </div>
            ))}
          {activeTab === "Comments" &&
            repliedTweets &&
            (replyLoading ? (
              <div className={styles.spinner}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div className={styles.tweetsContainer}>
                {repliedTweets.results == undefined ||
                  repliedTweets.results == null ||
                  (repliedTweets.results.length == 0 && (
                    <div className={styles.notFound}>هیچ پستی یافت نشد.</div>
                  ))}
                {repliedTweets.results?.map((tweet) => {
                  return (
                    <Tweet
                      key={tweet.id}
                      tweet={tweet.parent_info}
                      setOpenComment={setOpen}
                      setTweets={setTweets}
                    />
                  );
                })}
              </div>
            ))}
          <ModalProfileHeader
            showModal={showModal}
            handleClose={handleCloseModal}
            username={username}
            profileData={profileData}
            setProfileData={setProfileData}
            IsThisMe={IsThisMe}
            profileData_loading={profileData_loading}
          />
        </div>
      </div>
    </>
  );
}

export default Timeline;
