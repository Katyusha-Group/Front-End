import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const getCartInfo = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [state, setState] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  function getCartInfo() {
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["carts"] + `${shopId.id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data.items);
        setTotalPrice(data.total_price);
        setAmount(data.total_number);
        closeLoading();
      })
      .catch((error) => console.error(error));
    closeLoading();

  }
  useEffect(() => {
    showLoading();
    getCartInfo()
  }, []);
  return {state,setState, amount, setAmount, totalPrice, setTotalPrice};
};