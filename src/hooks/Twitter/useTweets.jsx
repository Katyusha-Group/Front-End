import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { returnToken } from "../../Functions/returnToken";
export const fetchData = (setLoading, setData, num, initial, info, setInfo) => {
  const token = returnToken()
  setLoading(true);
  
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"]+"?page="+num,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      setLoading(false);
      setInfo(response.data)
      setData((x) => {
        if (!initial) return( {...x,results:[...x.results, ...response.data.results]});
        return response.data;
      });
      return response.data;
    })
    .catch();
};
export const useTweets = () => {
  const [data, setData] = useState({results:[]});
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchData(setLoading, setData, 1, true, info, setInfo);
  }, []);

  return { data, setData, loading, setLoading, info , setInfo};
};
