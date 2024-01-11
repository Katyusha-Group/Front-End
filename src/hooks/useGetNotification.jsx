import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
    showLoading,
    closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
import { useNavigate } from "react-router-dom";
export const useGetNotification = (showModal) => {
    const Navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("authTokens"))=== null ? Navigate('/login'):JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [notificationData, setNotificationData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (showModal) {
            showLoading();
            fetch((apis["notification"]["notifications"]), {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((response) => response.json())
                .then((data) => {
                    setNotificationData(data);
                    closeLoading();
                    setLoading(false);
                })
                .catch((error) => console.error(error))
        };
    }, [showModal]);
    return { notificationData, setNotificationData, loading };
};
