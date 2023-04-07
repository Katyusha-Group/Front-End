import {useState} from 'react';
import React from "react";
// import routes from "../route.jsx";
import { useInfo } from "../../../contexts/InfoContext";
import '../EventsCard/EventsCard.css'

// reactstrap components
import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col, Table} from "reactstrap";
import Button from 'react-bootstrap/Button';
import {DateTimePicker} from "react-advance-jalaali-datepicker";
import d from "../events.json"


//const events = [{name:"تمرین ساختمان داده",date:"1402.2.2",time:"23:59"},{name:"  کوییز مدار منطقی",date:"1402.2.8",time:"11:00"}];
const eventsItems=d.map(event => 
<tr>
    <td >{event.name}</td>
    <td>{event.time}</td>
    <td>{event.date}</td>
    
</tr>
)

function EventsCard() {
  const [addPartIsShown, setAddPartIsShown] = useState(false);
  const hideAddPart=()=>{
    //event has to be added here
    setAddPartIsShown(false);
  }
  const changeAddPartState=()=>{
    addPartIsShown ? setAddPartIsShown(false) : setAddPartIsShown(true);
  }
  return (
    <>
      <Card className="eventsCard">
        <CardHeader className="eventsCardHeader">
          <h4 className="title text-right">کار های پیش رو</h4>
          <Button variant="success"size="sm" style={{color:"darkslategrey",fontSize:"medium"}} onClick={changeAddPartState}>+</Button>
        </CardHeader>
        <CardBody className="eventsCardBody text-right"  >
              <div className={addPartIsShown ? "addevent" : "hidden"} md="12" style={{marginBottom:"10px",}} >
                  <label>
                     درس  کار جدید را وارد کنید:
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
                    {eventsItems}
                </tbody>
                </Table>
              </div>
              
        </CardBody>
      </Card>      
    </>
  );
}

export default EventsCard;
