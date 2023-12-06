import React from "react";
import Timeline from "./Timeline.jsx";
import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import styles from "../../assets/css/Timeline/Timelinepage.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Searchbar from "../Searchbar.jsx";
import Reply from "../../components/Timeline/Reply.jsx";

const Replies = () => {
  return (
    <div className={styles.bg}>
      <Sidebar />
      <div className={styles.items}>
        <Reply />
      </div>
      <Searchbar />
    </div>
  );
};

export default Replies;
