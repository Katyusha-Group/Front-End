import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const useLikedBy = (searchQuery) => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [likedTweets, setLikedTweets] = useState([]);
    const [likedLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(apis["tweets"]["likedBy"] + searchQuery, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())

            .then((data) => {
                setLikedTweets(data);
                setLoading(false);
            })
            .catch((error) => console.error("error"));
    }, [searchQuery]);
    return { likedTweets, likedLoading };
};
