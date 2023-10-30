import {useState} from 'react';
import React from "react";
import { useInfo } from "../../../contexts/InfoContext";
import '../CoursesCard/CoursesCard.css';

import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";
import Button from 'react-bootstrap/Button';
import data from "../courses.json";

const coursesItems=data.map(course => <li >{course.name}</li>)

function CoursesCard() {
  const [addPartIsShown, setAddPartIsShown] = useState(false);
  const hideAddPart=()=>{
    setAddPartIsShown(false);
  }
  const changeAddPartState=()=>{
    addPartIsShown ? setAddPartIsShown(false) : setAddPartIsShown(true);
  }
  return (
    <>
      <Card className="coursesCard">
        <CardHeader className="coursesCardHeader">
          <h4 className="title text-right">  درس های این ترم من</h4>
          <Button variant="success"size="sm" style={{color:"darkslategrey",fontSize:"medium"}} onClick={changeAddPartState}>+</Button>
        </CardHeader>
        <CardBody className="coursesCardBody text-right"  >
              <div className={addPartIsShown ? "addCourse" : "hidden"} md="12" style={{marginBottom:"10px",}} >
                  <label>
                    نام درس جدید را وارد کنید:
                  </label>
                  <div className="inputBox">
                  <Input placeholder="ریاضی ۱" />
                  <Button variant="secondary"size="sm" style={{color:"aqua",fontSize:"medium"}} onClick={hideAddPart} >+</Button>
                  </div>
              </div>
              <div style={{color:"white"}} className={addPartIsShown ? "hidden": "text-right"} md="12">
            {coursesItems}
              </div>
        </CardBody>
      </Card>      
    </>
  );
}

export default CoursesCard;
