import React, { useEffect } from "react";
import styles from "../../assets/css/Timeline/Tweet.module.css";
import { Button, ButtonGroup, Card } from "reactstrap";
import CommentModal from "../../components/Modal/Comments";
import { likes } from "../../hooks/Twitter/likes";
import { useState } from "react";
import IsThisMe_Function from "../UserPorfile/IsThisMe_Function";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { deleteTweet } from "../../hooks/Twitter/deleteTweets";
import Replies from "../../components/Timeline/ReplyModal";
import { Report } from "../../hooks/Twitter/Report";
import ModalReport from "../../components/ModalReport/ModalReport";
function Tweet({ tweet, setOpenComment, setTweets, direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [open, setOpen] = useState(false);
  const [openReplies, setOpenReplies] = useState(false);
  const [like, setLike] = useState(tweet.liked_by_me);
  const isThisMeBool = IsThisMe_Function(tweet.profile.username);
  const [link, setLink] = useState("");
  const [locallike, setLocallike] = useState(0);

  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal_Report = () => {
    setShowModal(true);
    console.log("Modal is opened");
  };
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      <Card className={styles.tweet}>
        <Dropdown
          isOpen={dropdownOpen}
          className={styles.moreInfo}
          toggle={toggle}
          direction={direction}
          size="sm"
        >
          <DropdownToggle style={{ background: "initial" }} caret>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 96 96"
              fill="none"
            >
              <g clip-path="url(#clip0_135_5)">
                <path
                  d="M24 40C19.6 40 16 43.6 16 48C16 52.4 19.6 56 24 56C28.4 56 32 52.4 32 48C32 43.6 28.4 40 24 40ZM72 40C67.6 40 64 43.6 64 48C64 52.4 67.6 56 72 56C76.4 56 80 52.4 80 48C80 43.6 76.4 40 72 40ZM48 40C43.6 40 40 43.6 40 48C40 52.4 43.6 56 48 56C52.4 56 56 52.4 56 48C56 43.6 52.4 40 48 40Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_135_5">
                  <rect width="96" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem
              disabled={tweet.reported_by_me || isThisMeBool}
              className={styles.dropDown}
              onClick={handleOpenModal_Report}
            >
              ریپورت
            </DropdownItem>
            {
              <DropdownItem
                className={styles.dropDown}
                disabled={!isThisMeBool}
                onClick={() => {
                  setTweets((x) => {
                    let temp = x.results.filter((y) => y.id !== tweet.id);
                    return { results: temp };
                  });
                  deleteTweet(tweet.id);
                }}
              >
                حذف
              </DropdownItem>
            }
          </DropdownMenu>
          {showModal && (
            <ModalReport
              id={tweet.id}
              showModal={showModal}
              handleClose={handleCloseModal}
            />
          )}
        </Dropdown>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img
              className={styles.avatarimg}
              src={tweet.profile.image}
              alt=""
            />
          </div>
          <div className={styles.name}>{tweet.profile.name}</div>
        </div>
        {/* <div className={styles.reply}>
        سلام
      </div> */}
        <div
          className={styles.content}
          onClick={() => {
            setLink(tweet.children_link);
            setOpenReplies(true);
          }}
        >
          <div className={styles.text}>{tweet.content}</div>
        </div>
        <div>
          <ButtonGroup
            orientation="vertical"
            variant="text"
            color="primary"
            aria-label=""
            className={styles.buttonContainer}
          >
            <button
              // className={styles.button}
              className={like ? styles.button2 : styles.button}
              onClick={() => {
                setLike(!like);
                likes(tweet.id);
                like ? setLocallike(-1) : setLocallike(1);
              }}
            >
              <span className={styles.icon_text}>
                {tweet.likes_count + locallike}
                {/* {like? tweet.likes_count+1 : tweet.likes_count} */}
              </span>
              <i className={`tim-icons icon-heart-2 ${styles.icon}`}></i>
            </button>
            <button
              onClick={() => setOpen((x) => !x)}
              className={styles.button}
            >
              <span className={styles.icon_text}>{tweet.children_count}</span>
              <i className={`far fa-comment ${styles.icon}`}></i>
            </button>
          </ButtonGroup>
        </div>
      </Card>
      <CommentModal
        open={open}
        setOpen={() => {
          setOpen((x) => !x);
        }}
        data={tweet}
        setTweets={setTweets}
      ></CommentModal>
      <Replies
        open={openReplies}
        setOpen={() => {
          setOpenReplies((x) => !x);
        }}
        link={link}
      />
    </>
  );
}

export default Tweet;
