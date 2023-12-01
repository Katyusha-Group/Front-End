import React from 'react'
import Protest from './Protest'
import * as styles from '../../assets/css/admin/Admin_Protest.module.css'
import { useReports } from '../../hooks/Admin/useReports'
export default function ProtestTable() {
  const { data: tweets, setData: setTweets, loading } = useReports("get", true);
  console.log("reports: ", tweets);
  return (
    <div className={styles.ProtestTable_Main}>
      {/* <div>ProtestTable</div> */}
      <div className={styles.title}>گزارش ها</div>
      <div className={styles.protestContainer}>
        <Protest/>
        <Protest/>
        <Protest/>
        <Protest/>
      </div>
    </div>
  )
}
