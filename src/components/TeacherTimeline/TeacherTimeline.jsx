import React from "react";
import "./TeacherTimeline.module.css";
import "./style.sass";
import { useInfo } from "../../contexts/InfoContext";
import { createContext, useState, useEffect } from "react";
import { apis } from "../../assets/apis";
const TeacherTimeline = (props) => {
  let teacher_id = props.show.show.data.teachers[0].id;
  const { info, changeInfoState } = useInfo();
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const [Data, setData] = React.useState();
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
    fetch(apis["timeline"]["teachers"]+`${teacher_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  React.useEffect(() => {
  }, [Data]);
  return (
    <div className="timelinebox">
      <ul className="timeline">
        {Data &&
          Object.entries(Data[0].data).map(
            ([termid, courses]) => (
              <>
                <li>
                  <span className="year">
                    {"1" + termid.replace(/(\d{3})/, "$1-")}
                  </span>
                  <ul className="content">
                    {Object.keys(courses.courses).map((course) => (
                      <li>{course}</li>
                    ))}
                  </ul>
                </li>
              </>
            )
          )}
      </ul>
    </div>
  );
};

export default TeacherTimeline;
