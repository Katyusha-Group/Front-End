

import React from "react";
import routes from "../../route";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import "../aboutUs/AboutUs.css"
import im from "../../assets/img/About us page-bro.png"
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

export function AboutUs(){
    return (
        <>
        <div className="wrapper" style={{ direction: "rtl" }}>
        <div className="main-panel">
        <AdminNavbar></AdminNavbar>
        <div className="mt-5"></div>
          <div className="aboutUs_content_without_sidebar">
        {/* <Card style={{ height: "200px",padding:"30px" , textAlign:"right"}}> */}
            
            <Col className="BGimgCol">
                <img className="BGimg" src={im}/>
                <div className="infoDivAboutUs"style={{ textAlign:"right",color:"#999aa3"}}>
                {`این سامانه توسط جمعی از دانشجویان مهندسی کامپیوتر ورودی ۹۹ دانشگاه علم و صنعت طراحی شده است . خوشحال می شویم اگر نظراتتان را با ما در میان بگذارید.  
`}
                <div style={{ paddingRight:"30px" , paddingTop:"20px", textAlign:"right",color:"#999aa3"}}>
            شما می‌توانید از طریق آدرس ایمیل katyushaiust@gmail.com با ما در ارتباط باشید.
            </div>
                </div>
            
        
      </Col>
            {/* <div><img className="" src={im}></img></div> */}
            
        {/* </Card> */}
        </div>
        </div>
        </div>
        </>
        

    );
}
export default AboutUs;