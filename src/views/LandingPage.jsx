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
    const container = document.getElementById('animation');
    if (!container)
    {
      container.innerHTML = 'Sorry, we could not load the animation.';
      return;
    }
    const animation = lottie.loadAnimation({
      container: document.getElementById('animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "https://assets4.lottiefiles.com/packages/lf20_DMgKk1.json"
      // path: "../src/assets/img/28893-book-loading.json"
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
    <Container className="landing">
    <Row>
      <Col className="LandingPageCardCol">
        <Card className="LandingPageCard">
          <div className="div-1">
            <span >
              <div className="div-2">
                به کاتیوشا خوش اومدین!
              </div>
              <br/>
              <div className="div-3" style={{textAlign: "right"}} >
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
                <li style={{fontSize:"17px",textAlign: "right"}} >
                    و کلی قابلیت منحصر به فرد دیگه برای اینکه بتونین انتخاب واحد خوب و راحتی داشته باشین
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
              <Row style={{fontSize:"15px",color:"#494f5d"}}>
                کنجکاویم که نظرات و پیشنهاداتتون رو درباره کاتیوشا بدونیم:
                katyushaiust@gmail.com
              </Row>
            </div>
          </span>
        </Card>
      </Col>
      <Col className="BGimgCol">
        {/* <img className="BGimg" src={BGImage}/> */}
        <div id="animation"></div>
      </Col>
    </Row>
    </Container>
    </>
  );
}
export default LandingPage;


