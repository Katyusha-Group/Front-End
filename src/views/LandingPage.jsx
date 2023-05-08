import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
import {Link} from "react-router-dom";
import { useInfo } from "../contexts/InfoContext.jsx";
import styles from "../assets/css/LandingPage.css";
import BGImage from "../assets/img/Landing.jpg";
import {
  Button,
  Row,
  Col,
  Card,
} from "reactstrap";


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${BGImage})`
};

function LandingPage() {
  // const myStyle={
  //   backgroundImage: 
  //       `url(${BGImage})`,
  //       height:'100vh',
  //       marginTop:'-70px',
  //       fontSize:'50px',
  //       backgroundSize: 'cover',
  //       backgroundRepeat: 'no-repeat',
  //   };
  // let imageStyle = {
  //   height: "350px",
  //   width: "600px",
  //   backgroundImage:
  //   BGImage,
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  // }
  return (
    <>
    {/* <div className="FullLandingPage" style={{ backgroundImage:`url(${BGImage})`}}> */}
    <img className="FullLandingPage" src={BGImage}/>
    
    {/* <div
      style = {sectionStyle}
    > */}
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
    {/* </div>   */}
    </>
  );
}
export default LandingPage;


