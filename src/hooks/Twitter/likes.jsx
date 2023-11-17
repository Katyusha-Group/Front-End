import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const likes = async (likeApi) => {
  console.log("🚀 ~ file: likes.jsx:6 ~ likes ~ likeApi:", likeApi)
  
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = "";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: likeApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
  } catch (error) {
    console.error(error);
  }
};