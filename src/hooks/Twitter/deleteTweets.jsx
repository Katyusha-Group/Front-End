import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const deleteTweet = async (id) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = "";
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"]+id,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data:data
  };

  try {
    const response = await axios.request(config);
  } catch (error) {
    if (error.response.status == 403)
    {
      console.log("Error 403");
    }
    console.error(error);
  }
};