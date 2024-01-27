import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { useInfo } from "../contexts/InfoContext";
import { useNavigate } from "react-router-dom";
import { returnToken } from "../Functions/returnToken";
export const usesProfileMe = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { changeInfo } = useInfo();
  useEffect(() => {
    const token = returnToken()
    const fetchData = async () => {
      try {

        const profileResponse = await fetch(
          apis["profiles"]["myprofile"],
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await profileResponse.json();
        setProfile(data);
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