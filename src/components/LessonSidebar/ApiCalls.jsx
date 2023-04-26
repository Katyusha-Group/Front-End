//import { info } from "sass";
import React from 'react';
import ReactDOM from 'react-dom';

import { useInfo } from "../../contexts/InfoContext";

export function takeLessonsGroups(token){
    // const tokenJson = localStorage.getItem("authTokens");
    // const tokenClass = JSON.parse(tokenJson);
    // const token = tokenClass.token.access;
    // const {info,changeInfo}=useInfo()
    const [data, setData] = React.useState([]);
    console.log(`token is : ${token}`)
    // console.log(`course ID is: ${info.courseGroupID}`);${info.courseGroupID}
   
      fetch(`https://www.katyushaiust.ir/coursegroups/1311028`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("heyy it was done!", data);
          setData(data);
        })
        .catch((error) => console.error(error));
      console.log(data);
    //   const activeRoute = (routeName) => {
    //     return location.pathname === routeName ? "active" : "";
    //   };
    

  }