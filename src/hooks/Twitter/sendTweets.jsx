import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";

export const useSendTweets = async (content, setData=(x)=>{}, parent = "") => {
  console.log("🚀 ~ file: sendTweets.jsx:7 ~ useSendTweets ~ content:", content,setData,parent)
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = "";
  const sendData = new FormData();
  sendData.append("content", content);
  sendData.append("parent", parent);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"],
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: sendData,
  };

  try {
    const response = await axios.request(config);
    setData((x) => {
      return [response.data, ...x];
    });
  } catch (error) {
    console.error(error);
  }
};