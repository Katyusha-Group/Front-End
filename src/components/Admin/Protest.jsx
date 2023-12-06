import React from "react";
import * as styles from '../../assets/css/admin/Admin_Protest.module.css'
export default function Protest({protest_data}) {
  return (
      <div className={styles.protest_Main}>
        {/* <p>گزارش دهنده: {protest_data.protester}</p>
        <p>پست گزارش شده: {protest_data.post}</p>
        <p>توضیحات: {protest_data.description}</p> */}
        <p>گزارش دهنده: عارف</p>
        <p>پست گزارش شده: 1324</p>
        <p>توضیحات: حرف های رکیک</p>
      </div>
  );
}