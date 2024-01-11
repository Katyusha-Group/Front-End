import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
import { useNavigate } from "react-router-dom";
import { returnToken } from "../Functions/returnToken";

export const useGetNotificationCount = () => {

  const [notificationCount, setNotificationCount] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = returnToken()
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
