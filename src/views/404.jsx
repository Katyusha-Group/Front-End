import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import styles from '../assets/css/Notfound.module.css'
import Notfoundmain from '../components/notfoundmain'
const NotFound = () => {
  return (
    <div className={styles.main}>
    <Sidebar/>
    <Notfoundmain/>
    
    </div>)
}

export default NotFound