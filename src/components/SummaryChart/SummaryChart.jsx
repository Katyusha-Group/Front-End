import React from "react";
import classNames from "classnames";
import * as style from "./SummaryChart.module.css";
import {
  Table,
} from "reactstrap";
export default function SummaryChart(props) {
  function summar(data) {
    return data.map((table_row, index) => (
      <tr key={index}>
        <td className={style.dir_left}>{table_row.complete_course_number}</td>
        <td>{table_row.name}</td>
        <td>
        {table_row.teachers.map((y)=>(y.name)).join(" , ")}</td>
        <td>{table_row.exam_times[0]?.date}</td>
        <td>{table_row.capacity}</td>
        <td>{table_row.registered_count}</td>
        <td>{table_row.total_unit}</td>
      </tr>
    ));
  }
  return (
    <>
      <Table className={style.summary_table}>
        <thead className="text-primary ">
          <tr>
            <th className="text-center ">کد</th>
            <th className="text-center ">درس</th>
            <th className="text-center ">استاد</th>
            <th className="text-center ">تاریخ امتحان</th>
            <th className="text-center ">ظرفیت</th>
            <th className="text-center ">پر شده</th>
            <th className="text-center ">تعداد واحد</th>
          </tr>
        </thead>
        <tbody>{summar(props.props)}</tbody>
      </Table>
    </>
  );
}
