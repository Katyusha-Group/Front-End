import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const GETUsername = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoading();
        const response = await fetch(apis["profiles"]["myusername"], {
          headers: { Authorization: `Bearer ${token}` },
        });
        const myUsername = await response.json();
        setUsername(myUsername.username);
        closeLoading();
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, []);
  return {username, setUsername,loading};
};

