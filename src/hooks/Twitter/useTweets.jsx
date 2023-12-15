import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const fetchData = (setLoading, setData, num,initial) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  setLoading(true);
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
      setLoading(false);
      setData((x) => {
        if (!initial)
          return [...x, ...response.data.results] ;
        return response.data.results
      });
      return response.data;
    })
    .catch();
};
export const useTweets = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(setLoading, setData, 1,true);
  }, []);
  return { data, setData, loading, setLoading };
};
