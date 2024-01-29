import React from "react";
import Protest from "./Protest";
import * as styles from "../../assets/css/admin/Admin_Protest.module.css";
import { useReports } from "../../hooks/Admin/useReports";
import Spinner from "react-bootstrap/Spinner";
export default function ProtestTable() {
  const {
    data: Protests,
    setData: setProtests,
    loading,
  } = useReports("get", true);
  return (
    <div className={styles.ProtestTable_Main}>
      <div className={styles.title}>گزارش ها</div>
      <div className={styles.protestContainer}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : Protests.count != 0 ? (
          Protests.results.map((protest, index) => (
            <Protest key={index} protest_data={protest} />
          ))
        ) : (
          <p className={styles.NoProtest_Fount}>گزارشی یافت نشد</p>
        )}
      </div>
    </div>
  );
}
