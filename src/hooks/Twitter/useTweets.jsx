import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

export const useTweets = (request, effect=false, input={}) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sendData = new FormData();
  sendData.append("content",input.content)
  sendData.append("parent", "")
  const fetchData = () => {
      showLoading();
    let config = {
      method: request,
      maxBodyLength: Infinity,
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
  useEffect(()=>{fetchData()}, []);
  if(effect === false){
    fetchData()
  }
  return { data ,loading};
};
