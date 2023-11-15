import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const userFollowings = (username) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [Following, setFollowing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    showLoading();
    fetch((apis["profiles"]["following"]).replace("//", `/${username}/`), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setFollowing(data);
        closeLoading();
        setLoading(false);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);
  return {Following, setFollowing, loading};
};
