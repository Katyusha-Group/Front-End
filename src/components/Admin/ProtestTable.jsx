import React from 'react'
import Protest from './Protest'
import * as styles from '../../assets/css/admin/Admin_Protest.module.css'
export default function ProtestTable() {
  return (
    <>
    {/* <div className={styles.ProtestTable_Main}> */}
      {/* <div>ProtestTable</div> */}
      <div className={styles.title}>گزارش ها:</div>
      <Protest/>
      <Protest/>
      <Protest/>
      {/* <Protest/> */}
    {/* </div> */}
    </>
  )
}
