import React from "react";
import moment from 'jalali-moment'
import * as styles from '../../assets/css/admin/Admin_Protest.module.css'
export default function Protest({protest_data}) {
  const dateObj = new Date(protest_data.created_at);
  const formattedDate = dateObj.toISOString().split('T')[0].replace(/-/g, '/');
  const date =moment(formattedDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
      <div className={styles.protest_Main}>
        {/* <p>گزارش دهنده: {protest_data.protester}</p>
        <p>پست گزارش شده: {protest_data.post}</p>
        <p>توضیحات: {protest_data.description}</p> */}
        {/* <p>گزارش دهنده: عارف</p>
        <p>پست گزارش شده: 1324</p>
        <p>توضیحات: حرف های رکیک</p> */}

        <p>زمان گزارش: {date}</p>
        <p>پست گزارش شده: {protest_data.twitte}</p>
        <p>توضیحات: {protest_data.reason}</p>

      </div>
  );
}