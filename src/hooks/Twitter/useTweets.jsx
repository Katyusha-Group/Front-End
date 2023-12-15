import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const fetchData = (setLoading, setData, num, initial, info, setInfo) => {
  console.log("🚀 ~ file: useTweets.jsx:11 ~ fetchData ~ info:", info)
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  setLoading(true);
  
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    // url: apis["tweets"]["tweets"]+"/"+num+"/",
    url: initial ? apis["tweets"]["tweets"] : info.next,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      setLoading(false);
      console.log("🚀 ~ file: useTweets.jsx:36 ~ .then ~ response.data:", response.data)
      setInfo(response.data)
      setData((x) => {
        if (!initial) return [...x, ...response.data.results];
        return response.data.results;
      });
      console.log("🚀 ~ file: useTweets.jsx:36 ~ .then ~ response.data:", info)
      return response.data;
    })
    .catch();
};
export const useTweets = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchData(setLoading, setData, 1, true, info, setInfo);
  }, []);
  useEffect(() => {
    console.log("🚀 ~ file: useTweets.jsx:50 ~ useTweets ~ info:", info)
  }, [info]);
  return { data, setData, loading, setLoading, info , setInfo};
};
