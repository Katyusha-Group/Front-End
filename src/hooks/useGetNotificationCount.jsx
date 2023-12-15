import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
    showLoading,
    closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const useGetNotificationCount = () => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [notificationCount, setNotificationCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = "yazdan_mastery";
    useEffect(() => {
        showLoading();
        fetch((apis["notification"]["count"]), {
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
    { console.log(notificationCount) }
    return { notificationCount, setNotificationCount, loading };
};
