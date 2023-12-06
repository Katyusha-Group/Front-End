import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const likes = async (id) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = "";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"]+id+"/like/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data:data
  };

  try {
    const response = await axios.request(config);
  } catch (error) {
    console.error(error);
  }
};