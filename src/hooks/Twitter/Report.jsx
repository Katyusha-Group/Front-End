import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const Report = async (id, setData) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = {
    detail: ""
  };
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: apis["reportTwitte"]["reportTwitte"]+id+"/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data:data
  };

  try {
    const response = await axios.request(config);
    console.log("🚀 ~ file: Report.jsx:20 ~ Report ~ response:", response)
    
  } catch (error) {
    console.error(error);
  }
};