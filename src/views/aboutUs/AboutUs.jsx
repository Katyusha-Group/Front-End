import React from "react";
import routes from "../../route";
import { useInfo } from "../../contexts/InfoContext";

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
        <Card style={{ height: "200px",padding:"30px"}}>
            <div >katyusha group at IUST</div>
            <div>katyushaiust@gmail.com</div>
        </Card>

    );
}
export default AboutUs;