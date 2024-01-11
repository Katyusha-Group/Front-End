import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import { returnToken } from "../../Functions/returnToken";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const fetchData = (setLoading, setData, num, initial) => {
  const token = returnToken()
  setLoading(true);
  
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: apis["forYouTwittes"]["forYouTwittes"],
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
        if (!initial) return( {...x,results:[...x.results, ...response.data.results]});
        return response.data;
      });
      return response.data;
    })
    .catch();
};
export const useTweetsForYou = () => {
  const [data, setData] = useState({results:[]});
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchData(setLoading, setData, 1, true);
  }, []);

  return { data, setData, loading, setLoading};
};