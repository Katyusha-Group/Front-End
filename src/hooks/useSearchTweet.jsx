import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const useSearchTweet = (searchQuery) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [allTweets, setAllTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch( apis["tweets"]["tweets"]+"?search="+searchQuery, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      
      .then((data) => {
        setFilteredTweets(data);
        setLoading(false);
      })
      .catch((error) => console.error("error"));
  }, [searchQuery]);

  return { filteredTweets,setFilteredTweets, loading };
};
