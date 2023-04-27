import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
import {Link} from "react-router-dom";
import { useInfo } from "../contexts/InfoContext.jsx";
import styles from "../assets/css/LandingPage.css";
import {
  Button,
  Row,
  Col,
  Card,
} from "reactstrap";

function LandingPage() {
  return (
    <>
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
            برنامه هفتگی و لیست ددلاین ها و امتحاناتون رو ببینین 📆
          </li>
          <li>
            برای طول ترم و تکالیف برنامه ریزی کنین 📒
          </li>
          <li>
            به آرشیو کلاس های ضبط شده دسترسی داشته باشین 📺
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
            Katyusha@example.com
          </Row>
        </div>
      </span>
    </Card>
    
    </>
  );
}
export default LandingPage;


