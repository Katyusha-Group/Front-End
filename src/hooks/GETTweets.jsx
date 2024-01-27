import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const GETTweets = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [Tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    fetch((apis["twittes"]), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setTweets(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);
  return {Tweets, setTweets, loading};
};
