import React from "react";
import ReactDOM from 'react-dom';
import routes from "../route.jsx";
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
  Col
} from "reactstrap";

function LandingPage() {
  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white"
  }
  return (
    <>
    {/* <div className={styles.LandingPageFirstDiv}>
        
      <div className={styles.bigblue}>
          Hello World!!
      </div>
      
      <div style={{"font-size": "36px"}}>
          This is the landing page and here's some content.
          How much wood would a woodchuck chuck 
          if a woodchuck would chuck wood?
      </div>
      <br />
    </div> */}
    <header>به سایت ما خوش آمدید!</header>
    <Row>
      
    </Row>
    <Row>
      <Card>
        <CardHeader>کاتیوشا</CardHeader>
        <CardBody>
          Hello
        </CardBody>
        <CardBody>
          <Button>ثبت نام</Button>
          <Button>ورود</Button>
        </CardBody>
        <CardFooter>
          Contact
        </CardFooter>
      </Card>
    </Row>
    
    </>
  );
}
export default LandingPage;


