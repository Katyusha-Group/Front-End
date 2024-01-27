import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import Swal from 'sweetalert2';
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
import axios from "axios";

export const GETProfileData = (username) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [profileData, setprofileData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log("id is: " , username);
  useEffect(() => {
    showLoading();
    
    axios((apis["profiles"]["view_profile"] + `${username}`), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        if (response.status === 200) {
          // return response((data) => {
          //   setprofileData(data);
          //   closeLoading();
          //   setLoading(false);
          // });
          setprofileData(response.data);
          closeLoading();
          setLoading(false);
        } 
        else if (response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'کاربر یافت نشد',
            text: 'دوباره بررسی کنید',
            background: '#3c3e5d',
            color: '#ceccc0',
            width: '25rem',
            confirmButtonText: 'باشه'
          }).then(() => {
            // window.history.back();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'خطایی رخ داد',
            text: 'مشکلی در دریافت اطلاعات کاربری رخ داده است',
            background: '#3c3e5d',
            color: '#ceccc0',
            width: '25rem',
            confirmButtonText: 'باشه'
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'خطایی رخ داد',
          text: 'مشکلی در دریافت اطلاعات کاربری رخ داده است',
          background: '#3c3e5d',
          color: '#ceccc0',
          width: '25rem',
          confirmButtonText: 'باشه'
        });
      });
  }, [username, token]);
  return { profileData, setprofileData, loading };
};