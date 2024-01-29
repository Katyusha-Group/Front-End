import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const useRepliedBy = (searchQuery) => {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    const [repliedTweets, setRepliedTweets] = useState([]);
    const [replyLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(apis["tweets"]["repliedBy"] + searchQuery, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())

            .then((data) => {
                setRepliedTweets(data);
                setLoading(false);
            })
            .catch((error) => console.error("error"));
    }, [searchQuery]);
    return { repliedTweets, replyLoading };
};
