import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const useNotifications = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [info, setInfo] = useState([]);
  const [notifs, setNotifs] = React.useState([]);
  function saveWallet() {
    showLoading();
    fetch(apis["accounts"]["profile"]["updateProfile"], {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => console.error(error));
    closeLoading();
    const fetchData = () => {
      fetch(apis["notification"], {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      })
        .then((response) => response.json())
        .then((data) => {
          setNotifs(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
    const intervalId = setInterval(fetchData, 10 * 60 * 1000);
  }
  useEffect(() => {
    showLoading();
    saveWallet();
  }, []);
  return { info, setInfo, notifs, setNotifs };
};
