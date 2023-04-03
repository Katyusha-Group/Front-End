import {useState} from 'react';
import React from "react";
// import routes from "../route.jsx";
import { useInfo } from "../../../contexts/InfoContext";
import '../CoursesCard/CoursesCard.css'

// reactstrap components
import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col} from "reactstrap";
import Button from 'react-bootstrap/Button';



const courses = ["ساختمان داده","مدار منطقی","ریاضی ۲"," فیزیک ۱","تربیت بدنی"];
const coursesItems=courses.map(course => <li >{course}</li>)

function CoursesCard() {
  const [addPartIsShown, setAddPartIsShown] = useState(false);
  const hideAddPart=()=>{
    //course has to be added here
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
              <div style={{color:"white"}} className="text-right" md="12">
            {coursesItems}
              </div>
        </CardBody>
      </Card>      
    </>
  );
}

export default CoursesCard;
