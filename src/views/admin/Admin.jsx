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
import UserChart from "../../components/Admin/UserChart.jsx";
import ActivityChart from "../../components/Admin/ActivityChart.jsx";
import ProtestTable from "../../components/Admin/ProtestTable.jsx";
import PeopleTable from "../../components/Admin/PeopleTable.jsx";

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
              <Card className={`${styles.adminChart}`}><UserChart></UserChart></Card>
            </Col>
            <Col >
              <Card className={`${styles.adminChart}`}><ActivityChart></ActivityChart></Card>
            </Col>
          </Row>
          <Row>
            <Col >
              <Card className={`${styles.adminBox}`}><ProtestTable></ProtestTable></Card>
            </Col>
            <Col >
              <Card className={`${styles.adminBox}`}><PeopleTable></PeopleTable></Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
