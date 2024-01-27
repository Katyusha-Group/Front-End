import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

import { useNavigate } from "react-router-dom";
import { returnToken } from "../Functions/returnToken";
export const useGetNotification = (showModal) => {

    const [notificationData, setNotificationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const Navigate = useNavigate();
    useEffect(() => {
        const token = returnToken()
        if (showModal) {
            fetch((apis["notification"]["notifications"]), {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((response) => response.json())
                .then((data) => {
                    setNotificationData(data);
                    setLoading(false);
                })
                .catch((error) => console.error(error))
        };
    }, [showModal]);
    return { notificationData, setNotificationData, loading };
};
