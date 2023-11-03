import React from "react";
import Timeline from "./Timeline";
import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import styles from "../../assets/css/Timeline/Timelinepage.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";

const Timelinepage = () => {
  return (
    <div className={styles.bg}>
        <Sidebar />
      <div className={styles.items}>
        <Timeline />
      </div>
    </div>
  );
};

export default Timelinepage;
