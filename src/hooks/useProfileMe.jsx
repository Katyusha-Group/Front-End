import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
import { useInfo } from "../contexts/InfoContext";
export const usesProfileMe = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")) === null ? null:JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { changeInfo } = useInfo();
  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoading();

        const profileResponse = await fetch(
          apis["profiles"]["myprofile"],
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await profileResponse.json();
        setProfile(data);
        closeLoading();
        setLoading(false);
        changeInfo("userName", data.username);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { profile, setProfile, loading };
};