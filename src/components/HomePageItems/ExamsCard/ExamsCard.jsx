import {useState} from 'react';
import React from "react";
// import routes from "../route.jsx";
import { useInfo } from "../../../contexts/InfoContext";
import '../ExamsCard/ExamsCard.css'

// reactstrap components
import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col, Table} from "reactstrap";
import Button from 'react-bootstrap/Button';
import {DateTimePicker} from "react-advance-jalaali-datepicker";



const exams = [{name:"ساختمان داده",date:"1402.2.2",time:"10:30"},{name:" فیزیک ۱",date:"1402.2.8",time:"9:00"}];
const examsItems=exams.map(exam => 
<tr>
    <td >{exam.name}</td>
    <td>{exam.time}</td>
    <td>{exam.date}</td>
    
</tr>
)

function ExamsCard() {
  const [addPartIsShown, setAddPartIsShown] = useState(false);
  const hideAddPart=()=>{
    //exam has to be added here
    setAddPartIsShown(false);
  }
  const changeAddPartState=()=>{
    addPartIsShown ? setAddPartIsShown(false) : setAddPartIsShown(true);
  }
  return (
    <>
      <Card className="examsCard">
        <CardHeader className="examsCardHeader">
          <h4 className="title text-right">امتحانات</h4>
          <Button variant="success"size="sm" style={{color:"darkslategrey",fontSize:"medium"}} onClick={changeAddPartState}>+</Button>
        </CardHeader>
        <CardBody className="examsCardBody text-right"  >
              <div className={addPartIsShown ? "addExam" : "hidden"} md="12" style={{marginBottom:"10px",}} >
                  <label>
                     درس  امتحان جدید را وارد کنید:
                  </label>
                  <div className="inputBox">
                  <Input placeholder="ریاضی ۱" />
                  <Button variant="secondary"size="sm" style={{color:"aqua",fontSize:"medium"}} onClick={hideAddPart} >+</Button>
                  </div>
                  
                  {/* <label>
                     تاریخ امتحان جدید را وارد کنید:
                  </label> */}
                  <DateTimePicker
                  placeholder="انتخاب تاریخ و ساعت"
                  format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
                  id="dateTimePicker"
                  // onChange={this.changeTimeDate}
                  // preSelected="تاریخ: 1402/04/01 ساعت: 18:30"
                  //inputComponent={this.DatePickerInput}
                  />
                  
              </div>
              <div style={{color:"white"}} className={addPartIsShown ? "hidden": "text-right"} md="12">
                <Table borderless size="sm">
                <tbody>
                    {examsItems}
                </tbody>
                </Table>
              </div>
              
        </CardBody>
      </Card>      
    </>
  );
}

export default ExamsCard;
