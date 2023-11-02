import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const saveWallet = () => {
  const [wallet, setWallet] = useState([]);
  function saveWallet() {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    fetch(apis["accounts"]["wallet"]["seeWallet"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setWallet(data.balance);
        closeLoading();
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    showLoading();
    saveWallet();
  }, []);
  return { wallet, setWallet };
};
