import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
    showLoading,
    closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const useGetNotification = () => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [notification, setNotification] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = "yazdan_mastery";
    useEffect(() => {
        showLoading();
        fetch((apis["notification"]), {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setNotification({ data });
                closeLoading();
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);
    return { notification, setNotification, loading };
};
