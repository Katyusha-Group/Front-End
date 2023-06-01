import React from "react";
import "./Timeline.module.css";
import "./style.sass";
import { useInfo } from "../../contexts/InfoContext";
import { createContext, useState, useEffect } from "react";
const Timeline = (props) => {
  console.log(props);
  let course_group = props.show.show.data.complete_course_number.split("_")[0];
  const { info, changeInfoState } = useInfo();
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const [Data, setData] = React.useState();
  // const [Data, setData] = useState();
  // const Data = [
  //   {
  //     course_number: 2211026,
  //     name: "معماری کامپیوتر",
  //     data: {
  //       3981: [
  //         {
  //           capacity: 35,
  //           registered_count: 36,
  //           teacher_name: "محسن سریانی",
  //         },
  //       ],
  //       3982: [
  //         {
  //           capacity: 41,
  //           registered_count: 41,
  //           teacher_name: "محسن سریانی",
  //         },
  //         {
  //           capacity: 41,
  //           registered_count: 42,
  //           teacher_name: "حاکم بیت الهی",
  //         },
  //       ],
  //       3991: [
  //         {
  //           capacity: 49,
  //           registered_count: 52,
  //           teacher_name: "محسن سریانی",
  //         },
  //       ],
  //       3992: [
  //         {
  //           capacity: 35,
  //           registered_count: 32,
  //           teacher_name: "محسن سریانی",
  //         },
  //         {
  //           capacity: 60,
  //           registered_count: 61,
  //           teacher_name: "حاکم بیت الهی",
  //         },
  //       ],
  //       4001: [
  //         {
  //           capacity: 42,
  //           registered_count: 42,
  //           teacher_name: "محسن سریانی",
  //         },
  //       ],
  //       4002: [
  //         {
  //           capacity: 54,
  //           registered_count: 54,
  //           teacher_name: "حاکم بیت الهی",
  //         },
  //         {
  //           capacity: 54,
  //           registered_count: 52,
  //           teacher_name: "امیرمهدی حسینی منزه",
  //         },
  //       ],
  //       4011: [
  //         {
  //           capacity: 44,
  //           registered_count: 45,
  //           teacher_name: "پریا دربانی",
  //         },
  //       ],
  //       4012: [
  //         {
  //           capacity: 47,
  //           registered_count: 47,
  //           teacher_name: "حاکم بیت الهی",
  //         },
  //         {
  //           capacity: 49,
  //           registered_count: 50,
  //           teacher_name: "امیرمهدی حسینی منزه",
  //         },
  //       ],
  //     },
  //   },
  // ];
  const token = tokenClass.token.access;
  React.useEffect(() => {
    fetch(`https://www.katyushaiust.ir/timeline/${course_group}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("time_data" + data[0], data);
        setData(data);
      })

      .catch((error) => console.error(error));

    // setData(ndata);
    // changeInfoState("courseChoosed", data);
    // const activeRoute = (routeName) => {
    //   return location.pathname === routeName ? "active" : "";
    // };
  }, []);
  React.useEffect(() => {
    // setData(ndata);
    // changeInfoState("courseChoosed", data);
    // const activeRoute = (routeName) => {
    //   return location.pathname === routeName ? "active" : "";
    // };
    console.log("Data of time", Data);
  }, [Data]);
  // console.log("LOGH", Data);
  // console.log("LOGH1", Data[0].data);
  // console.log("LOGH2", Object.entries(Data[0].data));
  return (
    <div className="timelinebox">
      <ul className="timeline">
        {Data &&
          Object.entries(Data[0].data).map(
            ([termid, dorus]) => (
              <>
                <li>
                  <span className="year">
                    {"1" + termid.replace(/(\d{3})/, "$1-")}
                  </span>
                  <ul className="content">
                    {dorus.map((dars) => (
                      <li>{dars.teacher_name}</li>
                    ))}
                  </ul>
                </li>
              </>
            )

            // {item.map()=>()}
          )}
      </ul>
      {/* <ul className="timeline">
        <li>
          <span className="year">2008</span>
          <ul className="content">
            <li>2008-2</li>
            <li>2008-3</li>
          </ul>
        </li> */}
      {/* <li>
          <span className="year">2009</span>
          <ul className="content">
            <li>2009-1</li>
            <li>2009-2</li>
            <li>2009-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2010</span>
          <ul className="content">
            <li>2010-1</li>
            <li>2010-2</li>
            <li>2010-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2011</span>
          <ul className="content">
            <li>2011-1</li>
            <li>2011-2</li>
            <li>2011-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2012</span>
          <ul className="content">
            <li>2012-1</li>
            <li>2012-2</li>
            <li>2012-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2013</span>
          <ul className="content">
            <li>2013-1</li>
            <li>2013-2</li>
            <li>2013-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2014</span>
          <ul className="content">
            <li>2014-1</li>
            <li>2014-2</li>
            <li>2014-3</li>
          </ul>
        </li>
        <li>
          <span className="year">2015</span>
          <ul className="content">
            <li>2015-1</li>
            <li>2015-2</li>
            <li>2015-3</li>
          </ul>
        </li> */}
      {/* </ul> */}
    </div>
  );
};

export default Timeline;
