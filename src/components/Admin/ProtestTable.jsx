import React from 'react'
import Protest from './Protest'
import * as styles from '../../assets/css/admin/Admin_Protest.module.css'
import { useReports } from '../../hooks/Admin/useReports'
export default function ProtestTable() {
  const { data: Protests, setData: setProtests, loading } = useReports("get", true);
  console.log("reports: ", Protests);
  return (
    <div className={styles.ProtestTable_Main}>
      <div className={styles.title}>گزارش ها</div>
      <div className={styles.protestContainer}>
        { Protests &&
          Protests.count != 0 ?
            (
              Protests.results.map((protest) => (
                // <div>{protest.created_at}</div>
                <Protest
                  protest_data = {protest}
                />
              ))
            ):
            (
              <p className={styles.NoProtest_Fount}>گزارشی یافت نشد</p>
            )
        }
        {/* <Protest/>
        <Protest/>
        <Protest/>
        <Protest/> */}
      </div>
    </div>
  )
}
