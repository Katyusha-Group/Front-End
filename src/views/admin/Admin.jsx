import React from "react";
import {
  Card,
  Row,
  Col,
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
      <div className={styles.ParentContain}>
        <div className={styles.adminSidebar}>
          <Sidebar />
        </div>
        <div className={styles.contain} >
          <div
          className={styles.admin}
          >
            <div className={styles.adminRow}>
              <Card className={`${styles.adminChart}`}><UserChart></UserChart></Card>
              <Card className={`${styles.adminChart}`}><ActivityChart></ActivityChart></Card>
            </div>
            <div className={styles.adminRow}>
              <Card className={`${styles.adminBox}`}><ProtestTable></ProtestTable></Card>
              <Card className={`${styles.adminBox}`}><PeopleTable></PeopleTable></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
