import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
import {Link} from "react-router-dom";
import { useInfo } from "../contexts/InfoContext.jsx";
import styles from "../assets/css/LandingPage.css";
// import BGImage from "../assets/img/Landing.jpg";
import BGImage from "../assets/img/Landing page-amico.svg";

import {
  Button,
  Row,
  Col,
  Card,
  Container
} from "reactstrap";


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${BGImage})`
};

function LandingPage() {
  return (
    <>
    <Container>
    <Row>
      <Col className="BGimgCol">
        <img className="BGimg" src={BGImage}/>
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
                این سایت به شما کمک می کنه که:
                <li>
                  برنامه هفتگی و لیست واحدها و امتحاناتون رو ببینین 📆
                </li>
                <li>
                   📒
                </li>
                <li>
                  برای ترم آینده برنامه ریزی کنین 
                </li>
                <li>
                    انتخاب واحد بهتری داشته باشین 
                </li>
              </div>
              <br/>
              <Row className="LandingPageRow">
                <Col>
                  <Link to="../Signup">
                    <Button className="btn-fill-landingPage" color="primary"> ثبت نام</Button>
                  </Link>
                </Col>
                <Col>
                <Link to="../Login">
                    <Button className="btn-fill-landingPage" color="primary">ورود</Button>
                  </Link>
                </Col>
              </Row>
            </span>
          </div>
          <span>
            <div className="div-4">
              <Row>
                در صورت وجود هرگونه مشکل با ما در ارتباط باشید:
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


