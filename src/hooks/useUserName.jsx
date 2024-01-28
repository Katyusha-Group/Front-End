import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { useInfo } from "../contexts/InfoContext";
import { useNavigate } from "react-router-dom";
import { returnToken } from "../Functions/returnToken";
export const userUserName = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { info,changeInfo } = useInfo();
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
        changeInfo("userName", data.username);
      } catch (error) {
        console.error(error);
      }
    };
    if(info.userName !== ""){
      fetchData();
    }
  }, []);
  return { profile, setProfile, loading };

};