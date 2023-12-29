import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const Report = async (id, setData) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = new FormData()
  data.append("twitte",id)
  data.append("reason","S")
  data.append("detail","")
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: apis["reportTwitte"]["reportTwitte"],
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    setData((x) => {
      let temp = x.results.map((x) => x.id !== id? x : {...x,report:true});
      return { ...x, results: temp };
    });
  } catch (error) {
    console.error(error);
  }
};
