import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
    showLoading,
    closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const useGetChartData = () => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [Chart, setChart] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = "yazdan_mastery";
    useEffect(() => {
        showLoading();
        fetch((apis["profiles"]["myprofile"] + `${username}` + `/student-calendar`), {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setChart(data);
                closeLoading();
                console.log(data.Chart);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);
    return { Chart, setChart, loading };
};
