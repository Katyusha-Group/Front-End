//import { info } from "sass";
import React from 'react';
import Swal from 'sweetalert2';
import { apis } from '../../assets/apis';


export function takeLessonsGroups(token){
    const [data, setData] = React.useState([]);
   
      fetch(apis["coursegroups"], {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
  }

  export async function forgetPasswordVerificationApi(code,setShowAlert){
    const response = await fetch(`${localStorage.getItem("link")}`, {
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
    if ( response.status===200){
      localStorage.setItem("link",data.link)
      Swal.fire({
        icon: 'success',
        title: 'کد با موفقیت تایید شد.',
        html:'می توانید رمز عبور جدید ایجاد کنید',
        background: '#3c3e5d',
        color:'#ceccc0',
        width:'25rem',
        confirmButtonText:"باشه"
      }).then((result) => {
        // console.log(result);
        if(result) {
          window.location="/setNewPassword";
          // ok click
        } else {
          // not clicked
        }
      });
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'کد صحیح نیست',
          text: 'دوباره بررسی کنید',
          background: '#3c3e5d',
          color:'#ceccc0',
          width:'25rem',
          confirmButtonText:'باشه'
        })
      }
    
  }
  export async function verificationApi(code,setShowAlert){
    const response = await fetch(apis["accounts"]["activationConfirm"]+`${localStorage.getItem("token")}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },

      body: JSON.stringify(
      {
        "verification_code": code
      })
    });
      
      const data = await response.json();
      if ( response.status===200){
        Swal.fire({
          icon: 'success',
          title: 'کد با موفقیت تایید شد.',
          html:'می توانید وارد حساب کاربری شوید',
          background: '#3c3e5d',
          color:'#ceccc0',
          width:'25rem',
          confirmButtonText:"باشه"
        }).then((result) => {
          if(result) {
            window.location="/login";
          } else {
          }
        });
        
        }else{
          Swal.fire({
            icon: 'error',
            title: 'کد صحیح نیست',
            text: 'دوباره بررسی کنید',
            background: '#3c3e5d',
            color:'#ceccc0',
            width:'25rem',
            confirmButtonText:'باشه'
          })
        }
      
    }
  
  