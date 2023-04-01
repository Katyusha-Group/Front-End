import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
import {Link} from "react-router-dom";
import { useInfo } from "../contexts/InfoContext.jsx";
import styles from "../assets/css/LandingPage.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// function LandingFrame()
// {
//   const style = {
//     "background-image": `url("/src/assets/img/stadium.jpg")`,
//     "background-repeat": "no-repeat",
//     "background-size": "cover",
//     position: "absolute",
//     height: "100%",
//     width: "100%",
//     padding: 0
//   }
//   return <div style={style}></div>
// }

function LandingPage() {
  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white"
  }
  return (
    <>
    {/* <LandingFrame/> */}
    <div className="div-1">
    
    <span >
      <div className="div-2">
        به کاتیوشا خوش اومدین!😎
      </div>
      <div className="div-3">
        این سایت به شما کمک می کنه که:
        <li>
          برنامه هفتگی و لیست ددلاین هاتون رو ببینین
        </li>
        <li>
          به آرشیوها دسترسی داشته باشین
        </li>
        <li>
          برای ترم آینده برنامه ریزی کنین
        </li>
        <li>

        </li>
      </div>
      <br/>
      <Row className="LandingPageRow">
        <Col>
          <Link to="../Signup">
            <Button className="btn-fill" color="primary"> ثبت نام</Button>
          </Link>
        </Col>
        <Col>
        <Link to="../Login">
            <Button className="btn-fill" color="primary">ورود</Button>
          </Link>
        </Col>
      </Row>
    </span>
      
    </div>
    
    </>
  );
}
export default LandingPage;


