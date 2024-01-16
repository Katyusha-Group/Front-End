import React, { useState, useEffect } from "react";
import styles from "../../assets/css/sidebar.module.css";
import logo from "../../assets/img/Logo1.png";
import { useNavigate } from "react-router-dom";
import { useGetNotification } from "../../hooks/useGetNotification";
import { useGetNotificationCount } from "../../hooks/useGetNotificationCount";
import { usesProfileMe } from "../../hooks/useProfileMe.jsx";
import homeicon from "../../assets/img/home.svg";
import { ReactSVG } from "react-svg";

import Notification from "./Notification";
import {
  Col,
  Nav,
  NavLink as ReactstrapNavLink,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Card,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const Navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const { profile, setProfile, loading2 } = usesProfileMe();

  const { notificationCount, setNotificationCount } = useGetNotificationCount();
  const handleOpenModal_Notification = () => {
    setShowModal(true);
  };
  function handleCloseModal() {
    setNotificationCount({ ...notificationCount, count: 0 });
    setShowModal(false);
  }
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.bg1}>
          <div className={styles.header}>
            <img className={styles.logoimg} src={logo} alt="" />
            <p className={styles.headertext}>
              کاتیوشا
              <i
                style={{ fontSize: "14px", cursor: "pointer" }}
                className={`tim-icons icon-bell-55 text-muted pr-2`}
                onClick={handleOpenModal_Notification}
              >
                {notificationCount && (
                  <span className={styles.notifCount}>
                    {notificationCount.count}
                  </span>
                )}
              </i>
            </p>
            <Notification
              showModal={showModal}
              handleClose={handleCloseModal}
            />
          </div>
          <div className={styles.items}>
            <div
              className={`${styles.sidebarmenuItems}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate("/home/page");
              }}
            >
              {/* <ReactSVG className={styles.click} src={homeicon}/> */}
              {/* {homeicon} */}
              <i className={`tim-icons icon-bank ${styles.icon}`}></i>
              <p className={styles.itemtext}> خانه</p>
            </div>
            <div
              className={`${styles.sidebarmenuItems}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate(`/searchp`);
              }}
            >
              <i
                className={`tim-icons icon-zoom-split

${styles.icon}`}
              ></i>
              <p className={styles.itemtext}> جست جو</p>
            </div>

            <div
              className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate("/timeline");
              }}
            >
              <i className={`tim-icons icon-chat-33 ${styles.icon}`}></i>
              <p className={styles.itemtext}>چتیوشا</p>
            </div>
            <div
              className={`${styles.sidebarmenuItems}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate(`/profile/${profile.username}`);
              }}
            >
              <i className={`tim-icons icon-single-02 ${styles.icon}`}></i>
              <p className={styles.itemtext}> پروفایل</p>
            </div>

            <div
              className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate("/shopping");
              }}
            >
              <i className={`tim-icons icon-basket-simple ${styles.icon}`}></i>
              <p className={styles.itemtext}> سبد خرید</p>
            </div>

            <div
              className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
              onClick={(e) => {
                e.preventDefault();
                Navigate("/order");
              }}
            >
              <i className={`tim-icons icon-single-copy-04 ${styles.icon}`}></i>
              <p className={styles.itemtext}> سفارش ها</p>
            </div>

            <UncontrolledDropdown
              className={`backCol ${styles.sidebarmenuItems} ${styles.moreInfo}`}
              direction="up"
              style={{ margin: "auto 0" }}
            >
              <DropdownToggle
                className={"m-0 pp-4 " + styles.dropDownToggle}
                color="initial"
                data-toggle="dropdown"
                style={{ background: "initial" }}
              >
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
              <DropdownMenu
                className="br-7"
                aria-labelledby="dropdownMenuLink"
                end
              >
                <DropdownItem
                  className="navbarDropDownItem"
                  href="http://localhost:5173/shopping"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("/shopping");
                  }}
                >
                  <span className="tim-icons icon-basket-simple " />
                  {"  "}
                  سبد خرید
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("/order");
                  }}
                >
                  <span className="tim-icons icon-bag-16" />
                  {"  "}
                  سفارش ها
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("/search");
                  }}
                >
                  <span
                    className="tim-icons icon-zoom-split

"
                  />
                  {"  "}
                  جست جو{" "}
                </DropdownItem>

                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate(`/profile/${profile.username}`);
                  }}
                >
                  <span className="tim-icons icon-badge" />
                  {"  "}
                  پروفایل
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("../aboutUs");
                  }}
                >
                  <span className="tim-icons icon-send" />
                  {"  "}
                  درباره ما
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("../timeline");
                  }}
                >
                  <span
                    className="tim-icons icon-chat-33

"
                  />
                  {"  "}
                  چتیوشا
                </DropdownItem>

                <DropdownItem>
                  <span className="tim-icons icon-simple-remove" />
                  <Link
                    to="/landingPage"
                    onClick={() => {
                      localStorage.removeItem("authTokens");
                    }}
                  >
                    {"  "}
                    خروج
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
