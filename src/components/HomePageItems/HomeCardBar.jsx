
import React from "react";
import "../HomePageItems/HomeCardBar.css"
import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col, Table} from "reactstrap";
import {DateTimePicker} from "react-advance-jalaali-datepicker";
import CoursesCard from "./CoursesCard/CoursesCard";
import ExamsCard from "./ExamsCard/ExamsCard";
import EventsCard from "./EventsCard/EventsCard";

function HomeCardBar() {
  
  return (
    <>
    <div className="cardBar">
        <CoursesCard/>
        <ExamsCard/>
        <EventsCard/>
    </div>    
    </>
  );
}

export default HomeCardBar;
