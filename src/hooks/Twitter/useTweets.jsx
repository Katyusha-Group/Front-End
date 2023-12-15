import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

export const useTweets = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    showLoading();
    let config = {
      method: "get",
      maxBodyLength: Infinity,
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
        setData(response.data);
        closeLoading();
      })
      .catch();
  };
  useEffect(()=>{fetchData()}, []);
  return { data, setData, loading};
};
