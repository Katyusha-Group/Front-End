import React from "react";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import * as chart from "../../assets/img/schedule_table.png"
export default function SummaryChart(props) {
  console.log(props.props)
  function summar(data) {
    return(data.map((table_row) => (
      <tr>
        <td>{table_row.name}</td>
        <td>{table_row.teacher.name}</td>
        <td>{table_row.exam_times[0].exam_start_time}</td>
        <td>{table_row.capacity}</td>
        <td>{table_row.registered_count}</td>
      </tr>
    )))
  }
  return (
    <>
      <Row>
        <Col lg="12" sm="10">
          <Card>
            <CardHeader className="text-right">
              <CardTitle tag="h4">برنامه هفتگی</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center ">درس</th>
                    <th className="text-center ">استاد</th>
                    <th className="text-center ">تاریخ امتحان</th>
                    <th className="text-center ">ظرفیت</th>
                    <th className="text-center ">پر شده</th>
                  </tr>
                </thead>
                <tbody>
                  {summar(props.props)}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
