import {useState} from 'react';
import React from "react";
import { useInfo } from "../../../contexts/InfoContext";
import '../EventsCard/EventsCard.css'
import {Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Input,Row,Col, Table} from "reactstrap";
import Button from 'react-bootstrap/Button';
import {DateTimePicker} from "react-advance-jalaali-datepicker";
import d from "../events.json"
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
                  
                
                  <DateTimePicker
                  placeholder="انتخاب تاریخ و ساعت"
                  format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
                  id="dateTimePicker"
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
