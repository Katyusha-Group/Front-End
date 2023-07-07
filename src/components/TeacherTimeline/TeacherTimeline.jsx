import React from "react";
import "./TeacherTimeline.module.css";
import "./style.sass";
import { useInfo } from "../../contexts/InfoContext";
import { createContext, useState, useEffect } from "react";
const Timeline = (props) => {
  console.log(props);
  let teacher_id = props.show.show.data.teachers[0].id;
  const { info, changeInfoState } = useInfo();
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const [Data, setData] = React.useState();
  // const [Data, setData] = useState();
  const Data1 = [
    {
      course_number: 2211405,
      name: "مقدمه ای بر مسابقات برنامه نویسی",
      data: {
        4011: {
          "سید صالح اعتمادی": {
            courses: [
              {
                capacity: 32,
                registered_count: 28,
                complete_course_number: "22-11-405-01",
              },
            ],
            total_capacity: 32,
            total_registered_count: 28,
            popularity: 87.0,
            total_classes: 1,
          },
        },
        4012: {
          "سید صالح اعتمادی": {
            courses: [
              {
                capacity: 35,
                registered_count: 34,
                complete_course_number: "22-11-405-01",
              },
            ],
            total_capacity: 35,
            total_registered_count: 34,
            popularity: 97.0,
            total_classes: 1,
          },
        },
      },
    },
  ];
  const token = tokenClass.token.access;
  React.useEffect(() => {
    fetch(`https://www.katyushaiust.ir/timeline/teachers/${teacher_id}`, {
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
    // console.log("data in it ", Object.entries(Data[0].data));
  }, [Data]);
  // console.log("LOGH", Data);
  // console.log("LOGH1", Data[0].data);
  // console.log("LOGH2", Object.entries(Data[0].data));
  return (
    <div className="timelinebox">
      <ul className="timeline">
        {Data &&
          Object.entries(Data[0].data).map(
            ([termid, courses]) => (
              <>
                <li>
                  {console.log("courses", courses.courses)}
                  {/* {console.log("Im here", Object.entries(dorus))} */}
                  {/* <span className="year">{termid}</span> */}
                  <span className="year">
                    {"1" + termid.replace(/(\d{3})/, "$1-")}
                  </span>
                  <ul className="content">
                    {Object.keys(courses.courses)
                      .filter((course) => course.includes("ا"))
                      .map((course) => (
                        <li>{course}</li>
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
