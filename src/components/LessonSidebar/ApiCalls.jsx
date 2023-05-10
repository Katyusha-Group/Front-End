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
   
      fetch(`https://www.katyushaiust.ir/coursegroups/`, {
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

  export function verificationApi(code,token){
    console.log(`https://katyushaiust.ir/accounts/activation-confirm/${token}/`)
    fetch(`https://katyushaiust.ir/accounts/activation-confirm/${token}/`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        verification_code: code
      }),
    }).then((response) => response.json())
    .then((data) => {
      console.log("heyy it was done!", data);
      setData(data);
    })
    if(response.status===200){
      return true;
    }else{
      return false;
    }
  //   .catch((error) => console.error(error));
  // console.log(data);
  //   const data = await response.json();
  //   console.log(data.token);
  //   if (response.status === 200) {
  //     setAuthTokens(data.token);
  //     console.log(authTokens);

  //     localStorage.setItem("authTokens", JSON.stringify(data));
  //     Navigate("/admin/page");
  //   } else {
  //     console.log(data.error);
  //     errors.backError = "!رمز عبور اشتباه و یا حساب کاربری ندارید";
  //     setErrorMessage({
  //       ...errorMessage,
  //       backError: errors.backError,
  //     });
  //   }
  
  }