import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
import { useNavigate } from "react-router-dom";

export const useGetNotificationCount = () => {
  const Navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("authTokens"))=== null ? Navigate('/login'):JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [notificationCount, setNotificationCount] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    showLoading();
    fetch(apis["notification"]["count"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setNotificationCount(data);
        closeLoading();
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return { notificationCount, setNotificationCount, loading };
};
