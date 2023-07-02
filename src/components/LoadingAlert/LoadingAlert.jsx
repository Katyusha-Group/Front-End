import React from "react";
import Swal from 'sweetalert2';


export const showLoading =()=>{
    Swal.fire({
        title: 'کمی صبر کنید',
        html: 'در حال بررسی درخواست ... ',
        allowOutsideClick: false,
        timerProgressBar: true,
        showConfirmButton: false,
        background: '#3c3e5d',
          color:'#ceccc0',
        width:'25rem',
        timerProgressBar: true,
        
        didOpen: () => {
          Swal.showLoading()
        },
      });
}
export const closeLoading = () =>{
    Swal.close()
}
    