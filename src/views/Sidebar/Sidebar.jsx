import React from "react";
import styles from "../../assets/css/sidebar.module.css";
import logo from "../../assets/img/Logo1.png";
import { useNavigate } from "react-router-dom";
import { useGetNotification } from "../../hooks/useGetNotification";
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

  const { notification, setNotification, loading } = useGetNotification();
  console.log(notification)
  const handleOpenModal_Notification = () => {
    setShowModal(true);
  };
  function handleCloseModal() {
    setShowModal(false);
  };
  const notificationData = [
    {
      "actor": {
        "name": "1آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
    }, {
      "actor": {
        "name": "1آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
    }, {
      "actor": {
        "name": "1آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
    }, {
      "actor": {
        "name": "1آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7469/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 06 در ستون ظر فیت به مقدار 13 تغییر کرد."
    },
    {
      "actor": {
        "name": "2آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7468/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون تعداد لیست انتظار به مقدار 2 تغییر کرد."
    },
    {
      "actor": {
        "name": "3آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7467/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون تعداد ثبت نام شده به مقدار 13 تغییر کرد."
    },
    {
      "actor": {
        "name": "4آزمایشگاه مدارهای منطقی",
        "username": "C_1211012",
        "image": "http://84.32.10.112/var/www/media/images/profile_pics/course_default.png",
        "profile_type": "C",
        "profile_link": "http://127.0.0.1:8000/profiles/C_1211012/"
      },
      "notification_type": "P",
      "read": true,
      "delta_time": "17 روز پیش",
      "tweet_link": "http://127.0.0.1:8000/twittes/7466/",
      "message": "آزمایشگاه مدارهای منطقی پست جدیدی ارسال کرد. پست او:\nگروه درسی با شماره کلاس 01 در ستون ظر فیت به مقدار 13 تغییر کرد."
    }
  ]
  return (
    <>
      <Card className={styles.bg}>
        <div className={styles.bg1}>
          <div className={styles.header}>
            <img src={logo} alt="" style={{ height: "40px", width: "40px" }} />
            <p className={styles.headertext}>
              کاتیوشا
              <i
                style={{ fontSize: "14px", cursor: "pointer" }}
                className={`tim-icons icon-bell-55 text-muted pr-2`}
                onClick={handleOpenModal_Notification}
                id="toggleConfirmPassword"
              ></i>
            </p>
            {notification &&
              <Notification
                showModal={showModal}
                handleClose={handleCloseModal}
                notificationData={notification.data}
              />
            }

          </div>

          <div
            className={`${styles.sidebarmenuItems}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/home/page");
            }}
          >
            <svg
              className={styles.click}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 30 50"
              fill="none"
            >
              <g clip-path="url(#clip0_44_212)">
                <path
                  d="M16.6666 33.3333V23.3333H23.3333V33.3333H31.6666V20H36.6666L19.9999 5L3.33325 20H8.33325V33.3333H16.6666Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_212">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className={styles.itemtext}> خانه</p>
          </div>

          <div
            className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/shopping");
            }}
          >
            <svg
              className={styles.click}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M12 32C9.8 32 8.02 33.8 8.02 36C8.02 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.18L8.5 24.08C8.18 24.64 8 25.3 8 26C8 28.2 9.8 30 12 30H36V26H12.84C12.56 26 12.34 25.78 12.34 25.5L12.4 25.26L14.2 22H29.1C30.6 22 31.92 21.18 32.6 19.94L39.76 6.96C39.92 6.68 40 6.34 40 6C40 4.9 39.1 4 38 4H8.42L6.54 0H0ZM32 32C29.8 32 28.02 33.8 28.02 36C28.02 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z"
                fill="white"
              />
            </svg>
            <p className={styles.itemtext}> سبد خرید</p>
          </div>
          <div
            className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/notification");
            }}
          >
            <span
              style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
              className="tim-icons icon-email-85"
            />
            <p className={styles.itemtext}> اعلان ها</p>
          </div>
          <div
            className={`${styles.sidebarmenuItems}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/profile");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 173 173"
              fill="none"
            >
              <path
                d="M86.322 0C62.5834 0 43.161 24.1701 43.161 53.9512C43.161 83.7323 62.5834 107.902 86.322 107.902C110.06 107.902 129.483 83.7323 129.483 53.9512C129.483 24.1701 110.06 0 86.322 0ZM41.2187 107.902C18.3434 108.981 0 127.756 0 151.063V172.644H172.644V151.063C172.644 127.756 154.516 108.981 131.425 107.902C119.772 121.067 103.802 129.483 86.322 129.483C68.8418 129.483 52.8722 121.067 41.2187 107.902Z"
                fill="white"
              />
            </svg>{" "}
            <p className={styles.itemtext}> پروفایل</p>
          </div>

          <div
            className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/order");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 173 174"
              fill="none"
            >
              <path
                d="M85.5657 0.24334C82.7567 0.459415 79.9477 1.97194 78.2191 4.34876L27.6576 65.0658H0V86.6733H21.6075V165.757C21.6075 169.646 25.0647 173.103 28.954 173.103H143.69C147.579 173.103 151.036 169.646 151.036 165.757V86.6733H172.644V65.0658H144.986C139.152 57.9354 93.3444 3.26839 92.9122 2.83624C90.5354 0.891565 88.1586 -0.18881 85.5657 0.0272648V0.24334ZM86.2139 27.9009L117.329 65.0658H55.0991L86.2139 27.9009ZM53.8027 108.281C59.8528 108.281 64.6064 113.034 64.6064 119.085V140.692C64.6064 146.742 59.8528 151.496 53.8027 151.496C47.7526 151.496 42.9989 146.742 42.9989 140.692V119.085C42.9989 113.034 47.7526 108.281 53.8027 108.281ZM118.625 108.281C124.675 108.281 129.429 113.034 129.429 119.085V140.692C129.429 146.742 124.675 151.496 118.625 151.496C112.575 151.496 107.821 146.742 107.821 140.692V119.085C107.821 113.034 112.575 108.281 118.625 108.281Z"
                fill="white"
              />
            </svg>
            <p className={styles.itemtext}> سفارش ها</p>
          </div>

          <UncontrolledDropdown className={`backCol ${styles.sidebarmenuItems} ${styles.moreInfo}`} direction="up" style={{ margin: "auto 0" }

          }>
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
                <span className="tim-icons icon-basket-simple" />
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
                  Navigate("/notification");
                }}
              >
                <span className="tim-icons icon-email-85" />
                {"  "}
                اعلان ها
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  Navigate("/user");
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
                صفحه اصلی
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
          <div
            className={`${styles.sidebarmenuItems} ${styles.sidebarmenuItemsMobileBlock}`}
            onClick={(e) => {
              e.preventDefault();
              Navigate("/timeline");
            }}
          >
            <svg
              fill="#fff"
              height="40px"
              width="30px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 67.429 67.429"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M33.468,67.184C15.014,67.184,0,52.17,0,33.715S15.014,0.246,33.468,0.246c18.455,0,33.469,15.014,33.469,33.469
		c0,5.621-1.421,11.161-4.116,16.076l4.608,17.2L50.58,62.475C45.408,65.559,39.511,67.184,33.468,67.184z M33.468,4.246
		C17.219,4.246,4,17.466,4,33.715s13.219,29.469,29.468,29.469c5.582,0,11.021-1.574,15.729-4.554l0.74-0.468l11.835,3.171
		l-3.243-12.1l0.419-0.72c2.609-4.484,3.988-9.602,3.988-14.799C62.936,17.466,49.717,4.246,33.468,4.246z"
                />
              </g>
            </svg>
            <p className={styles.itemtext}>صفحه اصلی</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Sidebar;
