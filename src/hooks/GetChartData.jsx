import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const useGetChartData = (username) => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [courseChoosed, setCourseChoosed] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch((apis["profiles"]["view_profile"] + `${username}` + `/student-calendar`), {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setCourseChoosed({ courseChoosed: data });
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);
    return { courseChoosed, setCourseChoosed, loading };
};
