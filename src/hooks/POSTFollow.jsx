import React from "react";
import { apis } from "../assets/apis";
import { useEffect } from "react";
import { useState } from "react";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const POSTFollow = (ToFollowUsername) => {
    console.log("The user to be followed is: " + ToFollowUsername);
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    showLoading();
    const url = apis["profiles"]["follow"]+`${ToFollowUsername}/`;
    console.log("url is: " + url);
    fetch(url , {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: ToFollowUsername
        }),
    })
        .then((response) => {
            closeLoading();
            return response.json();
        })
        .then((data) => { })
        .catch((error) => {
        console.error(error);
        });
}

// export const POSTFollow = async (ToFollowUsername) => {
//     const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
//     console.log("The user to be followed is: " + ToFollowUsername);
//     try {
//       const response = await fetch(apis["profiles"]["follow"]+"username2", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: 
//             JSON.stringify({ 
//                 username: ToFollowUsername 
//                 // ToFollowUsername
//             }),
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Response Data: ", responseData);
//       } else {
//         console.error("Failed: ", response.status);
//       }
//     } catch (error) {
//       console.error("An error occurred: ", error);
//     }
//   };

// export const followProfile = async (username) => {
//     const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
   
//     try {
//       const response = await fetch(apis["profiles"]["follow"]+"username2", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body:  username.toString(),
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Response Data: ", responseData.key);
//         // Handle the response data as needed
//       } else {
//         console.error("Failed: ", response.status);
//         // Handle the error response
//       }
//     } catch (error) {
//       console.error("An error occurred: ", error);
//       // Handle any other errors
//     }
//   };
  
  // Usage
 