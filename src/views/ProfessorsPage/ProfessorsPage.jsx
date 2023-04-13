import React from "react";
import { useState } from "react";

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

export default function ProfessorsPage() {
    function handleSelect(e) {
        setFrequency((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
  return (
    <>
      <div>
        <Card className="coursesCard">
          <CardBody className="text-right">
            <div md="12" style={{ marginBottom: "10px" }}>
              <label>رشته</label>
              <br />
              <FormGroup>
                <Input
                  type="select"
                  name="frequency"
                  id="frequency"
                //value={frequency.frequency}
                  onChange={handleSelect}
                >
                  <option>انتخاب کنید</option>
                  <option>مهندسی کامپیوتر</option>
                  <option>مهندسی برق</option>
                  <option>مهندسی مکانیک</option>
                  <option>مهندسی شیمی</option>
                  <option>مهندسی عمران</option>
                  <option>مهندسی راه آهن</option>
                  <option>مهندسی صنایع</option>
                  <option>مهندسی معماری</option>
                  <option>مهندسی مواد</option>
                  <option>علوم کامپیوتر</option>
                  <option>ریاضی</option>
                  <option>فیزیک</option>
                </Input>
              </FormGroup>

              {/* <Col md="6">
                <FormGroup>
                  <br />
                  <Input
                    type="select"
                    name="frequency"
                    id="frequency"
                    value={frequency.frequency}
                    onChange={handleSelect}
                  >
                    <option>زن</option>
                    <option>مرد</option>
                  </Input>
                </FormGroup>
              </Col> */}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
