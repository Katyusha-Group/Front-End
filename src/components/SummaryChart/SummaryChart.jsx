import React from "react";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import * as chart from "../../assets/img/schedule_table.png"
export default function SummaryChart() {
  return (
    <>
      <Row>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>
              <div className="overflow-auto">
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" sm="10">
          <Card>
            <CardBody>
              <div className="overflow-auto">
                <div></div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
