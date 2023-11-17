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