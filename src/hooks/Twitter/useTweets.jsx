import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import { returnToken } from "../../Functions/returnToken";
export const fetchData = async (
  setLoading,
  setData,
  num,
  initial,
  info,
  setInfo,
) => {
  const token = returnToken();
  setLoading(true);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"] + "?page=" + num,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    var response = await axios.request(config);
    setLoading(false);
    setInfo(response.data);
    setData((x) => {
      if (!initial)
        return { ...x, results: [...x.results, ...response.data.results] };
      return response.data;
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
export const useTweets = () => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData(setLoading, setData, 1, true, info, setInfo);
  }, []);

  return { data, setData, loading, setLoading, info, setInfo };
};
