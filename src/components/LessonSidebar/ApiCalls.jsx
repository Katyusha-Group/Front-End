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

  export async function verificationApi(code,token,setShowAlert){
    // console.log(`https://katyushaiust.ir/accounts/activation-confirm/${token}/`)
    // console.log(code)
    // strCode=code.toString()
    
    // fetch(`https://katyushaiust.ir/accounts/activation-confirm/${token}/`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "accept": "application/json"
    //   },

    //   body: JSON.stringify(
    //   {
    //     verification_code: code
    //   })
    // }).then((response) => response.json())
    // .then((data) => {
    //   console.log("heyy it was done!", data);
    //   // console.log(response)
    //   // setData(data);
    //   if ( response.status===200){
    //     return setShowAlert(true);
    //   }else{
    //     return setShowAlert(false);
    //   }
    // })
    
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

  const response = await fetch(`https://katyushaiust.ir/accounts/activation-confirm/${token}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },

      body: JSON.stringify(
      {
        verification_code: code
      })
    });
    const data = await response.json();
    console.log(data);
    if ( response.status===200){

    // if ( data.message.includes("created successfully")){
      
      // changeInfo("token",data.token)
      // console.log(info.token);
      // console.log(data.token)

      console.log("خوش آمدید");
      alert("کد با موفقیت تایید شد. می توانید وارد حساب کاربری شوید ")
      Swal.fire({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
      });
      // setShowAlert(true);
      }else{
        alert("کد صحیح نیست")
        // setShowAlert(false);
      }
    
  }
  
  