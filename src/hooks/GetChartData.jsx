import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
    showLoading,
    closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const useGetChartData = (username) => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [courseChoosed, setCourseChoosed] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        showLoading();
        fetch((apis["profiles"]["view_profile"] + `${username}` + `/student-calendar`), {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setCourseChoosed({ courseChoosed: data });
                closeLoading();
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);
    return { courseChoosed, setCourseChoosed, loading };
};
