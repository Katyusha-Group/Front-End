import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";

export const usesProfileMe = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoading();

        const response = await fetch(apis["profiles"]["myusername"], {
          headers: { Authorization: `Bearer ${token}` },
        });
        const myUsername = await response.json();
        console.log("My username is: " + myUsername.username);

        const profileResponse = await fetch(
          apis["profiles"]["myprofile"] + `${myUsername.username}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await profileResponse.json();
        setProfile(data);
        console.log("User profile data: " + data.name);

        closeLoading();
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { profile, setProfile, loading };
};