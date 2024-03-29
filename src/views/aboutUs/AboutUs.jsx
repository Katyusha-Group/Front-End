import React from "react";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import * as style from "../aboutUs/AboutUs.module.css";
import im from "../../assets/img/About us page-bro.png";
import {
  Col,
} from "reactstrap";

export function AboutUs() {
  return (
    <>
      <div className="wrapper" style={{ direction: "rtl" }}>
        <div className="main-panel">
          <AdminNavbar></AdminNavbar>
          <div className="mt-5"></div>
          <div className={style.aboutUs_content_without_sidebar}>
            <Col className={style.aboutUs_BGimgCol}>
              <img className={style.aboutUs_BGimg} src={im} />
              <div
                className={style.infoDivAboutUs}
                style={{ textAlign: "right", color: "#999aa3" }}
              >
                {`این سامانه توسط جمعی از دانشجویان مهندسی کامپیوتر ورودی ۹۹ دانشگاه علم و صنعت طراحی شده است . خوشحال می شویم اگر نظراتتان را با ما در میان بگذارید.  
`}
                <div
                  style={{
                    paddingRight: "30px",
                    paddingTop: "20px",
                    textAlign: "right",
                    color: "#999aa3",
                  }}
                >
                  شما می‌توانید از طریق آدرس ایمیل katyushaiust@gmail.com با ما
                  در ارتباط باشید.
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
