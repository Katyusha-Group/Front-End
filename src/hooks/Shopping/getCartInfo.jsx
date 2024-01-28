import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../../assets/apis";
import { getCartInfo } from "../../Functions/Shopping/getCartInfo";
export const useGetCartInfo = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [state, setState] = useState([]);
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCartInfo(setState, setTotalPrice, setAmount,setLoading)
  }, []);
  return {state,setState, amount, setAmount, totalPrice, setTotalPrice,loading,setLoading};
};