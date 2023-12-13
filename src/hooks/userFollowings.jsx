import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const userFollowings = (myUsername) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [Followings, setFollowings] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoading();
        const response = await fetch((apis["profiles"]["following"]).replace("//following", `/${myUsername}/following`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const getfollowings = await response.json();
        // console.log("Followings are: " + JSON.stringify(getfollowings));
        setFollowings(getfollowings);
        // console.log("Followings Updated: ", Followings);
        closeLoading();
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, []);
  return {Followings, setFollowings};
};

