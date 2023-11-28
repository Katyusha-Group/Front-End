import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
  CardFooter,
} from "reactstrap";
import Sidebar from "../Sidebar/Sidebar.jsx";
import styles from "../../assets/css/admin/Admin.module.css";

export default function Admin() {
  return (
    <>
      <div className={styles.contain} >
        <Sidebar />
        <div
        className={styles.admin}
        >
          <Row>
            <Col >
              <Card className={`${styles.adminChart}`}>Hello</Card>
            </Col>
            <Col >
              <Card className={`${styles.adminChart}`}>Hello</Card>
            </Col>
          </Row>
          <Row>
            <Col >
              <Card className={`${styles.adminBox}`}>Hello</Card>
            </Col>
            <Col >
              <Card className={`${styles.adminBox}`}>Hello</Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
