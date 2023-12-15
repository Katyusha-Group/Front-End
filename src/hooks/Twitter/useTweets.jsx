import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const fetchData = (setLoading,setData,num) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  showLoading();
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    // url: apis["tweets"]["tweets"]+"/"+num+"/",
    url: apis["tweets"]["tweets"],
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      setLoading(false)
      setData(response.data);
      closeLoading();
    })
    .catch();
};
export const useTweets = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{fetchData(setLoading,setData,1)}, []);
  return { data, setData ,loading};
};
