import React from "react";
import routes from "../../route";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import "../aboutUs/AboutUs.css"
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
          <div className="content_without_sidebar">
        <Card style={{ height: "200px",padding:"30px"}}>
            <div >katyusha group at IUST</div>
            <div>katyushaiust@gmail.com</div>
        </Card>
        </div>
        </div>
        </div>
        </>
        

    );
}
export default AboutUs;