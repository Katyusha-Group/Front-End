import React from "react";
import { apis } from "../assets/apis";
import { useEffect } from "react";
import { useState } from "react";
export const useUpdateProfile = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [info, setInfo] = useState({});
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(apis["accounts"]["profile"]["updateProfile"], {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => console.error(error));
    fetch(apis["orders"], {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error(error));

  }, []);
  return { info, orders };
};
