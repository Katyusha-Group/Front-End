import React from "react";
// import {Select} from 'react-select';
import { useState } from "react";
import "../ProfessorsPage/ProfessorsPage.css";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];

export default function ProfessorsPage() {
  // function handleSelect(e) {
  //     setFrequency((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   }
  

  return (
    <>
      {/* const { selectedOption } = this.state; */}
        {/* <Select
          value={selectedOption}
          // onChange={this.handleChange}
          options={optionList}
        /> */}
        <label>dhjh</label>
    </>
  );
}
