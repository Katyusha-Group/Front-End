//import { info } from "sass";
import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
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


      console.log("خوش آمدید");
      Swal.fire({
        icon: 'success',
        title: 'کد با موفقیت تایید شد.',
        html:'می توانید وارد حساب کاربری شوید',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
      })
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'کد صحیح نیست',
          text: 'دوباره بررسی کنید',
          background: '#3c3e5d',
          color:'#ceccc0',
          width:'25rem',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    
  }
  
  