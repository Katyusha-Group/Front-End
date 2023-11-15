import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

export const useSendTweets = (content, parent) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState([]);
  const sendData = new FormData();
  sendData.append("content", content)
  sendData.append("parent", "")
  const fetchData = () => {
      showLoading();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apis["tweets"]["tweets"],
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: sendData
    };
    axios
      .request(config)
      .then((response) => {
        console.log("🚀 ~ file: sendTweets.jsx:30 ~ .then ~ response:", response)
        setData(response.data);
        closeLoading();
      })
      .catch();
  };
  fetchData();
  return { data };
};