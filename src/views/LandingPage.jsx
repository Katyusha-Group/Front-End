import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
import {Link} from "react-router-dom";
import { useInfo } from "../contexts/InfoContext.jsx";
import styles from "../assets/css/LandingPage.css";
// import BGImage from "../assets/img/Landing.jpg";
import lottie from 'lottie-web';
// import BGImage from "../assets/img/28893-book-loading.json";

import {
  Button,
  Row,
  Col,
  Card,
  Container
} from "reactstrap";


// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${BGImage})`
// };


function LandingPage() {
  React.useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "../src/assets/img/28893-book-loading.json"
      // path: "../src/assets/img/92377-quiz-mode.json"
      // path: "../src/assets/img/133116-education-edit.json"
      // path: "../src/assets/img/132921-education-services.json"
      // path: "../src/assets/img/74130-education.json"
      // path: "../src/assets/img/88025-smart-owl-education-animation-icons.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
    <Container>
    <Row>
      <Col className="BGimgCol">
        {/* <img className="BGimg" src={BGImage}/> */}
        <div id="animation"></div>
      </Col>
      <Col className="LandingPageCardCol">
        <Card className="LandingPageCard">
          <div className="div-1">
            <span >
              <div className="div-2">
                به کاتیوشا خوش اومدین!
              </div>
              <br/>
              <div className="div-3">
                این سامانه به شما کمک می کنه که:
                <li>
                  برنامه هفتگی و لیست واحدها و امتحاناتون رو ببینین 📆
                </li>
                {/* <li>
                  شرایط دروس در ترم های گذشته رو بررسی کنین
                </li> */}
                <li>
                 برای ترم آینده برنامه ریزی کنین 📒
                </li>
                <li>
                  و کلی قابلیت خوب دیگه برای اینکه بتونین انتخاب واحد خوب و راحتی داشته باشین
                </li>
              </div>
              <br/>
              <Row className="LandingPageRow">
                <Col>
                  <Link to="../Signup">
                    <button 
                      // className="btn-fill-landingPage" 
                      // color="primary"
                      // color="#FF365B"
                      className="Buttons"
                    > 
                      ثبت نام
                    </button>
                  </Link>
                </Col>
                <Col>
                <Link to="../Login">
                    <button 
                      // className="btn-fill-landingPage" 
                      // color="primary"
                      className="Buttons"
                    >
                      ورود
                    </button>
                  </Link>
                </Col>
              </Row>
            </span>
          </div>
          <span>
            <div className="div-4">
              <Row>
                کنجکاویم که نظرات و پیشنهاداتتون رو درباره کاتیوشا بدونیم:
                katyushaiust@gmail.com
              </Row>
            </div>
          </span>
        </Card>
      </Col>
    </Row>
    </Container>
    </>
  );
}
export default LandingPage;


