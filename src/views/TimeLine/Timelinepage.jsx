import React from 'react'
import Timeline from './Timeline';
import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import styles from '../../assets/css/Timeline/Timelinepage.module.css';




const Timelinepage = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.navbar}> 
    <AdminNavbar/>
    </div>
    <Timeline />
    </div>
  )
}

export default Timelinepage