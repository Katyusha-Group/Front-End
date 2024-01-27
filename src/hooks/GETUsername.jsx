import { useState, useEffect } from "react";
import { apis } from "../assets/apis";

export const GETUsername = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apis["profiles"]["myusername"], {
          headers: { Authorization: `Bearer ${token}` },
        });
        const myUsername = await response.json();
        setUsername(myUsername.username);
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, []);
  return {username, setUsername,loading};
};

